import { getProducts, Product } from "lib/products";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import Loading from "./loading";
import { AnimatedProductCard } from "./product-card";
import Screen from "./screen";
export function Main() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((games) => setProducts(games));
  }, []);

  return (
    <Screen className="flex-1">
      {products.length === 0 ? (
        <Loading />
      ) : (
        <FlatList
          style={styles.list}
          data={products}
          renderItem={({ item }) => (
            <AnimatedProductCard product={item} index={item.id} />
          )}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: {
    width: "100%",
    padding: 20,
  },
});
