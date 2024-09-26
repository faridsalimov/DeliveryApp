import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { productsData } from "./data";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";

const Products = ({ route }) => {
  const { categoryName } = route.params;
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const loadBasket = async () => {
      const savedBasket = await AsyncStorage.getItem("basket");
      setBasket(savedBasket ? JSON.parse(savedBasket) : []);
    };
    loadBasket();
  }, []);

  const addToBasket = async (product) => {
    setBasket((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      let updatedBasket;
      if (existingProduct) {
        updatedBasket = prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedBasket = [...prev, { ...product, quantity: 1 }];
      }
      AsyncStorage.setItem("basket", JSON.stringify(updatedBasket));
      return updatedBasket;
    });
  };

  const filteredProducts = productsData[categoryName].filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const openModal = (item) => {
    setSelectedProduct(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{categoryName}</Text>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <TouchableOpacity onPress={() => openModal(item)}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
            </TouchableOpacity>
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>

            <TouchableOpacity
              onPress={() => addToBasket(item)}
              style={styles.iconButton}
            >
              <FontAwesome name="shopping-cart" size={24} color="green" />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />

      {selectedProduct && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <ScrollView>
                <Image
                  source={{ uri: selectedProduct.image }}
                  style={styles.modalImage}
                />
                <Text style={styles.modalProductName}>
                  {selectedProduct.name}
                </Text>
                <Text style={styles.modalProductPrice}>
                  {selectedProduct.price}
                </Text>
                {selectedProduct.description && (
                  <Text style={styles.modalProductDescription}>
                    {selectedProduct.description}
                  </Text>
                )}
                {selectedProduct.origin && (
                  <Text style={styles.modalProductOrigin}>
                    Origin: {selectedProduct.origin}
                  </Text>
                )}
                {selectedProduct.weight && (
                  <Text style={styles.modalProductWeight}>
                    Weight: {selectedProduct.weight}
                  </Text>
                )}

                <TouchableOpacity
                  onPress={() => addToBasket(selectedProduct)}
                  style={styles.addToCartButton}
                >
                  <Text style={styles.addToCartButtonText}>Add to Cart</Text>
                </TouchableOpacity>
              </ScrollView>
              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F6F5F5",
  },
  header: {
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 34,
    color: "#2D0C57",
    fontFamily: "SF-PRO-BOLD",
  },
  searchContainer: {
    paddingVertical: 10,
    borderColor: "#9586A8",
  },
  searchInput: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 10,
    borderColor: "#CCC",
    borderWidth: 1,
    fontFamily: "SF-PRO-REGULAR",
    paddingLeft: 20,
    color: "#9586A8",
  },
  listContent: {
    paddingBottom: 100,
  },
  productCard: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: "center",
    borderColor: "#d9d0e3",
    borderWidth: 1,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  productDetails: {
    flex: 1,
    marginLeft: 15,
  },
  productName: {
    fontSize: 16,
    color: "#2D0C57",
    fontFamily: "SF-PRO-BOLD",
  },
  productPrice: {
    fontSize: 14,
    color: "#AAA",
    marginTop: 5,
    fontFamily: "SF-PRO-REGULAR",
  },
  iconButton: {
    padding: 10,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    maxHeight: "80%",
  },
  modalImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  modalProductName: {
    fontSize: 25,
    color: "#4E2C84",
    marginVertical: 10,
    fontFamily: "SF-PRO-BOLD",
  },
  modalProductPrice: {
    fontSize: 15,
    color: "#2D0C57",
    marginVertical: 5,
    fontFamily: "SF-PRO-REGULAR",
  },
  modalProductDescription: {
    fontSize: 14,
    color: "#4E2C84",
    marginVertical: 10,
    fontFamily: "SF-PRO-REGULAR",
  },
  modalProductOrigin: {
    fontSize: 14,
    color: "#9586A8",
    marginBottom: 5,
    fontFamily: "SF-PRO-REGULAR",
  },
  modalProductWeight: {
    fontSize: 14,
    color: "#9586A8",
    marginBottom: 10,
    fontFamily: "SF-PRO-REGULAR",
  },
  addToCartButton: {
    backgroundColor: "#00A862",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  addToCartButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "SF-PRO-REGULAR",
  },
  closeButton: {
    backgroundColor: "#4E2C84",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  closeButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "SF-PRO-REGULAR",
  },
});

export default Products;
