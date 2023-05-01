import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import ColourConstants from "../constants/ColourConstants";
import styles from "../screens/styles";
import componentstyles from "./componentstyles";

const BookComponent = ({
  image,
  title,
  author,
  quantity,
  category,
  buttons,
}) => {
  return (
    <View style={{ flexDirection: "row", marginBottom: 20 }}>
      <Image
        source={{ uri: image }}
        style={{ width: 80, height: 120, marginRight: 10 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{title}</Text>
        <Text style={{ marginBottom: 5 }}>{author}</Text>
        <Text style={{ marginBottom: 5 }}>Quantity: {quantity}</Text>
        <Text style={{ marginBottom: 5 }}>Category: {category}</Text>
        <View
          style={{ flexDirection: "column", justifyContent: "space-between" }}
        >
          {buttons.map((button, index) => (
            <TouchableOpacity key={index} onPress={button.onPress}>
              <Text
                style={{
                  backgroundColor: ColourConstants.PRIMARY_COLOUR,
                  padding: 10,
                  marginBottom: 5,
                  marginLeft: "40%",
                  fontWeight: "bold",
                  color: ColourConstants.SECONDARY_COLOUR,
                  textAlign: "center",
                }}
              >
                {button.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default BookComponent;
