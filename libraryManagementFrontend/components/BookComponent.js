import React from "react";
import { View, Text, Image } from "react-native";
import Button from "./Button";

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
          style={{
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "flex-end",
            marginRight: 20,
            marginTop: 10,
          }}
        >
          {buttons.map((button, index) => (
            <Button text={button.title} onPress={button.onPress} key={index} />
          ))}
        </View>
      </View>
    </View>
  );
};

export default BookComponent;
