import { Text, View } from "react-native";

export function Score({
  score,
  maxScore,
}: {
  score: number;
  maxScore: number;
}) {
  const getColors = () => {
    const percentage = (score / maxScore) * 100;
    if (percentage < 40) {
      return "bg-red-500";
    }
    if (percentage < 60) {
      return "bg-yellow-500";
    }
    return "bg-green-500";
  };

  const color = getColors();

  return (
    <View
      className={`w-9 h-9 rounded-full justify-center items-center ${color}`}
    >
      <Text className="text-lg font-bold text-white">{score}</Text>
    </View>
  );
}
