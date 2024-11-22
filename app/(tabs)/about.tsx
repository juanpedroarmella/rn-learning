import { Text } from "react-native";
import Screen from "components/screen";

export default function About() {
  return (
    <Screen className="flex-1">
      <Text className="text-2xl font-bold text-white">About</Text>
      <Text className="text-lg text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, sequi
        doloribus qui nulla omnis odit quidem fuga sapiente laborum veritatis,
        eos quas libero accusamus assumenda autem eaque in aspernatur explicabo.
      </Text>
    </Screen>
  );
}
