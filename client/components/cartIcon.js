import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { themeColors } from "../theme/theme";
import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../store/slices/cartSlice";
export default function CartIcon() {
  const navigation = useNavigation();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal)

  // checking to see if there are cart items
  if (!cartItems.length) return 

  return (
    <View className=" absolute bottom-5 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={{ backgroundColor: themeColors.bgColor(1) }}
        className="flex-row justify-between items-center mx-5 rounded-full p-4 py-3 shadow-lg"
      >
        {/* round thing with the number  */}
        <View className="p-2 px-4 bg-orange-300 rounded-full">
          <Text className="font-extrabold text-white text-lg">{cartItems.length}</Text>
        </View>
        <Text className="flex-1 text-center text-white text-lg">View Cart</Text>
        <Text className="font-extrabold text-white text-lg">${cartTotal}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
