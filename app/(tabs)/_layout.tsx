import Colors from "@/constant/Colors";
import {
  FontAwesome,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

const page = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ focused }: any) => (
            <FontAwesome6
              name="house-chimney"
              size={24}
              color={focused ? Colors.primary : "black"}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="genero"
        options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="gender-male-female"
              size={32}
              color={focused ? Colors.primary : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="edad"
        options={{
          title: "",
          tabBarIcon: ({ focused }: any) => (
            <FontAwesome6
              name="person"
              size={26}
              color={focused ? Colors.primary : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="universidad"
        options={{
          title: "",
          tabBarIcon: ({ focused }: any) => (
            <FontAwesome
              name="university"
              size={26}
              color={focused ? Colors.primary : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="clima"
        options={{
          title: "",
          tabBarIcon: ({ focused }: any) => (
            <MaterialCommunityIcons
              name="weather-cloudy"
              size={36}
              color={focused ? Colors.primary : "black"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default page;
