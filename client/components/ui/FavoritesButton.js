import { View, Text, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const FavoritesButton = ({ icon, size, color, press }) => {
  return (
    <Pressable onPress={press}>
      <FontAwesome name={icon} size={size} color={color} />
    </Pressable>
  );
};

export default FavoritesButton;
