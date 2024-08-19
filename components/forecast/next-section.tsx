import { Image, ScrollView, Text, View } from "react-native";
import { CalendarDaysIcon } from "react-native-heroicons/outline";
import {IWeather} from "@/components/forecast/forecast";
import {weatherImages} from "@/constants/weather";

const NextSection = ({weather}: IWeather) => {

  return (
    <View className={"mb-2 space-y-3"}>
      <View className={"flex-row items-center mx-5 space-x-2"}>
        <CalendarDaysIcon color="white" size={"22"} />
        <Text className={"text-white text-base"}>Daily forecast</Text>
      </View>
      <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15 }}>

        {weather.forecast?.forecastday?.map((item: any) => (
          <View
              key={item.date}
          className={
          "flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4 bg-white/20"
        }
      >
        <Image
            source={weatherImages[item?.day?.condition?.text]}
            className={"w-11 h-11"}
        />
        <Text className={"text-white text-base"}>{item?.date}</Text>
        <Text className={"text-white font-semibold text-xl"}> {item.day?.avgtemp_c}&#176;</Text>
    </View>
        ))}




      </ScrollView>
    </View>
  );
};

export default NextSection;
