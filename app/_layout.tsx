import "../components/global.css";
import { Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import { colors } from "@/components/theme/colors";
import "../components/global.css";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        colors={[colors.background.start, colors.background.end]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,
          headerTintColor: colors.text.primary,
          contentStyle: {
            backgroundColor: "transparent",
          },
        }}
      />
    </View>
  );
}
