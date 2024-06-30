import { View, Text } from "react-native";
import React from "react";

const Title = ({ value }: { value: string }) => {
  return (
    <Text style={{ alignSelf: "center", fontSize: 28, fontWeight: "600" }}>
      {value}
    </Text>
  );
};

export default Title;
