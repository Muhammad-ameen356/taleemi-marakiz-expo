import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import "./global.css";
import { useAppSelector } from "./src/hooks/redux";
import { useLanguage } from "./src/hooks/useLanguage";
import "./src/i18n";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import RootStack from "./src/navigation/RootStack";
import { persistor, store } from "./src/redux/store";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

function Auth() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  return (
    <NavigationContainer>
      {isLoggedIn ? <DrawerNavigator /> : <RootStack />}
    </NavigationContainer>
  );
}

export default function App() {
  const { loadSavedLanguage } = useLanguage();
  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Load fonts
        await Font.loadAsync({
          NotoNastaliqUrdu: require("./assets/fonts/nooriNastaleeq.ttf"),
          "NotoNastaliqUrdu-Bold": require("./assets/fonts/nooriNastaleeq.ttf"),
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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Auth />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}
