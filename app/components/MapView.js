import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Animated } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps

const AppMapView = ({ region, setRegion, setMarker }) => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.map}
      region={region}
      onRegionChangeComplete={(reg) => {
        setRegion(reg);
        setMarker(reg);
      }}
      // onRegionChange={(reg) => {
      //   setMarker(reg);
      // }}
      // onPress={(e) => setMarker(e.nativeEvent.coordinate)}
      showsUserLocation={true}
      followsUserLocation={true}
      showsMyLocationButton={true}
    >
      <Marker coordinate={region} />
    </MapView>
  );
};

export default AppMapView;

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: "100%",

    // ...StyleSheet.absoluteFillObject,
  },
});
