import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import BookComponent from "../components/BookComponent";
import AppRoutes from "../constants/AppRoutes";
import componentstyles from "../components/componentstyles";
import ColourConstants from "../constants/ColourConstants";

const ShowBooksScreen = ({ navigation }) => {
  const buttons = [
    {
      title: "Delete Book",
      onPress: () => {},
    },
    {
      title: "Add More Copies",
      onPress: (item) => {
        navigation.navigate(AppRoutes.ADDCOPY, {
          quantity: item.quantity,
          title: item.title,
        });
      },
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
      <TouchableOpacity
        style={bookStyles.addButton}
        onPress={() => {
          navigation.navigate(AppRoutes.ADDBOOK);
        }}
      >
        <Text style={bookStyles.addButtonText}>Add Book</Text>
      </TouchableOpacity>
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
