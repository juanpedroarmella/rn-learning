import { getProducts, Product } from "lib/products";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Logo } from "./logo";
import { AnimatedProductCard } from "./product-card";

export function Main() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((games) => setProducts(games));
  }, []);

  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        ...styles.view,
      }}
    >
      <View style={styles.logo}>
        <Logo style={{ width: 100, height: 100 }} />
      </View>
      {products.length === 0 ? (
        <View style={styles.loading}>
          <ActivityIndicator color="#fff" />
        </View>
      ) : (
        <FlatList
          style={styles.list}
          data={products}
          renderItem={({ item }) => (
            <AnimatedProductCard product={item} index={item.id} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    gap: 20,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginTop: 20,
    width: 100,
    height: 100,
  },
  list: {
    width: "100%",
    padding: 20,
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
