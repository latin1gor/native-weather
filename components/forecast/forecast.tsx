import { Image, Text, View } from "react-native";

const Forecast = () => {
  return (
    <View className={"mx-4 flex justify-around flex-1 mb-2"}>
      <Text className={"text-white text-center text-2xl font-bold"}>
        Lviv,{" "}
        <Text className={"text-lg font-semibold text-gray-300"}>Ukraine</Text>
      </Text>
      <View className={"flex-row justify-center"}>
        <Image
          source={require("../../assets/images/heavy-rain.png")}
          className={"w-52 h-52"}
        />
      </View>
      <View className={"space-y-2"}>
        <Text className={"text-center font-bold text-white text-6xl ml-5"}>
          23&#176;
        </Text>
        <Text className={"text-center text-white text-xl tracking-widest"}>
          Rainy
        </Text>
      </View>
      <View className={"flex-row justify-between mx-4"}>
        <View className={"flex-row space-x-2 items-center"}>
          <Image
            source={require("../../assets/images/")}
            className={"w-6 h-6 fill-blue-500"}
          />
        </View>
      </View>
    </View>
  );
};

export default Forecast;
