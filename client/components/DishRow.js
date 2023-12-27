import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { themeColors } from "../theme/theme";
import { Entypo } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemsById,
} from "../store/slices/cartSlice";
import { urlFor } from "../sanity";

export default function DishRow({ item }) {
  const dispatch = useDispatch();
  const totalItems = useSelector((state) =>
    selectCartItemsById(state, item._id)
  );

  const handleIncrease = () => {
    dispatch(addToCart({ ...item }));
  };
  const handleDecrease = () => {
    dispatch(removeFromCart({ id: item._id }));
  };

  return (
    <View className="flex-row gap-2 items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
      <Image
        className="rounded-3xl "
        style={{ height: 100, width: 100 }}
        source={{uri : urlFor(item.image).url()}}
      />
      <View className="flex flex-1 space-y-3">
        <Text className="text-xl">{item.name}</Text>
        <Text className="text-gray-700">{item.description}</Text>
        <View className="flex-row justify-between pl-3 items-center  ">
          <Text className="text-gray-700 text-lg font-bold">{item.price}</Text>
          <View className="flex-row gap-2 items-center">
            <TouchableOpacity
            disabled={!totalItems.length}
              onPress={handleDecrease}
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Entypo name="minus" size={24} color="white" />
            </TouchableOpacity>
            <Text>{totalItems.length}</Text>
            <TouchableOpacity
              onPress={handleIncrease}
              className="p-1 rounded-full"
              style={{ backgroundColor: themeColors.bgColor(1) }}
            >
              <Entypo name="plus" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
