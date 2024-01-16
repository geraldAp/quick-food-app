import { View, Text, FlatList, SafeAreaView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectFavoriteMeals } from "../store/slices/mealSlice";
import MealCards from "../components/ui/MealCards";

const FavoritesScreen = () => {
  const favorites = useSelector(selectFavoriteMeals);
  console.log(favorites);
  const ItemSeparator = () => <View className="h-6" />;

  const renderMeal = ({ item }) => {
    return <MealCards {...item}/>
  }

  return (
    <View className="flex-1">
      <SafeAreaView />
      <View className="flex-1 px-4 pt-6">
        {/* heading */}
        <View className="mb-7">
          <Text className="mb-1 text-2xl font-bold">Favorites </Text>
          <View className="h-[3px] w-[15%] bg-[#f09351]"></View>
        </View>
        {/* saved meals  */}
        <View className="flex-1">
          <FlatList
            data={favorites}
            renderItem={renderMeal}
            ItemSeparatorComponent={ItemSeparator}
            keyExtractor={(item) => item._id}
            contentContainerStyle={{ paddingBottom: 64 }}
            showsVerticalScrollIndicator={false} 
          />
        </View>
      </View>
    </View>
  );
};

export default FavoritesScreen;
