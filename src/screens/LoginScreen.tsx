import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemedText } from "../components/ThemedText";
import { Colors } from "../constants/theme";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { loginAction } from "../redux/actions/authActions";
import { clearError } from "../redux/slices/authSlice";

const LoginScreen = () => {
  const { t } = useTranslation("common");
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (error && (username || password)) {
      dispatch(clearError());
    }
  }, [username, password, dispatch]);

  const handleLogin = () => {
    if (!username || !password) {
      return;
    }
    dispatch(loginAction({ username, password }));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-white"
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="px-6 py-10">
          <View className="items-center mb-10">
            {/* Logo could go here */}
            <View className="w-20 h-20 bg-colorPrimary rounded-2xl items-center justify-center mb-4">
              <ThemedText className="text-white text-3xl font-bold">
                TM
              </ThemedText>
            </View>
            <ThemedText className="text-3xl text-colorPrimary">
              {t("login")}
            </ThemedText>
            <ThemedText className="text-gray mt-2 text-center">
              {t("subtitle")}
            </ThemedText>
          </View>

          <View className="space-y-4">
            <View>
              <ThemedText className="text-sm font-semibold text-black mb-1 ml-1">
                {t("username")}
              </ThemedText>
              <TextInput
                className="h-14 border border-grayLow rounded-xl px-4 bg-gray-50 text-black"
                placeholder={t("username")}
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
                placeholderTextColor={Colors.gray}
              />
            </View>

            <View className="mt-4">
              <ThemedText className="text-sm font-semibold text-black mb-1 ml-1">
                {t("password")}
              </ThemedText>
              <TextInput
                className="h-14 border border-grayLow rounded-xl px-4 bg-gray-50 text-black"
                placeholder={t("password")}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor={Colors.gray}
              />
            </View>
          </View>

          <View className="h-6 mt-2">
            {error ? (
              <ThemedText className="text-red-500 text-sm text-center">
                {error}
              </ThemedText>
            ) : null}
          </View>

          <TouchableOpacity
            className={`h-14 rounded-xl justify-center items-center mt-4 ${
              loading ? "bg-grayLow" : "bg-colorPrimary"
            }`}
            onPress={handleLogin}
            disabled={loading}
            activeOpacity={0.8}
          >
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <ThemedText className="text-white text-lg">
                {t("login")}
              </ThemedText>
            )}
          </TouchableOpacity>

          <View className="mt-8 items-center">
            <TouchableOpacity>
              <ThemedText className="text-colorPrimary font-medium">
                {t("about")}
              </ThemedText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
