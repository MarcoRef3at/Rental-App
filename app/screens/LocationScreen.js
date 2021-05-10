import React, { useState } from "react";
import { StyleSheet } from "react-native";

import AppButton from "./../components/Button";
import AppText from "../components/Text";
import defaultStyles from "./../config/styles";
import LocationForm from "./../components/LocationForm";
import MapModal from "../components/MapModal";
import Screen from "./../components/Screen";
import useGoogleLocation from "./../hooks/useGoogleLocation";
import routes from "../navigation/routes";
import FormScreen from "./../components/FormScreen";

const LocationScreen = ({ navigation }) => {
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
    <FormScreen
      header="Where's your place located?"
      subheader="Only confirmed guests will get your exact address after they book. We'll show everyone else an approximate location."
      onSubmit={() => {
        submitForm();
        navigation.navigate(routes.AMENITIES);
      }}
    >
      <AppButton
        title="Choose location on Map"
        onPress={() => setModalVisible(true)}
      />
      <LocationForm geoLocation={geoLocation} />

      <AppButton
        style={defaultStyles.submitButton}
        title="Next"
        onPress={() => {
          submitForm();
          navigation.navigate(routes.AMENITIES);
        }}
      />
      <MapModal
        modalVisible={modalVisible}
        setModalVisible={(value) => setModalVisible(value)}
        setLocation={(value) => geoLocation.setLocation(value)}
      />
    </FormScreen>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
