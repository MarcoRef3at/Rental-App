import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./Screen";
import AppText from "./Text";
import AppButton from "./Button";
import defaultStyles from "./../config/styles";
import Spacer from "./Spacer";

const FormScreen = ({
  children,
  style,
  onSubmit,
  header = "HEADER",
  subheader = "subheader",
}) => {
  return (
    <Screen style={[styles.container, style]}>
      <AppText style={defaultStyles.textHeader}>{header}</AppText>

      <AppText style={defaultStyles.text}>{subheader}</AppText>
      <>{children}</>
      <AppButton
        style={[defaultStyles.submitButton]}
        title="Next"
        onPress={() => onSubmit()}
      />
      <Spacer />
    </Screen>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
