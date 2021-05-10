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
import FormScreen from "./../components/FormScreen";
const AmenitiesScreen = ({ navigation }) => {
  let aminities = [
    { ID: 1, Nm: "Wifi" },
    { ID: 2, Nm: "TV" },
    { ID: 3, Nm: "Hot Water" },
    { ID: 4, Nm: "Air conditioning" },
    { ID: 5, Nm: "Hair dryer" },
    { ID: 6, Nm: "Cooking basics" },
    { ID: 7, Nm: "Washer" },
    { ID: 8, Nm: "Smoke Alarm" },
    { ID: 55, Nm: "Smoke Alarm" },
    { ID: 33, Nm: "Smoke Alarm" },
  ];

  // Create variable to handle Values
  let aminitiesValues = [];
  aminities.map((item) => {
    aminitiesValues = [...aminitiesValues, { ...item, value: false }];
  });

  const [aminitiesValue, setAminitiesValue] = useState(aminitiesValues);
  return (
    <FormScreen
      header="What amenities will you offer?"
      subheader="You'll be able to add more amenities after you publish your listing."
      onSubmit={() => {
        console.log(aminitiesValue);
        // submitForm();
        navigation.navigate(routes.HOUSE_RULES);
      }}
    >
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
    </FormScreen>
  );
};
export default AmenitiesScreen;

const styles = StyleSheet.create({});
