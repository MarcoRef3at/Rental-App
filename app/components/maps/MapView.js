import React from "react";
import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Animated } from "react-native-maps"; // remove PROVIDER_GOOGLE import if not using Google Maps

const AppMapView = ({ region, marker, setRegion, setMarker, setmapView }) => {
  return (
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
  );
};

export default AppMapView;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
