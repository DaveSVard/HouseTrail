import { View, Text, Image } from "react-native";
import React from "react";
import images from "@/constants/images";

const NoResults = () => {
  return (
    <View className="flex items-center my-5">
      <Image
        source={images.noResult}
        className="w-11/12 h-80"
        resizeMode="contain"
      />
      <Text className="font-rubik-bold text-2xl text-black-300 mt-5">
        No Results
      </Text>
      <Text className="font-rubik text-base text-black-100 mt-2">
        We can't find any results
      </Text>
    </View>
  );
};

export default NoResults;
