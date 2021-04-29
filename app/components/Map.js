import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import MapView, { PROVIDER_GOOGLE, Marker, Animated } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import AppButton from "./Button";

const Map = ({
  modalVisible,
  setModalVisible,
  setLocation,
  currentLocation,
}) => {
  const initialRegion = {
    latitude: 27.3971588,
    longitude: 33.6747813,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
  };

  const [marker, setMarker] = useState(null);
  const [region, setRegion] = useState(initialRegion);

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <Modal
      style={{ margin: 0 }}
      propagateSwipe
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onBackButtonPress={() => hideModal()}
      onBackdropPress={() => hideModal()}
    >
      <Animated
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        // initialRegion={currentLocation}
        onRegionChangeComplete={(region) => {
          setRegion(region);
          console.log("region:", region);
        }}
        onPress={(e) => setMarker(e.nativeEvent.coordinate)}
        showsUserLocation={true}
        followsUserLocation={true}
        showsMyLocationButton={true}
      >
        {marker != null && <Marker coordinate={marker} />}
      </Animated>
      <AppButton
        style={styles.currentLocation}
        title="current location"
        onPress={() => {
          setMarker(currentLocation);
          //   todo:change map view on press
          setRegion({ ...region, currentLocation });
        }}
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
  map: {
    flex: 1,
    width: "100%",

    // ...StyleSheet.absoluteFillObject,
  },
  save: {
    position: "absolute",
    bottom: 0,
    right: 0,
    // width: "30%",
  },
  currentLocation: {
    position: "absolute",
    bottom: 70,
    right: 0,
    width: "30%",
  },
});
