import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "./global.css";
import { useLanguage } from "./src/hooks/useLanguage";
import "./src/i18n";

function CustomHeader({
  navigation,
  title,
}: {
  navigation: any;
  title: string;
}) {
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.toggleDrawer()}
      >
        <Ionicons name="menu" size={28} color="black" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={{ width: 40 }} />
    </View>
  );
}

function HomeScreen({ navigation }: any) {
  const { t } = useTranslation("common");

  return (
    <View style={styles.container}>
      <CustomHeader navigation={navigation} title={t("home")} />
      <View style={styles.content}>
        <Text className="text-orange-600">{t("helloWorld")}</Text>
        <Text style={styles.subtitle}>{t("subtitle")}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function ExploreScreen({ navigation }: any) {
  const { t } = useTranslation("common");
  return (
    <View style={styles.container}>
      <CustomHeader navigation={navigation} title={t("explore")} />
      <View style={styles.content}>
        <Text style={styles.title}>{t("explore")}</Text>
        <Text style={styles.subtitle}>{t("welcome")}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  const { t } = useTranslation("common");
  const { loadSavedLanguage } = useLanguage();

  useEffect(() => {
    // Load saved language preference on app startup
    loadSavedLanguage();
  }, [loadSavedLanguage]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            drawerPosition: "right", // Ensure drawer opens from the right
          }}
        >
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: t("home") }}
          />
          <Drawer.Screen
            name="Explore"
            component={ExploreScreen}
            options={{ title: t("explore") }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  header: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    marginTop: 40, // Avoid status bar
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
    textAlign: "center",
  },
  menuButton: {
    width: 40,
    alignItems: "flex-start",
  },
});
