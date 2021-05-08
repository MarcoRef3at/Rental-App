import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import FormField from "./../components/form/FormField";

const LocationForm = ({ geoLocation }) => {
  const requiredFieldError = "This Field Is Required";
  return (
    <ScrollView keyboardDismissMode="interactive" style={{ flex: 1 }}>
      <FormField
        value={geoLocation.street}
        placeholder={"Street"}
        setValue={(value) => geoLocation.setStreet(value)}
        error={geoLocation.street == "" ? requiredFieldError : null}
      />

      <FormField
        value={geoLocation.region}
        placeholder={"Region (Optional)"}
        setValue={(value) => geoLocation.setRegion(value)}
      />

      <FormField
        value={geoLocation.city}
        placeholder={"City"}
        setValue={(value) => geoLocation.setCity(value)}
        error={geoLocation.city == "" ? requiredFieldError : null}
      />

      <FormField
        value={geoLocation.state}
        placeholder={"State"}
        setValue={(value) => geoLocation.setState(value)}
        error={geoLocation.state == "" ? requiredFieldError : null}
      />

      <FormField
        value={geoLocation.country}
        placeholder={"Country"}
        setValue={(value) => geoLocation.setCountry(value)}
        error={geoLocation.country == "" ? requiredFieldError : null}
      />
    </ScrollView>
  );
};

export default LocationForm;

const styles = StyleSheet.create({});
