import React, { useEffect, useState } from "react";
import { Container, Title } from "@/components";
import * as Location from "expo-location";
import { ActivityIndicator, Image, Text, View } from "react-native";
import Colors from "@/constant/Colors";

const clima = () => {
  // Clima en RD: La aplicación nos va a mostrar como estará el clima para el dia en que estamos visualizando la tarea.

  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const permission = await Location.requestForegroundPermissionsAsync();
        console.warn(permission);
        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });

        const { latitude: lat, longitude: lon } = location.coords ?? {};

        setIsLoading(true);
        const getWeatherReponse = await fetch(
          `https://weatherapi-com.p.rapidapi.com/current.json?q=${lat}%2C${lon}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-key":
                "413d45fe78mshe7da2066174f654p15a2a3jsne332b879dc2c",
              "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
            },
          }
        );

        const getWatherData: WeatherData = await getWeatherReponse.json();
        setWeather(getWatherData);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <Container>
      <Title value="Clima Actual" />
      {isLoading && (
        <ActivityIndicator
          size={80}
          color={Colors.primary}
          style={{ alignSelf: "center", marginTop: 30 }}
        />
      )}
      {weather && (
        <View
          style={{
            width: 380,
            alignSelf: "center",
            marginTop: 20,
            borderRadius: 28,
            backgroundColor: Colors.primary,
            padding: 28,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.2,
            shadowRadius: 4.65,
            elevation: 7,
          }}
        >
          <Text
            style={{
              fontSize: 36,
              color: "white",
              fontWeight: "600",
              marginBottom: 14,
              width: "auto",
              alignSelf: "center",
            }}
          >
            {weather.current.condition.text}
          </Text>
          <Text style={{ fontSize: 24, fontWeight: "500", color: "white" }}>
            {weather.location.country}
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              color: Colors.primaryV2[800],
            }}
          >
            {weather.location.region}{" "}
            {new Date(weather.location.localtime ?? "").toLocaleString(
              "es-DO",
              { dateStyle: "long" }
            )}
          </Text>

          <Image
            source={{ uri: "https:" + weather?.current?.condition?.icon ?? "" }}
            style={{
              width: 120,
              height: 120,
              marginVertical: 10,
              alignSelf: "center",
            }}
            resizeMode="cover"
          />
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 16, color: "white", fontWeight: "600" }}>
              Humedad: {weather.current.humidity}
            </Text>
            <Text style={{ fontSize: 16, color: "white", fontWeight: "600" }}>
              Viento: {weather.current.wind_kph} km/h
            </Text>
          </View>
        </View>
      )}
    </Container>
  );
};

export default clima;

interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated_epoch: number;
    last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_mph: number;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    precip_mm: number;
    precip_in: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    windchill_c: number;
    windchill_f: number;
    heatindex_c: number;
    heatindex_f: number;
    dewpoint_c: number;
    dewpoint_f: number;
    vis_km: number;
    vis_miles: number;
    uv: number;
    gust_mph: number;
    gust_kph: number;
  };
}
