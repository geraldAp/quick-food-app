import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { featured } from "../components/constants/dummyData";
import MapView, { Marker } from "react-native-maps";
import { themeColors } from "../theme/theme";
import { useDispatch } from "react-redux";
import { emptyCart } from "../store/slices/cartSlice";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function DeliveryScreen({ navigation }) {
  const dispatch = useDispatch();
  const cancelOrderHandler = () => {
    dispatch(emptyCart());
    navigation.navigate("Home");
  };

  const restaurant = featured.restaurants[0];
  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        {/* Delivery Time */}
        <View className="flex-row justify-between px-5 pt-10">
          {/* d time details */}
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-3xl font-extrabold text-gray-700">
              20-30 Minutes
            </Text>
            <Text className="mt-2 text-gray-700 font-semibold ">
              Your order is on its way
            </Text>
          </View>
          <Image
            className="w-24 h-24"
            source={require("../assets/images/bikeGuy2.gif")}
          />
        </View>

        <View
          style={{ backgroundColor: themeColors.bgColor(0.8) }}
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
        >
          <View
            className="p-1 rounded-full"
            style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
          >
            <Image
              className="h-16 w-16 rounded-full"
              source={require("../assets/images/deliveryGuy.png")}
            />
          </View>
          {/* rider name  */}
          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Syed Noman</Text>
            <Text className="font-semibold text-white">Your Rider</Text>
          </View>
          <View className="flex-row  items-center space-x-3 mr-3">
            <TouchableOpacity className="bg-white p-3 rounded-[100%]">
              <FontAwesome
                name="phone"
                size={24}
                color={themeColors.bgColor(1)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancelOrderHandler}
              className="bg-white p-3 rounded-full"
            >
              <MaterialIcons name="cancel" size={24} color="red" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
  Home;
}
