import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FormScreen from "../components/FormScreen";
import Spacer from "../components/Spacer";
import AppText from "../components/Text";
import AppTextInput from "../components/TextInput";
import defaultStyles from "./../config/styles";

const PriceScreen = () => {
  return (
    <FormScreen
      header={"Price your space"}
      subheader={
        "A 9%-14% guest service fee will be added to your base price - but sometimes the amount will vary, depending on the length of the trip"
      }
    >
      <Spacer />
      <AppText style={defaultStyles.textHeader3}>Base Price</AppText>
      <AppText>This will be your default nightly price</AppText>
      <AppTextInput></AppTextInput>
    </FormScreen>
  );
};

export default PriceScreen;

const styles = StyleSheet.create({});
