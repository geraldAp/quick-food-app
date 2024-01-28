import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect } from "react";
import { getTopPicks } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setTopPicks, selectTopPicks } from "../store/slices/mealSlice";
import { useQuery } from "@tanstack/react-query";
import MealCard from "./ui/MealCards";


export default function TopPicks() {
  const dispatch = useDispatch();
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["topPicks"],
    queryFn: getTopPicks,
  }); 
  useEffect(() => {
    if (data) {
      console.log("data to check if this works ", data);
      dispatch(setTopPicks(data));
    }
  }, [data]);

  const topPicks = useSelector(selectTopPicks);
  const ItemSeparator = () => <View className="h-6" />;
  const renderTopPick = ({ item }) => (
    <MealCard {...item}/>
  );

  return (
    <View className="flex-1  px-4">
      <Text className="text-2xl font-bold mb-4">Top Picks</Text>
      {isPending ? (
        <View>
          <Text>Loading......</Text>
        </View>
      ) : (
        <FlatList
          className="py-4 px-4"
          data={topPicks}
          keyExtractor={(item) => item._id}
          renderItem={renderTopPick}
          ItemSeparatorComponent={ItemSeparator}
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{ paddingBottom: 64 }}
        />
      )}
    </View>
  );
}
