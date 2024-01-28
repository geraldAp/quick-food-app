import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import FavoritesButton from "./FavoritesButton";
import { urlFor } from "../../sanity";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import StarRating from "./StarRating";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFavoriteMeals,
  deleteFavoriteMeal,
  addFavoriteMeals,
} from "../../store/slices/mealSlice";

const MealCards = ({
  name,
  image,
  rating,
  price,
  category,
  description,
  _id,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const favorites = useSelector(selectFavoriteMeals);
  const meal = {
    name,
    image,
    rating,
    price,
    category,
    description,
    _id,
  };
  const isMealSaved = favorites.some((meal) => meal._id === _id);

  const handlePress = () => {
    navigation.navigate("mealDetails", {
      name,
      image,
      rating,
      price,
      category,
      description,
      _id,
    });
  };

  const favoritesHandler = (_id) => {
    const exists = favorites.some((favMeal) => favMeal._id === _id)
    if (exists) {
      dispatch(deleteFavoriteMeal({ id: _id }));
    } else {
      dispatch(addFavoriteMeals(meal));
    }
  };

  return (
    <Pressable className="shadow-md" onPress={handlePress}>
      <View className=" h-[350px] overflow-hidden shadow-xl bg-gray-200 rounded-3xl">
        <View className="w-full relative h-[60%]">
          <Image
            className="w-[100%] h-[100%] "
            source={{ uri: urlFor(image).url() }}
          />
          <View className="absolute top-3 left-4 flex-row items-center gap-2">
            <View className="rounded-full shadow-md py-1 px-2  bg-white opacity-95">
              <FontAwesome5 name="clock" size={24} color="orange" />
            </View>
            <View className="rounded-full shadow-md py-1 px-2  bg-white opacity-85">
              <Text className="text-sm text-[#f97316] ">
                <Text style={{ color: "gold" }}>★</Text> {rating}
              </Text>
            </View>
          </View>
        </View>
        <View className="py-2 px-3 justify-center bg-white flex-1 ">
          <View className="flex-row justify-between mb-1 ">
            <Text className="text-base capitalize font-semibold">{name}</Text>
            <FavoritesButton
              color="orange"
              icon={isMealSaved ? "heart" : "heart-o"}
              size={25}
              press={() => favoritesHandler(_id)}
            />
          </View>
          {/* price and category */}
          <View className="flex-row items-center gap-2">
            <View className="rounded-lg shadow-md p-2  bg-[#f1b576] opacity-95">
              <Text className="text-sm text-[#f97316] ">Price: ${price}</Text>
            </View>
            <View className="rounded-lg shadow-md p-2  bg-[#f1b576] opacity-95">
              <Text className="text-sm text-[#f97316] ">{category} </Text>
            </View>
          </View>

          {/* Display star rating and dot */}
          <View className="flex-row items-center">
            <StarRating rating={rating} />
            <Text className="text-2xl "> • </Text>
            <Text className="text-sm">{rating}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default MealCards;
