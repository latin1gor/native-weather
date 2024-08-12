import { Image, Text, View } from "react-native";
import TemperatureSection from "@/components/forecast/temperature-section";
import StatsSection from "@/components/forecast/stats-section";
import CitySection from "@/components/forecast/city-section";
import NextSection from "@/components/forecast/next-section";

const Forecast = () => {
  return (
    <View className={"mx-4 flex justify-around flex-1 mb-2"}>
      <CitySection />
      <TemperatureSection />
      <StatsSection />
      <NextSection />
    </View>
  );
};

export default Forecast;
