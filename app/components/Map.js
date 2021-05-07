import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import MapView, { PROVIDER_GOOGLE, Marker, Animated } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps
import AppButton from "./Button";
import MapSearch from "./MapSearch";
import RoundButton from "./RoundButton";
import useLocation from "./../hooks/useLocation";
import AppMapView from "./MapView";
const Map = ({ modalVisible, setModalVisible, setLocation }) => {
  const delta = { latitudeDelta: 0.00922, longitudeDelta: 0.00421 };
  const initialRegion = {
    latitude: 27.3971588,
    longitude: 33.6747813,
    ...delta,
  };
  const currentLocation = useLocation();

  const [marker, setMarker] = useState(null);
  const [region, setRegion] = useState(initialRegion);
  const [mapView, setmapView] = useState(null);
  const hideModal = () => {
    setModalVisible(false);
  };

  const relocate = () => {
    mapView.animateToRegion({
      ...region,
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
    });
    setMarker(currentLocation);
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
        setmapView={(value) => setmapView(value)}
      /> */}

      <MapView
        ref={(ref) => {
          setmapView(ref);
        }}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
        onRegionChangeComplete={(reg) => {
          setRegion(reg);
        }}
        onPress={(e) => setMarker(e.nativeEvent.coordinate)}
        showsUserLocation
        showsMyLocationButton={false}
        followsUserLocation={false}
      >
        {marker && <Marker coordinate={marker} />}
      </MapView>
      <MapSearch
        setRegion={(value) => setRegion(value)}
        region={region}
        style={styles.search}
      />

      <View style={styles.currentLocation}>
        <RoundButton
          icon="my-location"
          family="MaterialIcons"
          onPress={() => {
            relocate();
          }}
        />
      </View>

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
    ...StyleSheet.absoluteFillObject,
    margin: 0,
    // backgroundColor: "yellow",
    // borderColor: "red",
    // borderWidth: 20,

    flex: 1,
  },
  map: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignSelf: "center",
    position: "absolute",
    ...StyleSheet.absoluteFillObject,
  },
  search: {
    flex: 1,
    width: 100,
    height: 100,
    alignSelf: "center",
    position: "absolute",
    top: 0,
  },
  save: {
    // flex: 1,
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 10,
  },
  currentLocation: {
    position: "absolute",
    bottom: 70,
    right: 0,
    padding: 10,
  },
});
