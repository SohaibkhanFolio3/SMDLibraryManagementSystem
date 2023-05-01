import React from "react";
import { View, StyleSheet, FlatList, Text, Image } from "react-native";
import BookComponent from "../components/BookComponent";
import AppRoutes from "../constants/AppRoutes";
import ColourConstants from "../constants/ColourConstants";
import Book from "../api/Book";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";

const ShowBooksScreen = ({ navigation, route }) => {
  const user = useSelector((state) => state.user.loggedInUser);
  const [books, setBooks] = useState([]);
  const isFocused = useIsFocused();
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

  const buttons = [
    {
      title: "Issue Now",
      onPress: (item) =>
        navigation.navigate(AppRoutes.DATETIME, { title: item.title }),
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookComponent
            image={item.cover_page_url}
            title={item.title}
            author={item.author}
            quantity={item.quantity > 0 ? "Available" : "Unavailable"}
            category={item.category}
            buttons={
              item.quantity > 0
                ? buttons.map((button) => ({
                    ...button,
                    onPress: () => button.onPress(item),
                  }))
                : []
            }
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
