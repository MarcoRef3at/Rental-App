import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Screen from "./../components/Screen";
import AppText from "./../components/Text";
import AppButton from "./../components/Button";
import defaultStyles from "./../config/styles";
import FormScreen from "./../components/FormScreen";
import FormChecker from "./../components/form/FormChecker";
import routes from "../navigation/routes";
const HouseRules = ({ navigation }) => {
  let houseRules = [
    { ID: 1, Nm: "Suitable for Children (2-12)" },
    { ID: 2, Nm: "Suitable for infants (under 2)" },
    { ID: 3, Nm: "Suitable for pets" },
    { ID: 4, Nm: "Smoking allowed" },
    { ID: 5, Nm: "Events allowed" },
  ];

  // Create variable to handle Values
  let houseRulesValues = [];
  houseRules.map((item) => {
    houseRulesValues = [...houseRulesValues, { ...item, value: false }];
  });

  const [houseRulesValue, sethouseRulesValue] = useState(houseRulesValues);
  return (
    <FormScreen
      header="Set your house rules"
      subheader="Guests must agree to your house rules before they book"
      onSubmit={() => {
        console.log("ok");
        navigation.navigate(routes.PHOTOS);
      }}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        // style={{ width: deviceWidth - 50 }}
        data={houseRules}
        keyExtractor={(item) => item.ID.toString()}
        renderItem={({ item }) => (
          <FormChecker
            currentItem={item}
            setItems={(i) => sethouseRulesValue(i)}
            items={houseRulesValue}
          />
        )}
      />
    </FormScreen>
  );
};

export default HouseRules;

const styles = StyleSheet.create({});
