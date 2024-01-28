import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { urlFor } from "../sanity";
import FavoritesButton from "../components/ui/FavoritesButton";
import { useDispatch, useSelector } from "react-redux";
import StarRating from "../components/ui/StarRating";
import FontAwesome5Buttons from "../components/ui/iconbuttons/FontAwesome5Buttons";
import { addToCart } from "../store/slices/cartSlice";
import {
  selectFavoriteMeals,
  addFavoriteMeals,
  deleteFavoriteMeal,
} from "../store/slices/mealSlice";
export default function MealInfoScreen({ route, navigation: { goBack } }) {
  const dispatch = useDispatch();
  const { image, rating, name, price, category, description, _id } =
    route.params;
    const meal = {
      name,
      image,
      rating,
      price,
      category,
      description,
      _id,
    };
  const cartData = { image, name, price, category, _id };
  const handleIconPress = () => {
    goBack();
  };
  const favorites = useSelector(selectFavoriteMeals);
  const isMealSaved = favorites.some((meal) => meal._id === _id);
  const handleButtonPress = () => {
    dispatch(addToCart({ ...cartData }));
    console.log("button pressed");
    goBack();
  };

  const favoritesHandler = (_id) => {
    const exists = favorites.some((favMeal) => favMeal._id === _id);
    if (exists) {
      dispatch(deleteFavoriteMeal({ id: _id }));
    } else {
      dispatch(addFavoriteMeals(meal));
    }
  };

  return (
    <View className="flex-1">
      <View className="h-[42%] w-[100%] relative">
        <Image
          className="w-[100%] h-[100%]"
          source={{ uri: urlFor(image).url() }}
        />
        {/* back button */}
        <View className="absolute opacity-75 top-4 left-4">
          <FontAwesome5Buttons
            name="arrow-circle-left"
            size={32}
            color="orange"
            press={handleIconPress}
          />
        </View>
      </View>
      <View className="flex-1 -mt-8 p-5 rounded-t-[40px] bg-white">
        {/* category and favorites button */}
        <View className="flex-row mb-2 items-center px-1 justify-between">
          <View className="rounded-full items-center shadow-md p-2 bg-[#f1b576] opacity-95">
            <Text className="text-sm text-[#f97316] ">{category}</Text>
          </View>
          <FavoritesButton
            color="orange"
            icon={isMealSaved ? "heart" : "heart-o"}
            size={25}
            press={() => favoritesHandler(_id)}
          />
        </View>
        {/* name of dish */}
        <Text className="text-3xl font-semibold">{name}</Text>
        {/* rating */}
        <View className="flex-row items-center">
          <StarRating rating={rating} />
          <Text className="text-2xl"> • </Text>
          <Text className="text-sm">
            {rating} <Text className="text-[#f97316]"> Rating</Text>
          </Text>
        </View>
        {/* description */}
        <Text className="text-lg mt-2">{description}</Text>

        {/* add to cart button */}
        <View className="flex-1 justify-end">
          <Pressable onPress={handleButtonPress}>
            <View className="w-full rounded-2xl bg-[#f97316] p-4">
              <Text className="text-white text-center">
                Add To Cart <Text>${price}</Text>
              </Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
