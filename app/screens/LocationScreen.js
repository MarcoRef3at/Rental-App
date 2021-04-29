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

const LocationScreen = () => {
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [region, setRegion] = useState();
  const [street, setStreet] = useState();
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

        console.log("country:", country);
        console.log("state:", state);
        console.log("city:", city);
        console.log("region:", region);
        console.log("street:", street);
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

      <AppTextInput
        value={street}
        placeholder={"Street"}
        onChangeText={(value) => setStreet(value)}
        width={300}
      />
      <AppTextInput
        value={region}
        placeholder={"Region"}
        onChangeText={(value) => setRegion(value)}
        width={300}
      />
      <AppTextInput
        value={city}
        placeholder={"City"}
        onChangeText={(value) => setCity(value)}
        width={300}
      />
      <AppTextInput
        value={state}
        placeholder={"State"}
        onChangeText={(value) => setState(value)}
        width={300}
      />
      <AppTextInput
        value={country}
        placeholder={"Country"}
        onChangeText={(value) => setCountry(value)}
        width={300}
      />

      <Map
        modalVisible={modalVisible}
        setModalVisible={(value) => setModalVisible(value)}
        setLocation={(value) => setLocation(value)}
        currentLocation={location}
      />
      <AppButton style={defaultStyles.submitButton} title="Next" />
    </Screen>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
