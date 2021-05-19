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
  onSubmit = () => console.log("Next"),
  header = "HEADER",
  headerVisable = true,
  subheader = "subheader",
  subheaderVisable = true,
  padding = true,
  submitBottonTitle = "Next",
}) => {
  return (
    <Screen style={[padding && styles.container, style]}>
      {headerVisable && (
        <AppText style={[defaultStyles.textHeader, !padding && styles.padding]}>
          {header}
        </AppText>
      )}

      {subheaderVisable && (
        <AppText style={[defaultStyles.text, !padding && styles.padding]}>
          {subheader}
        </AppText>
      )}
      <>{children}</>
      <AppButton
        style={[defaultStyles.submitButton]}
        title={submitBottonTitle}
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
