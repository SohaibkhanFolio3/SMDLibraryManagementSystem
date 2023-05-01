import React from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";
import BookComponent from "../components/BookComponent";
import AppRoutes from "../constants/AppRoutes";
import componentstyles from "../components/componentstyles";
import ColourConstants from "../constants/ColourConstants";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import Booking from "../api/Booking";

const ShowBooksScreen = ({ navigation }) => {
  const user = useSelector((state) => state.user.loggedInUser);
  const [books, setBooks] = useState([]);
  const isFocused = useIsFocused();
  const loadBooks = async () => {
    try {
      const newBooks = await Booking.getBookings(user.token);
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

  const returnBook = async (book_id) => {
    try {
      await Booking.returnBook(book_id, user.token);
      alert("Book successfully returned.");
      loadBooks();
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleConfirmation = (book_id) => {
    Alert.alert("Confirmation", "Are you sure you want to return the book?", [
      {
        text: "No",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          returnBook(book_id);
        },
      },
    ]);
  };
  const buttons = [
    {
      title: "Return Book",
      onPress: (item) => {
        handleConfirmation(item.book.id);
      },
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookComponent
            image={item.book.cover_page_url}
            title={item.book.title}
            author={item.book.author}
            quantity={item.book.quantity}
            category={item.book.category}
            returnDate={item.booked_till}
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
    paddingBottom: 20,
  },
  bookContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ShowBooksScreen;
