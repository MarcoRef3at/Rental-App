import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
// import useLocation from "./../hooks/useLocation";
import AppButton from "./../components/Button";
import { geoLocationClient } from "./../api/client";
import Screen from "./../components/Screen";
import Map from "./../components/Map";
import AppText from "../components/Text";
import defaultStyles from "./../config/styles";

import FormField from "./../components/form/FormField";

const LocationScreen = () => {
  const geoLocation = useGoogleLocation();

  const [hasError, setHasError] = useState(false);

  const requiredFieldError = "This Field Is Required";

  const [modalVisible, setModalVisible] = useState(false);

  const validation = () => {
    geoLocation.country == null && geoLocation.setCountry("");
    geoLocation.city == null && geoLocation.setCity("");
    geoLocation.state == null && geoLocation.setState("");
    geoLocation.street == null && geoLocation.setStreet("");

    if (
      geoLocation.country == "" ||
      geoLocation.city == "" ||
      geoLocation.street == "" ||
      geoLocation.state == ""
    ) {
      setHasError(true);
    } else {
      setHasError(false);
    }
    console.log("hasError:", hasError);
  };

  return (
    <Screen style={styles.container}>
      <AppText style={defaultStyles.textHeader}>
        Where's your place located?
      </AppText>
      <AppText style={defaultStyles.text}>
        Only confirmed guests will get your exact address after they book. We'll
        show everyone else an approximate location.
      </AppText>

      <AppButton
        title="Choose location on Map"
        onPress={() => setModalVisible(true)}
      />

      <ScrollView
        keyboardDismissMode="interactive"
        style={{
          flex: 1,
        }}
      >
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
      <Map
        modalVisible={modalVisible}
        setModalVisible={(value) => setModalVisible(value)}
        setLocation={(value) => geoLocation.setLocation(value)}
      />
      <AppButton
        style={defaultStyles.submitButton}
        title="Next"
        onPress={() => {
          validation();
        }}
      />
    </Screen>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
