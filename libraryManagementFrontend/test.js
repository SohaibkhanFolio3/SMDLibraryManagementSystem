import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "../app/assets/screens/styles";
import ColourConstants from "../constants/ColourConstants";
import componentstyles from "./componentstyles";
import AppRoutes from "../constants/AppRoutes";

function BookComponent({
  id,
  isBooked,
  navigation,
  startDateTime,
  endDateTime,
}) {
  const otherStyle = {
    backgroundColor: isBooked
      ? ColourConstants.PARKING_SLOT_BOOKED
      : ColourConstants.PARKING_SLOT_FREE,
  };
  function handleSlotClick() {
    if (isBooked) {
      alert("The slot is already booked");
    } else {
      navigation.navigate(AppRoutes.BILL, { startDateTime, endDateTime });
    }
  }
  return (
    <TouchableOpacity
      onPress={() => {
        handleSlotClick();
      }}
      style={[componentstyles.parkingBoxSquare, otherStyle]}
    >
      <View style={componentstyles.parkingBox}>
        <View style={componentstyles.parkingBoxContent}>
          <Text style={componentstyles.textStyle}>P-{id}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default BookComponent;
