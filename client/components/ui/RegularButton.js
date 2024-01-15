import { View, Text, Pressable } from "react-native";
import React from "react";

const RegularButton = ({ children, press }) => {
  return (
    <Pressable onPress={press}>
      <View className="w-full rounded-2xl bg-[#f97316] p-4">{children}</View>
    </Pressable>
  );
};

export default RegularButton;
