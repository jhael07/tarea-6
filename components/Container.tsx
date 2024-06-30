import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {children}
    </SafeAreaView>
  );
};

export default Container;
