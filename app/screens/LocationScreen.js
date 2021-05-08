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
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [region, setRegion] = useState(null);
  const [street, setStreet] = useState(null);
  const [hasError, setHasError] = useState(false);

  const requiredFieldError = "This Field Is Required";

  // const location = useLocation();
  const setLocation = (markedLocation) => {
    geoLocationClient
      .get("/geocode/json", {
        params: {
          // latlng: `27.3971588,33.6747813`,
          latlng: `${markedLocation.latitude},${markedLocation.longitude}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        response.data.results[0].address_components.map((address) => {
          const route = address.types.find((element) => element == "route");
          route != undefined && setStreet(address.long_name);

          const city = address.types.find(
            (element) => element == "administrative_area_level_2"
          );
          city != undefined && setCity(address.long_name);

          const state = address.types.find(
            (element) => element == "administrative_area_level_1"
          );
          state != undefined && setState(address.long_name);

          const country = address.types.find((element) => element == "country");
          country != undefined && setCountry(address.long_name);
        });
        response.data.results[1].address_components.map((address) => {
          const region = address.types.find(
            (element) => element == "neighborhood"
          );
          region != undefined && setRegion(address.long_name);
        });
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  const [modalVisible, setModalVisible] = useState(false);

  const validation = () => {
    country == null && setCountry("");
    city == null && setCity("");
    state == null && setState("");
    street == null && setStreet("");

    if (country == "" || city == "" || street == "" || state == "") {
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
          value={street}
          placeholder={"Street"}
          setValue={(value) => setStreet(value)}
          error={street == "" ? requiredFieldError : null}
        />
        <FormField
          value={region}
          placeholder={"Region (Optional)"}
          setValue={(value) => setRegion(value)}
        />
        <FormField
          value={city}
          placeholder={"City"}
          setValue={(value) => setCity(value)}
          error={city == "" ? requiredFieldError : null}
        />
        <FormField
          value={state}
          placeholder={"State"}
          setValue={(value) => setState(value)}
          error={state == "" ? requiredFieldError : null}
        />
        <FormField
          value={country}
          placeholder={"Country"}
          setValue={(value) => setCountry(value)}
          error={country == "" ? requiredFieldError : null}
        />
      </ScrollView>
      <Map
        modalVisible={modalVisible}
        setModalVisible={(value) => setModalVisible(value)}
        setLocation={(value) => setLocation(value)}
        // currentLocation={location}
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
