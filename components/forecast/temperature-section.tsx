import {Image, Text, View} from "react-native";


const TemperatureSection = () => {
    return (
      <>
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
      </>
    );
}
export default TemperatureSection