import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#2ebf91", "#8360c3"],
    title: "Clear Day",
    subtitle: "Clear Beer",
  },
  Thunderstorm: {
    iconName: "weather-lightning-rainy",
    gradient: ["#141517", "#6A9113"],
  },
  Drizzle: {
    iconName: "weather-pouring",
    gradient: ["#136a8a", "#267871"],
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#136a8a", "#267871"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#360033", "#0b8793"],
  },
  Haze: {
    iconName: "weather-fog",
    gradient: ["#ffd452", "#544a7d"],
  },
  Dust: {
    iconName: "weather-fog",
    gradient: ["#948E99", "#2E1437"],
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#948E99", "#2E1437"],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={
        weatherOptions[condition].gradient
          ? weatherOptions[condition].gradient
          : ["#2ebf91", "#8360c3"]
      }
      style={styles.container}
    >
      <StatusBar barStyle="light-content"></StatusBar>
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={
            weatherOptions[condition].iconName
              ? weatherOptions[condition].iconName
              : "weather-sunset"
          }
          color="white"
          size={86}
        />
        <Text style={styles.temp}>{temp}° </Text>
      </View>

      <View style={[styles.halfContainer, styles.textContainer]}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmoshpere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Smoke",
    "Dust",
    "Fog",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 32,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
  },
  textContainer: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 30,
  },
});
