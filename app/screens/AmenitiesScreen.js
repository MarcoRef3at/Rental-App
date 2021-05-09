import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import AppButton from "./../components/Button";
import AppText from "../components/Text";
import defaultStyles from "./../config/styles";
import LocationForm from "./../components/LocationForm";
import MapModal from "../components/MapModal";
import Screen from "./../components/Screen";
import useGoogleLocation from "./../hooks/useGoogleLocation";
import routes from "../navigation/routes";
import FormChecker from "./../components/form/FormChecker";
import Spacer from "../components/Spacer";
const AmenitiesScreen = () => {
  let aminities = [
    { ID: 1, Nm: "Wifi" },
    { ID: 2, Nm: "TV" },
    { ID: 3, Nm: "Hot Water" },
    { ID: 4, Nm: "Air conditioning" },
    { ID: 5, Nm: "Hair dryer" },
    { ID: 6, Nm: "Cooking basics" },
    { ID: 7, Nm: "Washer" },
    { ID: 8, Nm: "Smoke Alarm" },
  ];

  // Create variable to handle Values
  let aminitiesValues = [];
  aminities.map((item) => {
    aminitiesValues = [...aminitiesValues, { ...item, value: false }];
  });

  const [aminitiesValue, setAminitiesValue] = useState(aminitiesValues);
  return (
    <Screen style={styles.container}>
      <AppText style={defaultStyles.textHeader}>
        What amenities will you offer?
      </AppText>

      <AppText style={defaultStyles.text}>
        You'll be able to add more amenities after you publish your listing.
      </AppText>

      <FlatList
        showsVerticalScrollIndicator={false}
        // style={{ width: deviceWidth - 50 }}
        data={aminities}
        keyExtractor={(item) => item.ID.toString()}
        renderItem={({ item }) => (
          <FormChecker
            currentItem={item}
            setItems={(i) => setAminitiesValue(i)}
            items={aminitiesValue}
          />
        )}
      />
      {/* <FlatList
        showsVerticalScrollIndicator={false}
        // style={{ width: deviceWidth - 50 }}
        data={aminities}
        keyExtractor={(item) => item.ID.toString()}
        renderItem={({ item }) => <FormChecker item={item} />}
      /> */}

      <AppButton
        style={defaultStyles.submitButton}
        title="Next"
        onPress={() => {
          console.log(aminitiesValue);
          // submitForm();
          // navigation.navigate(routes.AMENITIES);
        }}
      />
      <Spacer />
    </Screen>
  );
};
export default AmenitiesScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
