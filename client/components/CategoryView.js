import { View, Text, FlatList } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMealsByCategory } from "../api";
import MealCard from "./ui/MealCards";

export default function CategoryView({ category }) {
  let MealName = category;
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["categoryMeals", category],
    queryFn: () => getMealsByCategory(category),
  });
  console.log(error);
  console.log(data);
  const ItemSeparator = () => <View className="h-6" />;
  const renderCategoryMeals = ({ item }) => <MealCard {...item} />;

  return (
    <View className="flex-1  px-4">
      <Text className="text-2xl font-bold mb-4">{MealName}</Text>
      {isPending ? (
        <View>
          <Text>Loading......</Text>
        </View>
      ) : isError ? (
        <View>
          <Text>{error.message}</Text>
        </View>
      ) : (
        <FlatList
          className="py-4 px-4"
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={renderCategoryMeals}
          ItemSeparatorComponent={ItemSeparator}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 64 }}
        />
      )}
    </View>
  );
}
