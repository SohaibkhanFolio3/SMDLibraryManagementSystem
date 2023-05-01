import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import ColourConstants from "../constants/ColourConstants";
import componentstyles from "../components/componentstyles";
import AppRoutes from "../constants/AppRoutes";
import { useSelector } from "react-redux";
import Book from "../api/Book";

export default function ManageBookScreen({ navigation }) {
  const user = useSelector((state) => state.user.loggedInUser);
  const [cover_page_url, setCoverPageURL] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const handleAddBook = async () => {
    if (title !== "" && author !== "" && quantity !== "" && category !== "") {
      try {
        await Book.addBook(
          {
            cover_page_url,
            title,
            author,
            quantity,
            category,
          },
          user.token
        );
        alert("Book Added Successfuly");
        navigation.navigate(AppRoutes.HOME);
      } catch (error) {
        alert(error);
      }
    } else {
      alert("All fields except Image URL are required.");
    }
  };

  return (
    <View style={BookStyles.container}>
      <View style={styles.formContainer}>
        <Input
          placeholder="Enter Book Image URL"
          value={cover_page_url}
          setValue={setCoverPageURL}
        />
        <Input
          placeholder="Enter Book Title"
          value={title}
          setValue={setTitle}
        />
        <Input
          placeholder="Enter Book Author"
          value={author}
          setValue={setAuthor}
        />
        <Input
          placeholder="Enter Book Quantity"
          value={quantity}
          setValue={setQuantity}
        />
        <Input
          placeholder="Enter Book Category"
          value={category}
          setValue={setCategory}
        />
        <TouchableOpacity style={BookStyles.addButton} onPress={handleAddBook}>
          <Text style={BookStyles.addButtonText}>Add Book</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const BookStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: ColourConstants.BACKGROUND_COLOUR,
  },
  inputContainer: {
    width: "90%",
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: ColourConstants.SECONDARY_COLOUR,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: "15%",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: ColourConstants.PRIMARY_COLOUR,
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 30,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  noBooksText: {
    marginTop: 20,
    fontSize: 16,
    color: "#999",
  },
  bookContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 25,
  },
  bookDetailsContainer: {
    width: "70%",
  },
  bookText: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: ColourConstants.PRIMARY_COLOUR,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
