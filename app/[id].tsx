import Loading from "components/loading";
import { Stack, useLocalSearchParams } from "expo-router";
import { getProductDetails, Product } from "lib/products";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import Screen from "../components/screen";
import { Score } from "components/score";

export default function ProductDetail() {
  const { id } = useLocalSearchParams();

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    getProductDetails(id as string).then(setProduct);
  }, [id]);

  console.log(product);

  if (!product)
    return (
      <Screen className="flex-1 items-center justify-center">
        <Loading />
      </Screen>
    );

  return (
    <Screen className="min-h-screen flex-1 items-center justify-center">
      <Stack.Screen
        options={{
          headerTitle:
            product?.title.slice(0, 35) +
            (product?.title.length > 35 ? "..." : ""),
        }}
      />
      <View className="flex-1 gap-2 mt-2">
        <Image
          source={{ uri: product?.image }}
          style={{ width: 300, height: 300 }}
          className="self-center rounded-lg mb-2"
        />
        <Text className="text-2xl font-bold text-white">{product?.title}</Text>
        <Text className="text-lg text-white first-letter:capitalize">
          {product?.description}
        </Text>
        <View className="flex-row justify-between items-center w-full">
          <Text className="text-xl font-semibold text-white">
            ${product?.price}
          </Text>
          <Score score={product?.rating.rate} maxScore={5} />
        </View>
        <Text className="text-lg text-white">
          {product?.rating.count} reviews
        </Text>
      </View>
    </Screen>
  );
}
