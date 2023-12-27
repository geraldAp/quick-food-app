import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons, Entypo, Feather } from "@expo/vector-icons";
import { themeColors } from "../theme/theme";
import Categories from "../components/categories";
import { featured } from "../components/constants/dummyData";
import FeaturedRow from "../components/featuredRow";
import { getFeaturedRestaurants } from "../api";
import TopPicks from "../components/TopPicks";

export default function Home() {
  const [featuredRestaurants, setFeaturedRestaurants] = useState([]);

  // useEffect(() => {
  //   // getFeaturedRestaurants().then((data) => {
  //   //   console.log("Data", data);
  //   //   setFeaturedRestaurants(data)
  //   // });
  // }, []);

  return (
    <SafeAreaView className="bg-white flex-1">
      <StatusBar barStyle="dark-content" />
      {/* search Area */}
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        {/* search bar  */}
        <View className=" flex-row flex flex-1 items-center p-3 rounded-full border border-gray-300">
         
          <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2  border-l-gray-300">
            <Entypo name="location-pin" size={20} color="gray" />
            <Text className="text-gray-600">East Legon, Accra</Text>
          </View>
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="p-3 rounded-full "
        >
          <Feather name="sliders" size={20} color="white" />
        </View>
      </View>
      {/* main */}
      {/* Categories */}
      <Categories />

      {/* Top picks  */}
      <TopPicks />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
