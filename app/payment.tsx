import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Payment = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Credit / Debit Card</Text>
      </View>

      <Text style={styles.label}>Name on Card</Text>
      <TextInput style={styles.input} placeholder="Alexandra Smith" />

      <Text style={styles.label}>Card Number</Text>
      <TextInput style={styles.input} placeholder="4747 4747 4747 4747" />

      <View style={styles.row}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Expiry Date</Text>
          <TextInput style={styles.input} placeholder="07/21" />
        </View>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>CVC</Text>
          <TextInput style={styles.input} placeholder="474" />
        </View>
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
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
  label: {
    fontSize: 16,
    fontFamily: "SF-PRO-BOLD",
    marginVertical: 10,
  },
  input: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 10,
    borderColor: "#CCC",
    borderWidth: 1,
    fontFamily: "SF-PRO-REGULAR",
    paddingLeft: 10,
    color: "#9586A8",
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputGroup: {
    width: "48%",
  },
  saveButton: {
    backgroundColor: "#7D4CDB",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  saveButtonText: {
    color: "#FFF",
    fontSize: 15,
    fontFamily: "SF-PRO-REGULAR",
  },
});

export default Payment;
