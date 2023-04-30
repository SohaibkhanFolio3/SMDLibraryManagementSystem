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
import Booking from "../api/Booking";
import { formatVehicle } from "../utils";
import { formatDate } from "../utils";

export default function ShowBookingScreen({ navigation }) {
  const [bookingsData, setbookingsData] = useState([]);
  const user = useSelector((state) => state.user.loggedInUser);
  const loadBookings = async () => {
    try {
      const bookingData = await Booking.getBookings(user.token);
      setbookingsData(bookingData);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    loadBookings();
  }, []);

  // Define the renderItem function for FlatList
  const renderItem = ({ item }) => (
    <View style={showCarStyles.itemContainer}>
      <Text style={[showCarStyles.detailText, showCarStyles.slotText]}>
        Slot Number: {item.slot_no}
      </Text>
      <Text style={showCarStyles.detailText}>
        Car Details: {formatVehicle(item.car)}
      </Text>
      <Text style={showCarStyles.detailText}>
        Start Time: {formatDate(new Date(item.start_time))}
      </Text>
      <Text style={showCarStyles.detailText}>
        End Time: {formatDate(new Date(item.end_time))}
      </Text>
      <Text style={showCarStyles.detailText}>
        Total Cost: {item.total_cost}
      </Text>
    </View>
  );

  return (
    <View style={showCarStyles.container}>
      <FlatList
        data={bookingsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
  slotText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
