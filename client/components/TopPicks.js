import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect } from "react";
import { getTopPicks } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setTopPicks, selectTopPicks } from "../store/slices/mealSlice";
import FavoritesButton from "./ui/FavoritesButton";
import { useQuery } from "@tanstack/react-query";
import { urlFor } from "../sanity";
import { FontAwesome5 } from "@expo/vector-icons";
// StarRating component
const StarRating = ({ rating }) => {
  const starIcons = Array.from({ length: 5 }, (_, index) => (
    <Text key={index} style={{ color: index < rating ? "gold" : "gray" }}>
      ★
    </Text>
  ));

  return <View style={{ flexDirection: "row" }}>{starIcons}</View>;
};

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
    <View className="shadow-md">
      <View className=" h-[250px] overflow-hidden shadow-xl bg-gray-200 rounded-3xl">
        <View className="w-full relative h-[60%]">
          <Image
            className="w-[100%] h-[100%] "
            source={{ uri: urlFor(item.image).url() }}
          />
          <View className="absolute top-3 left-4 flex-row items-center gap-2">
            <View className="rounded-full shadow-md py-1 px-2  bg-white opacity-95">
              <FontAwesome5 name="clock" size={24} color="orange" />
            </View>
            <View className="rounded-full shadow-md py-1 px-2  bg-white opacity-85">
              <Text className="text-sm text-[#f97316] ">
                <Text style={{ color: "gold" }}>★</Text> {item.rating}
              </Text>
            </View>
          </View>
        </View>
        <View className="py-1 px-2 bg-white flex-1 ">
          <View className="flex-row justify-between mb-1 ">
            <Text className="text-base font-semibold">{item.name}</Text>
            <FavoritesButton color="orange" icon="heart-o" size={25} />
          </View>
          {/* price and category */}
          <View className="flex-row items-center gap-2">
            <View className="rounded-lg shadow-md p-2  bg-[#f1b576] opacity-95">
              <Text className="text-sm text-[#f97316] ">
                Price: ${item.price}
              </Text>
            </View>
            <View className="rounded-lg shadow-md p-2  bg-[#f1b576] opacity-95">
              <Text className="text-sm text-[#f97316] ">{item.category} </Text>
            </View>
          </View>
          {/* Display star rating and dot */}
          <View className="flex-row items-center">
            <StarRating rating={item.rating} />
            <Text className="text-2xl "> • </Text>
            <Text className="text-sm">{item.rating}</Text>
          </View>
        </View>
      </View>
    </View>
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
          contentContainerStyle={{ paddingBottom: 64 }}
        />
      )}
    </View>
  );
}
