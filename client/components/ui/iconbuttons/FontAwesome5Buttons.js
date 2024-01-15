import {  Pressable } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";

export default function FontAwesome5Buttons({ name, size, color, press }) {
  return (
    <Pressable onPress={press} >
      <FontAwesome5 name={name} size={size} color={color} />
    </Pressable>
  );
}
