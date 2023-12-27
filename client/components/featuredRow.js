import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { themeColors } from "../theme/theme";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, restaurants }) => {
  return (
    <View >
      <View className="flex-row justify-between items-center px-4">
        <View className='mb-8'>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-sm text-gray-500">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themeColors.text }}>See All</Text>
        </TouchableOpacity>
      </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 15,
          }}
          className='overflow-visible'
        >
            {
                restaurants.map((restaurant, index) => (
                    <RestaurantCard
                    item={restaurant}
                    key={index}
                    />
                ))
            }
        </ScrollView>
    </View>
  );
};

export default FeaturedRow;
