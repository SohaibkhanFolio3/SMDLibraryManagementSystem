import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import StringConstants from "../constants/StringConstants";
import componentstyles from "../components/componentstyles";
import ColourConstants from "../constants/ColourConstants";
import { Picker as PickerComponent } from "@react-native-picker/picker";
import { useSelector } from "react-redux";
import Car from "../api/Car";
import { formatVehicle } from "../utils";

export default function SelectDateScreen({ navigation, route }) {
  const { title } = route.params;
  // LogBox.ignoreLogs([
  //   "Non-serializable values were found in the navigation state",
  // ]);
  const [endDateTime, setEndDateTime] = useState(null);
  const [isEndPickerVisible, setIsEndPickerVisible] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  // const user = useSelector((state) => state.user.loggedInUser);
  // const loadCars = async () => {
  //   try {
  //     const carData = await Car.getCars(user.token);
  //     setvehiclesData(carData);
  //   } catch (error) {
  //     alert(error);
  //   }
  // };
  // useEffect(() => {
  //   loadCars();
  // }, []);

  const showEndPicker = () => {
    setIsEndPickerVisible(true);
  };

  const hideEndPicker = () => {
    setIsEndPickerVisible(false);
  };

  const handleEndPicker = (datetime) => {
    setEndDateTime(datetime);
    hideEndPicker();
  };

  const validateDateTime = () => {
    if (endDateTime < new Date()) {
      alert("Date and Time cannot be in the past");
      return;
    }

    // Proceed to the next screen
    // ...
    navigation.navigate(AppRoutes.PICK, {
      endDateTime,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          Book Title : {title}
        </Text>
      </View>
      <View style={styles.inputsContainer}>
        <Text style={styles.label}>Select a Date and Time:</Text>
        <TouchableOpacity
          style={styles.dateTimeContainer}
          onPress={showEndPicker}
        >
          <Text style={styles.dateTimeText}>
            {endDateTime
              ? endDateTime.toLocaleString()
              : "Select date and time"}
          </Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isEndPickerVisible}
          mode="datetime"
          date={endDateTime ? endDateTime : new Date()}
          onConfirm={handleEndPicker}
          onCancel={hideEndPicker}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Confirm Book Issue"
          color={ColourConstants.PRIMARY_COLOUR}
          onPress={validateDateTime}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: ColourConstants.BACKGROUND_COLOUR,
  },
  dateContainer: {
    marginTop: "20%",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "Black",
    fontWeight: "Bold",
  },
  dateTimeContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
    backgroundColor: ColourConstants.SECONDARY_COLOUR,
  },
  dateTimeText: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  inputsContainer: {
    marginBottom: 64,
    alignItems: "center",
    margin: "5%",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

const pickerstyles = StyleSheet.create({
  picker: {
    height: 50,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  pickerItem: {
    fontSize: 16,
  },
  vehicleInput: {
    width: 300, // add width property
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: "black",
    backgroundColor: "white",
    marginTop: "5%",
  },
});
