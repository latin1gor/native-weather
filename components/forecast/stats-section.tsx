import { Image, Text, View } from "react-native";

const StatsSection = () => {
  return (
    <>
      <View className={"flex-row justify-between mx-4"}>
        <View className={"flex-row space-x-2 items-center"}>
          <Image
            source={require("../../assets/images/wind-icon.png")}
            className={"w-6 h-6 fill-blue-500"}
          />
          <Text className={"text-white font-semibold text-base"}>22km</Text>
        </View>
        <View className={"flex-row space-x-2 items-center"}>
          <Image
            source={require("../../assets/images/drop.png")}
            className={"w-6 h-6 fill-blue-500"}
          />
          <Text className={"text-white font-semibold text-base"}>23%</Text>
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
