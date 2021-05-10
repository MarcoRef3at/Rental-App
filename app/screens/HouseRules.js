import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./../components/Screen";
import AppText from "./../components/Text";
import AppButton from "./../components/Button";
import defaultStyles from "./../config/styles";
import FormScreen from "./../components/FormScreen";

const HouseRules = () => {
  return (
    <FormScreen
      header="Set your house rules"
      subheader="Guests must agree to your house rules before they book"
      onSubmit={() => {
        console.log("ok");
      }}
    ></FormScreen>
  );
};

export default HouseRules;

const styles = StyleSheet.create({});
