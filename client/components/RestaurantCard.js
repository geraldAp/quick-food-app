import {
  Text,
  TouchableWithoutFeedback,
  Image,
  View,
} from "react-native";
import {Entypo} from '@expo/vector-icons'
import React from "react";
import { themeColors } from "../theme/theme";
import {useNavigation} from '@react-navigation/native'
import { urlFor } from "../sanity";

export default function RestaurantCard({ item }) {

  const navigation = useNavigation()
  return (
    <TouchableWithoutFeedback
    onPress={() => navigation.navigate("Restaurant", {...item})}
    >
      <View
      style={
        {
            shadowColor: themeColors.bgColor(0.2),
            shadowRadius: 7
        }
      }
      className="mr-6 mb-4 bg-white rounded-3xl shadow-lg">
        <Image className="h-36 w-64 rounded-t-3xl" source={{uri: urlFor(item.image).url()}} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          {/* review and category */}
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
          {/*  */}
          <View className='flex-row items-center space-x-1'>
          <Entypo name="location-pin" size={20} color="gray" />
          <Text className='text-gray-700 text-xs'>Nearby •  {item.address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
