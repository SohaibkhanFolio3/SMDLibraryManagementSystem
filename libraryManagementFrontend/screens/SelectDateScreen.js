import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import StringConstants from "../constants/StringConstants";
import componentstyles from "../components/componentstyles";
import ColourConstants from "../constants/ColourConstants";
import { Picker as PickerComponent } from "@react-native-picker/picker";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import Booking from "../api/Booking";

export default function SelectDateScreen({ navigation, route }) {
  const { book } = route.params;
  const [endDateTime, setEndDateTime] = useState(null);
  const [isEndPickerVisible, setIsEndPickerVisible] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const user = useSelector((state) => state.user.loggedInUser);

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

  const validateDateTime = async () => {
    if (!endDateTime) {
      alert("Please select a date");
      return;
    }
    if (endDateTime < new Date()) {
      alert("Date cannot be in the past");
      return;
    }

    try {
      const date =
        endDateTime.getFullYear() +
        "-" +
        (endDateTime.getMonth() + 1) +
        "-" +
        endDateTime.getDate();
      console.log(date);
      await Booking.addBooking(
        {
          book_id: book.id,
          booked_till: date,
        },
        user.token
      );
      alert("Book successfully issued.");
      navigation.navigate(AppRoutes.PICK);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          Book Title : {book.title}
        </Text>
      </View>
      <View style={styles.inputsContainer}>
        <Text style={styles.label}>Select a Return Date:</Text>
        <TouchableOpacity
          style={styles.dateTimeContainer}
          onPress={showEndPicker}
        >
          <Text style={styles.dateTimeText}>
            {endDateTime ? endDateTime.toLocaleDateString() : "Select date"}
          </Text>
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isEndPickerVisible}
          mode="date"
          date={endDateTime ? endDateTime : new Date()}
          onConfirm={handleEndPicker}
          onCancel={hideEndPicker}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button text="Confirm Book Issue" onPress={validateDateTime} />
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
