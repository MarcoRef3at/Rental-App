import React, { useState } from "react";
import { StyleSheet } from "react-native";

import AppButton from "./../components/Button";
import AppText from "../components/Text";
import defaultStyles from "./../config/styles";
import LocationForm from "./../components/LocationForm";
import MapModal from "../components/MapModal";
import Screen from "./../components/Screen";
import useGoogleLocation from "./../hooks/useGoogleLocation";
import routes from "../navigation/routes";
import FormChecker from "./../components/form/FormChecker";
const AmenitiesScreen = () => {
  let aminities = [
    "Wifi",
    "TV",
    "Hot Water",
    "Air conditioning",
    "Hair dryer",
    "Cooking basics",
  ];
  return (
    <Screen style={styles.container}>
      <AppText style={defaultStyles.textHeader}>
        What amenities will you offer?
      </AppText>

      <AppText style={defaultStyles.text}>
        You'll be able to add more amenities after you publish your listing.
      </AppText>
      {aminities.map((x) => (
        <FormChecker label={x} />
      ))}
      <FormChecker label={"label"} />
      <AppButton
        style={defaultStyles.submitButton}
        title="Next"
        onPress={() => {
          // submitForm();
          // navigation.navigate(routes.AMENITIES);
        }}
      />
    </Screen>
  );
};
export default AmenitiesScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
