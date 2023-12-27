import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { themeColors } from "../theme/theme";
import DishRow from "../components/DishRow";
import CartIcon from "../components/cartIcon";
import { useDispatch } from "react-redux";
import { setMeal } from "../store/slices/mealSlice";
import { urlFor } from "../sanity";

export default function RestaurantScreen() {
  // const restaurant = useSelector()

  const navigation = useNavigation();
  const { params } = useRoute();
  const item = params;
  const dispatch = useDispatch()

  useEffect(()=>{
    if(item && item._id){
      dispatch(setMeal({...item}))
    }
  })

  return (
    <View className=''>
      <CartIcon />
      <StatusBar barStyle="light-content" />
        {/* hero */}
      <ScrollView>
        <View className="relative ">
          <Image source={{uri: urlFor(item.image).url()}} className="w-full h-72  p-4" />
          {/* back button */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="absolute top-14 left-5 bg-gray-50 p-2 rounded-full shadow"
          >
            <Entypo
              name="arrow-left"
              size={20}
              color={themeColors.bgColor(1)}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-white flex-1 -mt-12  pt-6"
        >
          <View className="px-5">
            <Text className="text-3xl font-semibold ">{item.name}</Text>
            <View className="flex-row space-x-2">
              <View className="flex-row items-center space-x-1">
                <Image
                  source={require("../assets/images/fullStar.png")}
                  className="h-4 w-4"
                />
                <Text className="text-xs">
                  <Text className="text-green-700 ">{item.stars}</Text>
                  <Text className="text-gray-400">
                    ({item.reviews} review) •
                    <Text className="font-semibold"> {item?.type?.name}</Text>
                  </Text>
                </Text>
              </View>
              {/* pin and location */}
              <View className="flex-row items-center space-x-1">
                <Entypo name="location-pin" size={20} color="gray" />
                <Text className="text-gray-700 text-xs">
                  Nearby • {item.address}
                </Text>
              </View>
            </View>
            {/* item description */}
            <Text className="text-gray-500 mt-2">{item.description}</Text>
          </View>
        </View>
        {/*  */}
        <View className="pb-36 flex-1 bg-white">
          <Text className="px-4 py-4 text-2xl font-semibold">Menu</Text>
          {/* dishes */}
          {item.dishes.map((dish, index) => (
            <DishRow key={index} item={{ ...dish }} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
