import React, { useState } from "react";
import { StyleSheet } from "react-native";

import AppButton from "./../components/Button";
import AppText from "../components/Text";
import defaultStyles from "./../config/styles";
import LocationForm from "./../components/LocationForm";
import MapModal from "../components/MapModal";
import Screen from "./../components/Screen";
import useGoogleLocation from "./../hooks/useGoogleLocation";

const LocationScreen = () => {
  const geoLocation = useGoogleLocation();

  const [hasError, setHasError] = useState(false);

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

  const submitForm = () => {
    validation();
    console.log("country:", geoLocation.country);
    console.log("city:", geoLocation.city);
    console.log("state:", geoLocation.state);
    console.log("region:", geoLocation.region);
    console.log("street:", geoLocation.street);
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
      <LocationForm geoLocation={geoLocation} />

      <AppButton
        style={defaultStyles.submitButton}
        title="Next"
        onPress={() => submitForm()}
      />
      <MapModal
        modalVisible={modalVisible}
        setModalVisible={(value) => setModalVisible(value)}
        setLocation={(value) => geoLocation.setLocation(value)}
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
