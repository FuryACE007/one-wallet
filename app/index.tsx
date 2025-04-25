import { Text, View } from "react-native";
import { colors } from './theme/colors';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: colors.text.primary }}>
        Edit app/index.tsx to edit this screen.
      </Text>
    </View>
  );
}
