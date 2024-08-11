import { Image, ScrollView, Text, View } from "react-native";
import { CalendarDaysIcon } from "react-native-heroicons/outline";

const NextSection = () => {
  return (
    <View className={"mb-2 space-y-3"}>
      <View className={"flex-row items-center mx-5 space-x-2"}>
        <CalendarDaysIcon color="white" size={"22"} />
        <Text className={"text-white text-base"}>Daily forecast</Text>
      </View>
      <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15 }}>
        <View
          className={
            "flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4 bg-white/20"
          }
        >
          <Image
            source={require("../../assets/images/heavy-rain.png")}
            className={"w-11 h-11"}
          />
          <Text className={"text-white text-base"}>Monday</Text>
          <Text className={"text-white font-semibold text-xl"}> 23&#176;</Text>
        </View>
        <View
          className={
            "flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4 bg-white/20"
          }
        >
          <Image
            source={require("../../assets/images/heavy-rain.png")}
            className={"w-11 h-11"}
          />
          <Text className={"text-white text-base"}>Monday</Text>
          <Text className={"text-white font-semibold text-xl"}> 23&#176;</Text>
        </View>
        <View
          className={
            "flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4 bg-white/20"
          }
        >
          <Image
            source={require("../../assets/images/heavy-rain.png")}
            className={"w-11 h-11"}
          />
          <Text className={"text-white text-base"}>Monday</Text>
          <Text className={"text-white font-semibold text-xl"}> 23&#176;</Text>
        </View>
        <View
          className={
            "flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4 bg-white/20"
          }
        >
          <Image
            source={require("../../assets/images/heavy-rain.png")}
            className={"w-11 h-11"}
          />
          <Text className={"text-white text-base"}>Monday</Text>
          <Text className={"text-white font-semibold text-xl"}> 23&#176;</Text>
        </View>
        <View
          className={
            "flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4 bg-white/20"
          }
        >
          <Image
            source={require("../../assets/images/heavy-rain.png")}
            className={"w-11 h-11"}
          />
          <Text className={"text-white text-base"}>Monday</Text>
          <Text className={"text-white font-semibold text-xl"}> 23&#176;</Text>
        </View>
        <View
          className={
            "flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4 bg-white/20"
          }
        >
          <Image
            source={require("../../assets/images/heavy-rain.png")}
            className={"w-11 h-11"}
          />
          <Text className={"text-white text-base"}>Monday</Text>
          <Text className={"text-white font-semibold text-xl"}> 23&#176;</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default NextSection;
