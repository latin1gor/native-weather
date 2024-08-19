import { Image, Text, View } from "react-native";
import {IWeather} from "@/components/forecast/forecast";

const StatsSection = ({weather}: IWeather) => {
  return (
    <>
      <View className={"flex-row justify-between mx-4"}>
        <View className={"flex-row space-x-2 items-center"}>
          <Image
            source={require("../../assets/images/wind-icon.png")}
            className={"w-6 h-6 fill-blue-500"}
          />
          <Text className={"text-white font-semibold text-base"}>{weather.current.wind_kph}km</Text>
        </View>
        <View className={"flex-row space-x-2 items-center"}>
          <Image
            source={require("../../assets/images/drop.png")}
            className={"w-6 h-6 fill-blue-500"}
          />
          <Text className={"text-white font-semibold text-base"}>{weather.current.humidity}%</Text>
        </View>
        <View className={"flex-row space-x-2 items-center"}>
          <Image
            source={require("../../assets/images/sun-icon.png")}
            className={"w-6 h-6 fill-blue-500"}
          />
          <Text className={"text-white font-semibold text-base"}>6:05 AM</Text>
        </View>
      </View>
    </>
  );
};
export default StatsSection;
