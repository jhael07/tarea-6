import { Container, Title } from "@/components";
import Button from "@/components/Button";
import { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet } from "react-native";

const edad = () => {
  // Vista que acepte el nombre de una persona y determine la edad de la misma (https://api.agify.io/?name=meelad) dependiendo la edad de la persona debes mostrar un mensaje que diga si es joven, adulto o anciano. Muestra una imagen relativa a cada estado y su edad en numero.

  const [name, setName] = useState<string | null>(null);
  const [age, setAge] = useState<number | null>(null);
  const [nameToShow, setNameToShow] = useState("");

  const handleAge = () => {
    fetch(`https://api.agify.io/?name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        setNameToShow(name ?? "");
        setAge(data.age);
      });
  };

  return (
    <Container>
      <Title value="Adivina la edad:" />
      <View style={style.input}>
        <TextInput
          onChangeText={(txt) => {
            setName(txt);
          }}
          placeholder="Escribe el nombre"
        />
      </View>
      <Button title="Adividinar" onPress={handleAge} />
      {age && <ShowAge age={age ?? 0} name={nameToShow ?? ""} />}
    </Container>
  );
};

export default edad;

const ShowAge = ({ name, age }: { name: string; age: number }) => {
  if (age <= 30)
    return (
      <View style={{ alignSelf: "center", width: 360, marginTop: 20 }}>
        <Image
          style={style.imageAge}
          source={{
            uri: "https://img.freepik.com/premium-vector/young-man-cartoon_18591-42244.jpg",
          }}
          resizeMethod="resize"
          resizeMode="cover"
        />
        <Text style={{ fontSize: 20, alignSelf: "center" }}>
          {name} es joven tiene {age} años
        </Text>
      </View>
    );
  if (age < 60)
    return (
      <View style={{ alignSelf: "center", width: 360, marginTop: 20 }}>
        <Image
          style={style.imageAge}
          source={{
            uri: "https://previews.123rf.com/images/jemastock/jemastock1705/jemastock170515352/79062795-cartoon-man-male-parent-family-adult-member-vector-illustration.jpg",
          }}
          resizeMethod="resize"
          resizeMode="cover"
        />
        <Text style={{ fontSize: 20, alignSelf: "center" }}>
          {name} es un adulto tiene {age} años
        </Text>
      </View>
    );
  if (age >= 60)
    return (
      <View style={{ alignSelf: "center", width: 360, marginTop: 20 }}>
        <Image
          style={style.imageAge}
          source={{
            uri: "https://cdn1.vectorstock.com/i/1000x1000/40/65/cartoon-man-male-parent-family-adult-member-vector-15024065.jpg",
          }}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 20, alignSelf: "center" }}>
          {name} es un envejeciente tiene {age} años
        </Text>
      </View>
    );
};

const style = StyleSheet.create({
  imageAge: {
    alignSelf: "center",
    width: 300,
    height: 300,
    borderRadius: 12,
  },

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
