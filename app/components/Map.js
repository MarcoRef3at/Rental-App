import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import MapView, { PROVIDER_GOOGLE, Marker, Animated } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import AppButton from "./Button";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import config from "../config";
import AppTextInput from "./TextInput";
import AppMapView from "./MapView";
import MapSearch from "./MapSearch";
const Map = ({
  modalVisible,
  setModalVisible,
  setLocation,
  currentLocation,
}) => {
  const delta = { latitudeDelta: 0.00922, longitudeDelta: 0.00421 };
  const initialRegion = {
    latitude: 27.3971588,
    longitude: 33.6747813,
    ...delta,
  };

  const [marker, setMarker] = useState(null);
  const [region, setRegion] = useState(initialRegion);

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <Modal
      style={styles.container}
      propagateSwipe
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onBackButtonPress={() => hideModal()}
      onBackdropPress={() => hideModal()}
    >
      {/* <AppMapView
        style={styles.map}
        region={region}
        marker={marker}
        setRegion={(value) => setRegion(value)}
        setMarker={(value) => setMarker(value)}
      /> */}

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        onRegionChangeComplete={(reg) => {
          setRegion(reg);
        }}
        onPress={(e) => setMarker(e.nativeEvent.coordinate)}
        showsUserLocation
        showsMyLocationButton
        followsUserLocation={false}
      >
        {marker && <Marker coordinate={marker} />}
      </MapView>
      <MapSearch
        setRegion={(value) => setRegion(value)}
        region={region}
        style={styles.search}
      />
      <AppButton
        style={styles.save}
        title="Save"
        onPress={() => {
          setModalVisible(false);
          setLocation(marker);
        }}
      />
    </Modal>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    backgroundColor: "yellow",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  map: {
    // flex: 1,
    height: "100%",
    width: "100%",
    // position: "absolute",
    borderWidth: 20,
  },
  search: {},
  save: {
    // position: "absolute",
    // bottom: 0,
    alignContent: "flex-end",
    // alignItems: "flex-end",
    alignSelf: "flex-end",
  },
});
