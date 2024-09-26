import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { categoriesData } from "./data";
import { SafeAreaView } from "react-native-safe-area-context";

const Categories = ({ navigation }) => {
  const [search, setSearch] = useState("");

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() =>
        navigation.navigate("products", { categoryName: item.name })
      }
    >
      <Image source={{ uri: item.image }} style={styles.categoryImage} />
      <View style={styles.categoryInfo}>
        <Text style={styles.categoryName}>{item.name}</Text>
        <Text style={styles.categoryCount}>({item.count})</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Categories</Text>
      </View>

      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={categoriesData.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        )}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F6F5F5",
  },
  headerContainer: {
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 34,
    color: "#2D0C57",
    fontFamily: "SF-PRO-BOLD",
  },
  searchBarContainer: {
    paddingVertical: 10,
  },
  searchBar: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 10,
    borderColor: "#CCC",
    borderWidth: 1,
    fontFamily: "SF-PRO-REGULAR",
    paddingLeft: 20,
    color: "#9586A8",
  },
  categoryCard: {
    backgroundColor: "#FFF",
    flex: 1,
    margin: 5,
    borderRadius: 10,
    overflow: "hidden",
    borderColor: "#d9d0e3",
    borderWidth: 1,
  },
  categoryImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  categoryInfo: {
    padding: 10,
  },
  categoryName: {
    fontSize: 18,
    color: "#2D0C57",
    fontFamily: "SF-PRO-BOLD",
  },
  categoryCount: {
    fontSize: 13,
    color: "#9586A8",
    marginTop: 5,
    fontFamily: "SF-PRO-REGULAR",
  },
});

export default Categories;
