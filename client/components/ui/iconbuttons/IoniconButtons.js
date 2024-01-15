import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function IoniconsButtons({ name, size, color , press }) {
  return (
    <Pressable
    onPress={press}
    >
      <Ionicons name={name} size={size} color={color} />
    </Pressable>
  );
}
