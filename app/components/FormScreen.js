import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./Screen";
import AppText from "./Text";
import AppButton from "./Button";
import defaultStyles from "./../config/styles";
import Spacer from "./Spacer";
import SubmitButton from "./form/SubmitButton";

const FormScreen = ({
  children,
  style,
  onSubmit = () => console.log("Next"),
  header = "HEADER",
  headerVisable = true,
  subheader = "subheader",
  subheaderVisable = true,
}) => {
  return (
    <Screen style={[style]}>
      {headerVisable && (
        <AppText style={[styles.padding, defaultStyles.textHeader]}>
          {header}
        </AppText>
      )}
      {subheaderVisable && (
        <AppText style={[styles.padding, defaultStyles.text]}>
          {subheader}
        </AppText>
      )}
      <>{children}</>
      <SubmitButton
        style={[defaultStyles.submitButton]}
        title="Next"
        onPress={() => onSubmit()}
      />
      {/* <Spacer /> */}
    </Screen>
  );
};

export default FormScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 10,
  },
  padding: {
    paddingHorizontal: 10,
  },
});
