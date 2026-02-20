import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity, View } from "react-native";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import "./global.css";
import { ThemedText } from "./src/components/ThemedText";
import { useLanguage } from "./src/hooks/useLanguage";
import "./src/i18n";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

function CustomHeader({
  navigation,
  title,
}: {
  navigation: any;
  title: string;
}) {
  return (
    <View className="h-16 bg-white flex-row items-center justify-between px-4 border-b border-grayLow mt-10">
      <TouchableOpacity
        className="w-10 items-start"
        onPress={() => navigation.toggleDrawer()}
      >
        <Ionicons name="menu" size={28} color="#01696C" />
      </TouchableOpacity>
      <ThemedText className="text-xl flex-1 text-center text-black">
        {title}
      </ThemedText>
      <View className="w-10" />
    </View>
  );
}

function HomeScreen({ navigation }: any) {
  const { t } = useTranslation("common");

  return (
    <View className="flex-1 bg-white">
      <CustomHeader navigation={navigation} title={t("home")} />
      <View className="flex-1 items-center justify-center p-5">
        <ThemedText className="text-3xl mb-2 text-center text-colorPrimary">
          {t("helloWorld")}
        </ThemedText>
        <ThemedText className="text-base text-center text-gray">
          {t("subtitle")}
        </ThemedText>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function ExploreScreen({ navigation }: any) {
  const { t } = useTranslation("common");
  return (
    <View className="flex-1 bg-white">
      <CustomHeader navigation={navigation} title={t("explore")} />
      <View className="flex-1 items-center justify-center p-5">
        <ThemedText className="text-2xl font-bold mb-2 text-center text-colorPrimary">
          {t("explore")}
        </ThemedText>
        <ThemedText className="text-base text-center text-gray">
          {t("welcome")}
        </ThemedText>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  const { t } = useTranslation("common");
  const { loadSavedLanguage } = useLanguage();
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Load fonts
        await Font.loadAsync({
          NotoNastaliqUrdu: require("./assets/fonts/nooriNastaleeq.ttf"),
        });
        // Load language
        await loadSavedLanguage();
      } catch (e) {
        console.warn(e);
      } finally {
        setFontsLoaded(true);
      }
    }

    prepare();
  }, [loadSavedLanguage]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            drawerPosition: "right", // Ensure drawer opens from the right for RTL
            drawerStyle: {
              backgroundColor: "white",
              width: 240,
            },
            drawerLabelStyle: {
              fontFamily: "NotoNastaliqUrdu",
              textAlign: "right",
            },
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
