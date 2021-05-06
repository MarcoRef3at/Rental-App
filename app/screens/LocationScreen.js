import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import useLocation from "./../hooks/useLocation";
import AppButton from "./../components/Button";
import { geoLocationClient } from "./../api/client";
import Screen from "./../components/Screen";
import { Form } from "../components/forms";
import AppTextInput from "./../components/TextInput";
import Map from "./../components/Map";
import AppText from "../components/Text";
import defaultStyles from "./../config/styles";
import SubmitButton from "./../components/forms/SubmitButton";
import FormField from "./../components/form/FormField";
import ErrorMessage from "./../components/forms/ErrorMessage";

const LocationScreen = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [street, setStreet] = useState("");
  const [hasError, setHasError] = useState(false);

  const requiredFieldError = "This Field Is Required";

  const location = useLocation();
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

      <FormField
        value={street}
        placeholder={"Street"}
        setValue={(value) => setStreet(value)}
        error={requiredFieldError}
        setHasError={(value) => setHasError(value)}
      />
      <FormField
        value={region}
        placeholder={"Region (Optional)"}
        setValue={(value) => setRegion(value)}
        setHasError={(value) => setHasError(false)}
      />
      <FormField
        value={city}
        placeholder={"City"}
        setValue={(value) => setCity(value)}
        error={requiredFieldError}
        setHasError={(value) => setHasError(value)}
      />
      <FormField
        value={state}
        placeholder={"State"}
        setValue={(value) => setState(value)}
        error={requiredFieldError}
        setHasError={(value) => setHasError(value)}
      />
      <FormField
        value={country}
        placeholder={"Country"}
        setValue={(value) => setCountry(value)}
        error={requiredFieldError}
        setHasError={(value) => setHasError(value)}
      />

      <Map
        modalVisible={modalVisible}
        setModalVisible={(value) => setModalVisible(value)}
        setLocation={(value) => setLocation(value)}
        currentLocation={location}
      />
      <AppButton
        style={defaultStyles.submitButton}
        title="Next"
        onPress={() => console.log("submit", hasError)}
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
