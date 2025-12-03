import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.mobileContainer}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="recipe-detail"
            options={{
              title: "Recipe Details",
              headerStyle: {
                backgroundColor: "#fff",
              },
              headerTintColor: "#333",
              headerTitleStyle: {
                fontWeight: "600",
              },
            }}
          />
          <Stack.Screen
            name="recipes"
            options={{
              title: "All Recipes",
              headerStyle: {
                backgroundColor: "#fff",
              },
              headerTintColor: "#333",
              headerTitleStyle: {
                fontWeight: "600",
              },
            }}
          />
          <Stack.Screen
            name="chatbot"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "web" ? "#e2e8f0" : "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mobileContainer: {
    flex: 1,
    width: "100%",
    maxWidth: Platform.OS === "web" ? 480 : "100%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: "hidden",
  },
});
