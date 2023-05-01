import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import BookComponent from "../components/BookComponent";
import AppRoutes from "../constants/AppRoutes";
import ColourConstants from "../constants/ColourConstants";
import { useSelector } from "react-redux";
import Book from "../api/Book";
import { useState, useEffect, useFo } from "react";
import { useIsFocused } from "@react-navigation/native";

const ShowBooksScreen = ({ navigation }) => {
  const user = useSelector((state) => state.user.loggedInUser);
  const [books, setBooks] = useState([]);
  const isFocused = useIsFocused();
  const deleteOnPress = (book) => {
    Alert.alert("Are you sure?", "Are you sure you want to delete this book?", [
      {
        text: "No",
        onPress: () => {},
      },
      {
        text: "Yes",
        onPress: () => deleteItemYesOnPress(book.id),
      },
    ]);
  };

  const deleteItemYesOnPress = async (book_id) => {
    try {
      await Book.deleteBook(book_id, user.token);
      loadBooks();
    } catch (error) {
      console.log(error);
    }
  };
  const buttons = [
    {
      title: "Delete Book",
      onPress: deleteOnPress,
    },
    {
      title: "Add More Copies",
      onPress: (item) => {
        navigation.navigate(AppRoutes.ADDCOPY, {
          book: item,
        });
      },
    },
  ];

  const loadBooks = async () => {
    try {
      const newBooks = await Book.getBooks(user.token);
      setBooks(newBooks);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      loadBooks();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={bookStyles.addButton}
        onPress={() => {
          navigation.navigate(AppRoutes.ADDBOOK);
        }}
      >
        <Text style={bookStyles.addButtonText}>Add Book</Text>
      </TouchableOpacity>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookComponent
            image={item.cover_page_url}
            title={item.title}
            author={item.author}
            quantity={item.quantity}
            category={item.category}
            buttons={buttons.map((button) => ({
              ...button,
              onPress: () => button.onPress(item),
            }))}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColourConstants.BACKGROUND_COLOUR,
    padding: 20,
  },
  listContentContainer: {
    paddingBottom: 50,
  },
  bookContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ShowBooksScreen;

const bookStyles = StyleSheet.create({
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
    marginBottom: 50,
  },
  addButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  noVehiclesText: {
    marginTop: 20,
    fontSize: 16,
    color: "#999",
  },
  vehicleContainer: {
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
  vehicleDetailsContainer: {
    width: "70%",
  },
  vehicleText: {
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
