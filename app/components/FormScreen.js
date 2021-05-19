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
  padding = true,
}) => {
  return (
    <Screen style={[padding && styles.container, style]}>
      <AppText style={[defaultStyles.textHeader, !padding && styles.padding]}>
        {header}
      </AppText>

      <AppText style={[defaultStyles.text, !padding && styles.padding]}>
        {subheader}
      </AppText>
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
  padding: {
    paddingHorizontal: 20,
  },
});
