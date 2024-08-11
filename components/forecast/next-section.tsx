import { ScrollView, Text, View } from "react-native";
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
            "flex-row justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4 bg-white/25"
          }
        ></View>
      </ScrollView>
    </View>
  );
};

export default NextSection;
