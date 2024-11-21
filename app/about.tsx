import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "./icons";
import { cssInterop } from "nativewind";

const StyledPressable = cssInterop(Pressable, {
  className: "style",
});

export default function About() {
  return (
    <ScrollView className="p-4 bg-black">
      <Link href="/" className="mb-4">
        <StyledPressable>
          <HomeIcon size={24} className="active:text-red-500 text-white" />
        </StyledPressable>
      </Link>
      <Text className="text-2xl font-bold text-white">About</Text>
      <Text className="text-lg text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, sequi
        doloribus qui nulla omnis odit quidem fuga sapiente laborum veritatis,
        eos quas libero accusamus assumenda autem eaque in aspernatur explicabo.
      </Text>
    </ScrollView>
  );
}
