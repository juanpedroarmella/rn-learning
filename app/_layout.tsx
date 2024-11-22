import { CircleInfoIcon } from "components/icons";
import { Logo } from "components/logo";
import { Link, Stack } from "expo-router";
import { Pressable, View } from "react-native";

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "black",
          },
          headerTintColor: "white",
          headerTitle: "Shop",
          headerLeft: () => (
            <Link href="/">
              <Logo style={{ width: 45, height: 45 }} className="ml-4 mr-1" />
            </Link>
          ),
          headerRight: () => (
            <Link href="/about" className="pr-4">
              <Pressable>
                {({ pressed }) => (
                  <CircleInfoIcon size={24} color={pressed ? "red" : "white"} />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
