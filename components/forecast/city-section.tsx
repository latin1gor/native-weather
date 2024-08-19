import { Text } from "react-native";
import {IWeather} from "@/components/forecast/forecast";

const CitySection = ({ weather }: IWeather) => {
  return (
    <Text className={"text-white text-center text-2xl font-bold"}>
        {weather?.location.name},
      <Text className={"text-lg font-semibold text-gray-300"}>{" " + weather?.location.country}</Text>
    </Text>
  );
};

export default CitySection;
