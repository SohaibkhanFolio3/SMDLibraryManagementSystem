import React from "react";
import { View, StyleSheet, FlatList, Text, Image } from "react-native";
import BookComponent from "../components/BookComponent";
import AppRoutes from "../constants/AppRoutes";
import ColourConstants from "../constants/ColourConstants";

const ShowBooksScreen = ({ navigation, route }) => {
  const buttons = [
    {
      title: "Issue Now",
      onPress: (item) =>
        navigation.navigate(AppRoutes.DATETIME, { title: item.title }),
    },
  ];

  const data = [
    {
      id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyPRI5j__vjReQFSYfFPfm-kje9pXg78U6-g&usqp=CAU",
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      quantity: 5,
      category: "Fiction",
    },
    {
      id: "2",
      image:
        "https://assets.brightspot.abebooks.a2z.com/dims4/default/6133644/2147483647/strip/true/crop/1580x760+0+0/resize/1996x960!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F33%2F28%2F47736d4b433da9c211f6e65fa6ad%2Fcarousel-non-fictionlinear-tiles.jpg",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      quantity: 3,
      category: "Fiction",
    },
    {
      id: "3",
      image:
        "https://assets.brightspot.abebooks.a2z.com/dims4/default/6133644/2147483647/strip/true/crop/1580x760+0+0/resize/1996x960!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F33%2F28%2F47736d4b433da9c211f6e65fa6ad%2Fcarousel-non-fictionlinear-tiles.jpg",
      title: "1984",
      author: "George Orwell",
      quantity: 2,
      category: "Fiction",
    },
    {
      id: "4",
      image:
        "https://assets.brightspot.abebooks.a2z.com/dims4/default/6133644/2147483647/strip/true/crop/1580x760+0+0/resize/1996x960!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F33%2F28%2F47736d4b433da9c211f6e65fa6ad%2Fcarousel-non-fictionlinear-tiles.jpg",
      title: "Pride and Prejudice",
      author: "Jane Austen",
      quantity: 4,
      category: "Fiction",
    },
    {
      id: "5",
      image:
        "https://assets.brightspot.abebooks.a2z.com/dims4/default/6133644/2147483647/strip/true/crop/1580x760+0+0/resize/1996x960!/format/webp/quality/90/?url=http%3A%2F%2Fabebooks-brightspot.s3.amazonaws.com%2F33%2F28%2F47736d4b433da9c211f6e65fa6ad%2Fcarousel-non-fictionlinear-tiles.jpg",
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      quantity: 1,
      category: "Fiction",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BookComponent
            image={item.image}
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
    paddingBottom: 20,
  },
  bookContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ShowBooksScreen;
