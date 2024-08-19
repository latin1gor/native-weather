import {Image, Text, View} from "react-native";
import {IWeather} from "@/components/forecast/forecast";
import {weatherImages} from "@/constants/weather";


const TemperatureSection = ({weather}: IWeather) => {
    return (
      <>
        <View className={"flex-row justify-center"}>
          <Image
            source={weatherImages[weather.current?.condition?.text]}
            className={"w-52 h-52"}
          />
        </View>
        <View className={"space-y-2"}>
          <Text className={"text-center font-bold text-white text-6xl ml-5"}>
              {weather.current?.temp_c}&#176;
          </Text>
          <Text className={"text-center text-white text-xl tracking-widest"}>
              {weather.current?.condition?.text}
          </Text>
        </View>
      </>
    );
}
export default TemperatureSection