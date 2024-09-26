import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Checkout = ({ navigation }) => {
  const handlePayment = () => {
    navigation.navigate("payment");
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Checkout</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Payment method</Text>
        <Text style={styles.sectionDetail}>**** **** **** 4747</Text>
        <TouchableOpacity onPress={handlePayment}>
          <Text style={styles.changeLink}>CHANGE</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Delivery address</Text>
        <Text style={styles.sectionDetail}>Alexandra Smith</Text>
        <Text style={styles.sectionDetail}>
          Cesu 31 k-2 5.st, Riga, LV-1012, Latvia
        </Text>
        <TouchableOpacity>
          <Text style={styles.changeLink}>CHANGE</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Delivery options</Text>
        <Text style={styles.sectionDetail}>By Drone</Text>
        <TouchableOpacity>
          <Text style={styles.changeLink}>CHANGE</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Non-contact delivery</Text>
        <Text style={styles.sectionDetail}>Yes</Text>
        <TouchableOpacity>
          <Text style={styles.changeLink}>CHANGE</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.paymentButton}>
        <Text style={styles.paymentButtonText}>Pay</Text>
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
  infoSection: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: "SF-PRO-BOLD",
    marginBottom: 5,
  },
  sectionDetail: {
    color: "#9586A8",
    fontFamily: "SF-PRO-REGULAR",
  },
  changeLink: {
    color: "#7D4CDB",
    fontFamily: "SF-PRO-BOLD",
    marginTop: 5,
  },
  paymentButton: {
    backgroundColor: "#7D4CDB",
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  paymentButtonText: {
    color: "#FFF",
    fontSize: 15,
    fontFamily: "SF-PRO-REGULAR",
  },
});

export default Checkout;
