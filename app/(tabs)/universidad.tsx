import { View, Text, TextInput, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import { Container, Title } from "@/components";
import Button from "@/components/Button";
import { Link } from "expo-router";
import Colors from "@/constant/Colors";

interface University {
  alpha_two_code: string;
  country: string;
  domains: string[];
  name: string;
  state_province: string | null;
  web_pages: string[];
}

const universidad = () => {
  // Programa que acepte el nombre de un país en ingles: muestre las universidades de Ese país,
  //  luego mostrar el nombre, dominio y link a pagina web de cada universidad.

  const [countryName, setCountryName] = useState("");
  const [universities, setUniversities] = useState<Array<University> | null>(
    null
  );

  return (
    <Container>
      <Title value="Universidades segun el pais:" />
      <View style={style.input}>
        <TextInput
          onChangeText={(txt) => {
            setCountryName(txt);
          }}
          placeholder="Escribe el nombre del pais en ingles"
        />
      </View>
      <Button
        title="Obtener las universidades"
        onPress={async () => {
          const response = await fetch(
            "http://universities.hipolabs.com/search?country=" +
              countryName.replaceAll(" ", "+")
          );
          const data = await response.json();
          setUniversities(data);
        }}
      />

      <View
        style={{
          marginTop: 20,
          alignSelf: "center",
        }}
      >
        <FlatList
          data={universities}
          ItemSeparatorComponent={() => <View style={{ height: 25 }} />}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  width: 360,
                  padding: 12,
                  borderRadius: 12,
                  backgroundColor: Colors.primary,
                  alignSelf: "center",
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    color: "white",
                    paddingBottom: 8,
                    borderBottomColor: "white",
                    borderBottomWidth: 0.7,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "white" }}
                >
                  Dominio: {item.domains[0]}
                </Text>
                <Link
                  href={item.web_pages[0]}
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "white",
                    backgroundColor: "black",
                    padding: 12,
                    borderRadius: 14,
                    textAlign: "center",
                    marginTop: 10,
                  }}
                >
                  Visitar pagina web
                </Link>
              </View>
            );
          }}
        />
      </View>
    </Container>
  );
};

export default universidad;

const style = StyleSheet.create({
  input: {
    marginTop: 20,
    alignSelf: "center",
    width: 340,
    borderColor: "black",
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
  },
});
