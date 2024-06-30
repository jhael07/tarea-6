import {
  View,
  TextInput,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Container, Title } from "@/components";
import Colors from "@/constant/Colors";
import Button from "@/components/Button";

const genero = () => {
  // Aceptar el nombre de una persona y predecir su genero: (https://api.genderize.io/?name=irma) si es masculino mostraras algo azul, de lo contrario algo rosa en la pantalla.

  const [name, setName] = useState<string | null>(null);
  const [gender, setGender] = useState<"male" | "female" | null>(null);
  const [isFetching, setIsFetching] = useState(false);

  return (
    <Container>
      <Title value="Adivina el genero:" />
      <View
        style={{
          marginTop: 20,
          alignSelf: "center",
          width: 340,
          borderColor: "black",
          borderWidth: 1,
          padding: 12,
          borderRadius: 8,
        }}
      >
        <TextInput
          onChangeText={(txt) => {
            setName(txt);
          }}
          placeholder="Escribe el nombre"
        />
      </View>

      <Button
        title="Adivinar"
        onPress={() => {
          if (!name) return;
          setIsFetching(true);
          fetch("https://api.genderize.io/?name=" + name)
            .then((res) => {
              return res.json();
            })
            .then((data) => setGender(data.gender));
          setIsFetching(false);
        }}
      />
      {isFetching && (
        <ActivityIndicator
          style={{ alignSelf: "center" }}
          size={"large"}
          color={Colors.primary}
        />
      )}
      {gender === "male" ? (
        <GenreBox color={Colors.primary} genre="male" />
      ) : null}
      {gender === "female" ? (
        <GenreBox color={Colors.secondary} genre="female" />
      ) : null}
    </Container>
  );
};

export default genero;

const GenreBox = ({
  color,
  genre,
}: {
  color: string;
  genre: "male" | "female";
}) => (
  <View
    style={{
      marginTop: 20,
      width: 300,
      height: 300,
      borderRadius: 16,
      alignSelf: "center",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: color,
    }}
  >
    <Text style={{ fontSize: 24, fontWeight: "500", color: "white" }}>
      {genre}
    </Text>
  </View>
);
