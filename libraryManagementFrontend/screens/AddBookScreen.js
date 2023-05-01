import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useSelector } from "react-redux";
import Book from "../api/Book";
import AppRoutes from "../constants/AppRoutes";

export default function AddBookScreen({ navigation, route }) {
  const { book } = route.params;
  const [newQuantity, setNewQuantity] = useState("");
  const user = useSelector((state) => state.user.loggedInUser);

  function isInDesiredForm(str) {
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n > 0;
  }

  const handleAddQuantity = async () => {
    if (!isInDesiredForm(newQuantity)) {
      alert("Please enter a valid number");
      return;
    }
    try {
      await Book.addMoreCopies(book.id, newQuantity, user.token);
      alert("Copies added successfully.");
      navigation.navigate(AppRoutes.MANAGEBOOKS);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.upperText}>Add More Copies</Text>
      <View style={styles.addamountInput}>
        <TextInput
          style={styles.TextInput}
          keyboardType="numeric"
          placeholder="Enter number of copies"
          value={newQuantity}
          onChangeText={setNewQuantity}
        />
      </View>
      <Text style={styles.balanceText}>Name of Book: {book.title}</Text>
      <Text style={styles.balanceText}>Current Copies: {book.quantity}</Text>
      <TouchableOpacity style={styles.loginBtn} onPress={handleAddQuantity}>
        <Text style={styles.loginbuttonText}>Add Copy</Text>
      </TouchableOpacity>
    </View>
  );
}
