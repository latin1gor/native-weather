import {
  Image,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { useState } from "react";
import { MapPinIcon } from "react-native-heroicons/mini";
import Forecast from "@/components/forecast/forecast";

export default function HomeScreen() {
  const [showSearch, setShowSearch] = useState(false);
  const [locations] = useState([1, 2, 3]);

  const handleLocation = (location: number) => {
    console.log(location);
  };

  return (
    <View className="flex-1 relative">
      <StatusBar style={"light"} />
      <Image
        blurRadius={10}
        source={require("../../assets/images/main-bg.jpg")}
        className="absolute h-full w-full "
      />

      <SafeAreaView className="flex flex-1">
        <View style={{ height: "7%" }} className={"mx-4 relative z-50"}>
          <View
            className={`flex-row justify-end items-center rounded-full ${showSearch && "bg-gray-400/20"}`}
          >
            {showSearch ? (
              <TextInput
                placeholder={"Search city"}
                placeholderTextColor={"lightgray"}
                className={"text-white text-base flex-1 pl-6 h-10"}
              />
            ) : null}
            <TouchableOpacity
              className={"rounded-full bg-white/30 p-3 m-1"}
              onPress={() => setShowSearch((prev) => !prev)}
            >
              <MagnifyingGlassIcon size={"25"} color={"white"} />
            </TouchableOpacity>
          </View>
          {locations.length > 0 && showSearch ? (
            <View className={"absolute w-full bg-gray-300 top-16 rounded-3xl"}>
              {locations.map((loc, i) => {
                const showBorder = i + 1 != locations.length;
                const borderClass = showBorder
                  ? " border-b-2 border-b-gray-400"
                  : "";
                return (
                  <TouchableOpacity
                    onPress={() => handleLocation(loc)}
                    key={i}
                    className={`flex-row items-center border-0 p-3 px-4 mb-1 ${borderClass}`}
                  >
                    <MapPinIcon color={"gray"} />
                    <Text className={"text-black text-lg ml-2"}>
                      London, United Kingdom
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
        <Forecast />
      </SafeAreaView>
    </View>
  );
}
