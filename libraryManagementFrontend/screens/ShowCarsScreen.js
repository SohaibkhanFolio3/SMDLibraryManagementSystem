import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useState, useEffect } from "react";
import Car from "../api/Car";
import { useSelector } from "react-redux";
import AppRoutes from "../constants/AppRoutes";
import ColourConstants from "../constants/ColourConstants";
import styles from "./styles";

export default function ShowCarsScreen({ navigation }) {
  const [vehiclesData, setvehiclesData] = useState([]);
  const user = useSelector((state) => state.user.loggedInUser);
  const loadCars = async () => {
    try {
      const carData = await Car.getCars(user.token);
      setvehiclesData(carData);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    loadCars();
  }, []);

  // Define the renderItem function for FlatList
  const renderItem = ({ item }) => (
    <View style={showCarStyles.itemContainer}>
      <Text style={showCarStyles.registrationText}>
        {item.registration_number}
      </Text>
      <Text style={showCarStyles.detailText}>Make: {item.make}</Text>
      <Text style={showCarStyles.detailText}>Model: {item.model}</Text>
      <Text style={showCarStyles.detailText}>Year: {item.year}</Text>
      <Text style={showCarStyles.detailText}>Colour: {item.color}</Text>
    </View>
  );

  return (
    <View style={showCarStyles.container}>
      <TouchableOpacity
        style={showCarStyles.addButton}
        onPress={() => {
          navigation.navigate(AppRoutes.VEHICLE);
        }}
      >
        <Text style={showCarStyles.buttonText}>Add a Vehicle</Text>
      </TouchableOpacity>
      <FlatList
        data={vehiclesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.registration_number}
        style={showCarStyles.listContainer}
      />
    </View>
  );
}

const showCarStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: ColourConstants.BACKGROUND_COLOUR,
  },
  addButton: {
    backgroundColor: ColourConstants.PRIMARY_COLOUR,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 100,
    marginTop: 20,
    marginBottom: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  listContainer: {
    flex: 1,
    marginTop: 10,
  },
  itemContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  registrationText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 2,
  },
});
