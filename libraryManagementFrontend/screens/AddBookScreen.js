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

export default function AddBookScreen({ navigation, route }) {
  const { quantity } = route.params;
  const { title } = route.params;
  const [newQuantity, setNewQuantity] = useState(quantity);
  // const user = useSelector((state) => state.user.loggedInUser);
  // const dispatch = useDispatch();

  // const handleAddMoney = async () => {
  //   if (amountToAdd === "") {
  //     alert("Enter an amount!");
  //   } else {
  //     await dispatch(addBalance(amountToAdd, user.token));
  //     alert("Balance added Successfully");
  //   }
  // };
  const handleAddQuantity = () => {
    // TODO: add quantity logic here
    // for example, call an API to update the quantity in the backend
    // and then navigate back to the previous screen
    setNewQuantity("");
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={{ uri: "https://i.ibb.co/31YJYKp/background.jpg" }}
      style={styles.container}
    >
      <Text style={styles.upperText}>Add More Copies</Text>
      <View style={styles.addamountInput}>
        <TextInput
          style={styles.TextInput}
          keyboardType="numeric"
          placeholder="Enter number of copies"
          // value={newQuantity.toString()}
          onChangeText={setNewQuantity}
        />
      </View>
      <Text style={styles.balanceText}>Name of Book: {title}</Text>
      <Text style={styles.balanceText}>Current Copies: {quantity}</Text>
      <TouchableOpacity style={styles.loginBtn} onPress={handleAddQuantity}>
        <Text style={styles.loginbuttonText}>Add Copy</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
