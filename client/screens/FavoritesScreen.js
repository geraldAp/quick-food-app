import { View, Text, FlatList, SafeAreaView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectFavoriteMeals } from "../store/slices/mealSlice";

const FavoritesScreen = () => {
  const favorites = useSelector(selectFavoriteMeals);

  return (
    <View className="flex-1">
      <SafeAreaView />
      <View className="flex-1 p-4">
        {/* heading */}
        <View className='mb-4'>
          <Text className='mb-1 text-2xl font-bold'>Favorites </Text>
          <View className='h-[3px] w-[15%] bg-[#f09351]' ></View>
        </View>
        {/* saved meals  */}
        <View className='flex-1'>

        </View>
      </View>
    </View>
  );
};

export default FavoritesScreen;
