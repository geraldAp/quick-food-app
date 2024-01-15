import { View, Text, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

export default function FontAwesome5Buttons({ name, size, color, press }) {
  return (
    <Pressable onPress={press}>
      <FontAwesome name={name} size={size} color={color} />
    </Pressable>
  );
}
