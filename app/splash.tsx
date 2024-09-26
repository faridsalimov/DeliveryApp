import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Splash = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}></View>

      <View style={styles.bottomSection}>
        <View style={styles.iconWrapper}>
          <Image
            source={{
              uri: "https://img.icons8.com/ios-glyphs/30/000000/box.png",
            }}
            style={styles.icon}
          />
        </View>

        <Text style={styles.title}>Non-Contact Deliveries</Text>

        <Text style={styles.subtitle}>
          When placing an order, select the option {"\n"}
          "Contactless delivery" and the courier will leave {"\n"}
          your order at the door.
        </Text>

        <TouchableOpacity
          style={styles.orderButton}
          onPress={() => navigation.navigate("categories")}
        >
          <Text style={styles.orderButtonText}>ORDER NOW</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F5",
  },
  topSection: {
    flex: 1,
    backgroundColor: "#8000FF",
    width: "100%",
  },
  bottomSection: {
    width: "100%",
    backgroundColor: "white",
    padding: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
  },
  iconWrapper: {
    backgroundColor: "#EDEAFD",
    borderRadius: 50,
    padding: 20,
    marginBottom: 20,
  },
  icon: {
    width: 30,
    height: 30,
    color: "#2D0C57",
  },
  title: {
    fontSize: 24,
    color: "#2D0C57",
    marginBottom: 10,
    textAlign: "center",
    fontFamily: "SF-PRO-BOLD",
  },
  subtitle: {
    fontSize: 14,
    color: "#9586A8",
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "SF-PRO-REGULAR",
  },
  orderButton: {
    backgroundColor: "#0BCE83",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 100,
    marginBottom: 10,
  },
  orderButtonText: {
    color: "white",
    fontFamily: "SF-PRO-REGULAR",
  },
});

export default Splash;
