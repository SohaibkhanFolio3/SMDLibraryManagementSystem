import React, { useState } from "react";
import Car from "../api/Car";
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

export default function AddVehicle({ navigation }) {
  const user = useSelector((state) => state.user.loggedInUser);
  const [vehicles, setVehicles] = useState([]);
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleYear, setVehicleYear] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");

  const handleAddVehicle = async () => {
    if (
      vehicleNumber !== "" &&
      vehicleMake !== "" &&
      vehicleModel !== "" &&
      vehicleYear !== "" &&
      vehicleColor !== ""
    ) {
      try {
        await Car.addCar(
          {
            registration_number: vehicleNumber,
            make: vehicleMake,
            model: vehicleModel,
            year: vehicleYear,
            color: vehicleColor,
          },
          user.token
        );
        alert("Car Added Successfuly");
        navigation.navigate(AppRoutes.HOME);
      } catch (error) {
        alert(error);
      }
    } else {
      alert("All fields are required.");
    }
  };

  return (
    <View style={VehicleStyles.container}>
      <View style={styles.formContainer}>
        <Input
          placeholder="Vehicle Registration Number"
          value={vehicleNumber}
          setValue={setVehicleNumber}
        />
        <Input
          placeholder="Make"
          value={vehicleMake}
          setValue={setVehicleMake}
        />
        <Input
          placeholder="Model"
          value={vehicleModel}
          setValue={setVehicleModel}
        />
        <Input
          placeholder="Year"
          value={vehicleYear}
          setValue={setVehicleYear}
        />
        <Input
          placeholder="Colour"
          value={vehicleColor}
          setValue={setVehicleColor}
        />
        <TouchableOpacity
          style={VehicleStyles.addButton}
          onPress={handleAddVehicle}
        >
          <Text style={VehicleStyles.addButtonText}>Add Vehicle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const VehicleStyles = StyleSheet.create({
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
