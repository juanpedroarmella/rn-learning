import { Product } from "lib/products";
import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";

export function ProductCard({ product }: { product: Product }) {
  return (
    <View
      key={product.id}
      className="bg-white p-4 rounded-lg justify-center items-center gap-2 mb-3"
    >
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
    </View>
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
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontWeight: "semibold",
    textAlign: "center",
  },
});
