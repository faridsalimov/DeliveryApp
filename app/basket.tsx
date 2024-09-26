import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  RefreshControl,
} from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const Basket = ({ navigation }) => {
  const [basket, setBasket] = useState([]);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const loadBasket = async () => {
    const savedBasket = await AsyncStorage.getItem("basket");
    setBasket(savedBasket ? JSON.parse(savedBasket) : []);
  };

  useEffect(() => {
    loadBasket();
  }, []);

  const handleCheckout = () => {
    navigation.navigate("checkout");
  };

  const filteredBasket = basket.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const updateQuantity = async (id, action) => {
    setBasket((prev) => {
      const updatedBasket = prev.map((item) => {
        if (item.id === id) {
          if (action === "increase") {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action === "decrease" && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      });
      AsyncStorage.setItem("basket", JSON.stringify(updatedBasket));
      return updatedBasket;
    });
  };

  const removeItem = async (id) => {
    setBasket((prev) => {
      const updatedBasket = prev.filter((item) => item.id !== id);
      AsyncStorage.setItem("basket", JSON.stringify(updatedBasket));
      return updatedBasket;
    });
  };

  const calculateTotalPrice = () => {
    return filteredBasket
      .reduce((total, item) => {
        const price = parseFloat(item.price);
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await loadBasket();
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Basket</Text>
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
        data={filteredBasket}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDetails}>
                {item.price} * {item.quantity}
              </Text>
            </View>
            <View style={styles.actionButtons}>
              <TouchableOpacity
                onPress={() => updateQuantity(item.id, "increase")}
                style={styles.iconButton}
              >
                <FontAwesome name="plus-circle" size={24} color="green" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => updateQuantity(item.id, "decrease")}
                style={styles.iconButton}
              >
                <FontAwesome name="minus-circle" size={24} color="red" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => removeItem(item.id)}
                style={styles.iconButton}
              >
                <FontAwesome name="trash" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ₼{calculateTotalPrice()}</Text>
      </View>

      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
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
  itemCard: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    borderColor: "#d9d0e3",
    borderWidth: 1,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 15,
  },
  itemName: {
    fontSize: 16,
    color: "#2D0C57",
    fontFamily: "SF-PRO-BOLD",
  },
  itemDetails: {
    fontSize: 14,
    color: "#AAA",
    marginTop: 5,
    fontFamily: "SF-PRO-REGULAR",
  },
  actionButtons: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    marginHorizontal: 10,
  },
  totalContainer: {
    marginVertical: 10,
    alignItems: "flex-end",
  },
  totalText: {
    fontSize: 18,
    color: "#2D0C57",
    fontFamily: "SF-PRO-BOLD",
  },
  checkoutButton: {
    backgroundColor: "#7D4CDB",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  checkoutButtonText: {
    color: "#FFF",
    fontSize: 15,
    fontFamily: "SF-PRO-REGULAR",
  },
});

export default Basket;
