import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect } from "react";
// import { categories } from "./constants/dummyData";
import { getCategories } from "../api";
import { urlFor } from "../sanity";

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((data) => {
      console.log("got data: ", data);
      setCategories(data);
    });
  }, []);

  return (
    <View className="my-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map((category) => {
          let isActive = category._id === activeCategory;
          let btnClass = isActive ? "bg-gray-600" : "bg-gray-200";
          let textClass = isActive
            ? "font-semibold text-gray-800"
            : "text-gray-500";

          return (
            <View key={category._id} className="flex justify-center mr-6">
              <TouchableOpacity
                onPress={() => setActiveCategory(category._id)}
                className={` h-12 w-12 rounded-full overflow-hidden shadow bg-gray-200 ${btnClass}`}
              >
                <Image
                  className='w-full h-full bg-contain'
                  source={{uri : urlFor(category.image).url()}}
                />
              </TouchableOpacity>
              <Text className={`${textClass} text-sm text-center`}>{category.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Categories;
