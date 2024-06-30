import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { TouchableOpacityProps } from "react-native-gesture-handler";

const Button = (props: TouchableOpacityProps & { title: string }) => {
  return (
    <TouchableOpacity
      {...props}
      style={{
        width: 340,
        borderColor: "black",
        borderWidth: 1,
        padding: 14,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        borderRadius: 14,
      }}
    >
      <Text style={{ fontWeight: "600" }}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
