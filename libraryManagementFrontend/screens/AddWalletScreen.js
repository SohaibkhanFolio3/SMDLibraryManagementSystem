import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import styles from "./styles";
import componentstyles from "../components/componentstyles";
import { useDispatch } from "react-redux";
import { addBalance } from "../store/actions/UserActions";
import { useSelector } from "react-redux";

export default function AddWalletScreen({ navigation }) {
  const [amountToAdd, setAmountToAdd] = useState("");
  const user = useSelector((state) => state.user.loggedInUser);
  const dispatch = useDispatch();

  const handleAddMoney = async () => {
    if (amountToAdd === "") {
      alert("Enter an amount!");
    } else {
      await dispatch(addBalance(amountToAdd, user.token));
      alert("Balance added Successfully");
    }
  };

  return (
    <ImageBackground
      source={{ uri: "https://i.ibb.co/31YJYKp/background.jpg" }}
      style={styles.container}
    >
      <Text style={styles.upperText}>Add Cash to your Wallet</Text>
      <View style={styles.addamountInput}>
        <TextInput
          style={styles.TextInput}
          keyboardType="numeric"
          placeholder="Enter amount to add"
          value={amountToAdd.toString()}
          onChangeText={setAmountToAdd}
        />
      </View>
      <Text style={styles.balanceText}>
        Current Wallet Balance: {user.balance} USD
      </Text>
      <TouchableOpacity style={styles.loginBtn} onPress={handleAddMoney}>
        <Text style={styles.loginbuttonText}>Add Money</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
