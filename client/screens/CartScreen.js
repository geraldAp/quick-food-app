import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { featured } from "../components/constants/dummyData";
import { themeColors } from "../theme/theme";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { selectRestaurant } from "../store/slices/RestaurantSlice";
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
} from "../store/slices/cartSlice";
import { urlFor } from "../sanity";

const CartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const restaurants = useSelector(selectRestaurant);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState({});
  const deliveryFee = 2

  useEffect(() => {
    // grouped initially starts as an empty object
    // the condition below assumes the id are key values
    // so basically the items id is equal to the key value push those item data into the array or create an array with and place the items in it

    const items = cartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    console.log(items);
    setGroupedItems(items);
  }, [cartItems]);

  return (
    <View className="bg-white flex-1">
      {/* header */}
      <View className="relative py-4 shadow-sm">
        {/* back button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        {/* title and restaurant name  */}
        <View>
          <Text className="text-center font-bold text-2xl">Your cart</Text>
          <Text className="text-center text-gray-500">{restaurants.name}</Text>
        </View>
      </View>
      {/* body */}
      {/* delivery time  */}
      <View
        className="flex-row px-4 items-center"
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
      >
        <Image
          source={require("../assets/images/bikeGuy.png")}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 pl-4 ">Deliver in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      {/* Dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        className="bg-white pt-5 px-4"
      >
        {Object.entries(groupedItems).map(([key, items]) => {
          let dish = items[0];
          return (
            <View
              key={key}
              className="flex-row items-center space-x-3 py-2 px-4 bg-white mb-4 rounded-2xl shadow-lg"
            >
              <Text className="font-bold" style={{ color: themeColors.text }}>
                {items.length} X
              </Text>
              <Image className="h-14 w-14" source={{uri: urlFor(dish.image).url()}} />
              <Text className="flex-1 font-bold text-gray-700">
                {dish.name}
              </Text>
              <Text className="font-semibold text-base">${dish.price}</Text>
              <TouchableOpacity
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
                onPress={() => dispatch(removeFromCart({ id: dish._id }))}
              >
                <Entypo name="minus" size={24} color="white" />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {/* totals  */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="p-6 px-8 rounded-t-3xl space-y-4 "
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">${cartTotal}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">${deliveryFee}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">${deliveryFee + cartTotal}</Text>
        </View>
        {/* place order button  */}
        <View>
          <TouchableOpacity
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="p-3 rounded-full"
            onPress={() => navigation.navigate("OrderPreparing")}
          >
            <Text className="text-white text-center font-bold text-lg">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartScreen;
