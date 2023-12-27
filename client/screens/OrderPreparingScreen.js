import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";

export default function OrderPreparingScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      // move to the delivery screen
      navigation.navigate("Delivery");
    }, 3000);
  });

  return (
    <View className="flex-1 bg-white justify-center items-center ">
      <Image
        source={require("../assets/images/delivery.gif")}
        className="w-80 h-80"
      />
    </View>
  );
}
