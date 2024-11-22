import { ActivityIndicator } from "react-native";
import { View, StyleSheet } from "react-native";

export default function Loading() {
  return (
    <View style={styles.loading}>
      <ActivityIndicator color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
