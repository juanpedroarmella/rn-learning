import { Product } from "lib/products";
import React, { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Score } from "./score";
import { Link } from "expo-router";
import { cssInterop } from "nativewind";

const StyledPressable = cssInterop(Pressable, {
  className: "style",
});

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/${product.id}`}>
      <StyledPressable className="active:bg-gray-500 border rounded-lg border-black active:border-red-200 mb-5">
        <View
          key={product.id}
          className="bg-white p-6 justify-center rounded-lg items-center gap-2 flex"
        >
          <Image source={{ uri: product.image }} style={styles.image} />
          <Text className="text-base font-semibold mt-4">{product.title}</Text>
          <Text className="text-sm text-gray-500 first-letter:capitalize">
            {product.description}
          </Text>
          <View className="flex-row justify-between items-center w-full mt-5">
            <Score score={product.rating.rate} maxScore={5} />
            <Text className="text-xl font-semibold">${product.price}</Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}

export function AnimatedProductCard({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <ProductCard product={product} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
