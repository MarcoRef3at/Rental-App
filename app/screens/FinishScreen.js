import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./../components/Screen";
import LottieView from "lottie-react-native";

const FinishScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      console.log("navigate");
      navigation.navigate("Feed");
    }, 2000);
  }, []);
  return (
    <Screen>
      <LottieView source={require("./mortgage.json")} autoPlay loop />
    </Screen>
  );
};

export default FinishScreen;

const styles = StyleSheet.create({});
