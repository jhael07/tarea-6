import { Text, Image, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", justifyContent: "center" }}
    >
      <Image
        source={require("../../assets/images/tools.jpg")}
        style={sytle.imageContainer}
      />
      <Text style={{ alignSelf: "center", fontSize: 28, fontWeight: "600" }}>
        Tools App
      </Text>
    </SafeAreaView>
  );
};

export default index;

const sytle = StyleSheet.create({
  imageContainer: {
    borderRadius: 40,
    alignSelf: "center",
    width: 360,
    height: 340,
    justifyContent: "center",
  },
});
