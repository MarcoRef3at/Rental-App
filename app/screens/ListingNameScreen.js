import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FormScreen from "./../components/FormScreen";
import FormField from "./../components/form/FormField";
import routes from "../navigation/routes";

const ListingNameScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  return (
    <FormScreen
      header={"Name your listing"}
      subheader={
        "Attract guests with a listing title that highlights what makes your place special."
      }
      onSubmit={() => navigation.navigate(routes.AVAILABILITY)}
    >
      <View style={{ paddingTop: 10 }}>
        <FormField
          value={name}
          placeholder={"Add a title"}
          setValue={(value) => setName(value)}
          // error={geoLocation.street == "" ? requiredFieldError : null}
        />
      </View>
    </FormScreen>
  );
};

export default ListingNameScreen;

const styles = StyleSheet.create({});
