import React, { useEffect } from "react";
import { View, Text, SafeAreaView, FlatList, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { urlFor } from "../sanity";
import {
  removeFromCart,
  selectCartItems,
  selectCartTotal,
  addToCart,
  emptyCart,
} from "../store/slices/cartSlice";
import IoniconsButtons from "../components/ui/iconbuttons/IoniconButtons";
import FontAwesome5Buttons from "../components/ui/iconbuttons/FontAwesome5Buttons";

const Cart = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = React.useState({});

  useEffect(() => {
    const items = cartItems.reduce((group, item) => {
      if (group[item._id]) {
        group[item._id].push(item);
      } else {
        group[item._id] = [item];
      }
      return group;
    }, {});
    console.log(items);
    setGroupedItems(items);
  }, [cartItems]);

  const renderCartItem = ({ item }) => {
    const itemData = item[0];
    return (
      <View className="flex-row shadow-sm justify-between bg-slate-100 rounded-lg  items-center mb-4 p-4">
        <View>
          <Image
            source={{ uri: urlFor(itemData.image).url() }}
            className="h-20 w-20 rounded-md"
          />
        </View>
        <Text className="text-medium">{itemData.name}</Text>
        <View className="items-center">
          <Text className="text-medium mb-1">${itemData.price}</Text>
          <View className="flex-row bg-[#f97316] p-1 rounded-md items-center">
            <IoniconsButtons
              name="remove"
              color="black"
              size={24}
              press={() => dispatch(removeFromCart({ id: itemData._id }))}
            />
            <Text className="text-base text-white"> {item.length}x </Text>
            <IoniconsButtons
              name="add"
              color="black"
              size={24}
              press={() => dispatch(addToCart(itemData))}
            />
          </View>
        </View>
        {/* Add any other item details you want to display */}
      </View>
    );
  };

  return (
    <View className="flex-1 ">
      <SafeAreaView />
      {/* back button */}
      <View className="flex-row mb-2 px-4">
        <IoniconsButtons
          name="arrow-back-circle"
          color="orange"
          size={40}
          press={() => navigation.goBack()}
        />
      </View>
      {/* heading and trash can */}
      <View className="flex-row mb-2 p-4 items-center  justify-between">
        <View className="">
          <Text className="text-3xl mb-1">My Cart List</Text>
          <View className="w-16 h-1 bg-[#f97316]"></View>
        </View>
        <FontAwesome5Buttons
          name={"trash"}
          size={26}
          color={"orange"}
          press={() => dispatch(emptyCart())}
        />
      </View>
      {/* rest of the body */}
      <View className="flex-1   ">
        {/* first view goes here   */}
        <View style={{ flex: 2 }} className="px-4">
          {groupedItems.length > 0 ? (
            <FlatList
              data={Object.values(groupedItems)}
              keyExtractor={(item) => item[0]._id}
              renderItem={renderCartItem}
            />
          ) : (
            <Text className="text-2xl font-bold mb-4">Your cart is empty</Text>
          )}
        </View>

        <View style={{ flex: 1 }} className="bg-[#f09351] p-4 rounded-t-3xl">
          {/* Content for the second view goes here */}
          <View className="flex-row justify-between border-b border-gray-100 pb-2 items-center  mb-3">
            <Text className="text-white font-semibold text-lg">Subtotal</Text>

            <Text className="text-white">${cartTotal}</Text>
          </View>
          {/* shipping cost  */}
          <View className="flex-row justify-between border-b border-gray-100 pb-2 items-center mb-3">
            <Text className="text-white  font-semibold text-lg">Vat</Text>

            <Text className="text-white">${Math.round(cartTotal / 45)}</Text>
          </View>
          <View className="flex-row justify-between border-b border-gray-100 pb-2 items-center">
            <Text className="text-white text-lg  font-extrabold">
              Order Total
            </Text>
            <Text className="text-white font-extrabold">${cartTotal}</Text>
          </View>
          <View className="flex-1 justify-end"></View>
        </View>
      </View>
    </View>
  );
};

export default Cart;
