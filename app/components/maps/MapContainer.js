import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppMapView from "./MapView";
import useLocation from "./../../hooks/useLocation";
import RoundButton from "./../RoundButton";
import MapSearch from "./MapSearch";

const MapContainer = ({ marker, setMarker }) => {
  const initialRegion = {
    latitude: 27.3971588,
    longitude: 33.6747813,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
  };

  const currentLocation = useLocation();

  const [region, setRegion] = useState(currentLocation || initialRegion);
  const [mapView, setmapView] = useState(null);

  const relocate = () => {
    mapView.animateToRegion({
      ...region,
      latitude: currentLocation.latitude,
      longitude: currentLocation.longitude,
    });
    setMarker(currentLocation);
  };

  return (
    <View style={styles.container}>
      <AppMapView
        style={styles.map}
        marker={marker}
        region={region}
        setMarker={(value) => setMarker(value)}
        setRegion={(value) => setRegion(value)}
        setmapView={(value) => setmapView(value)}
      />

      <MapSearch
        style={styles.search}
        region={region}
        setRegion={(value) => setRegion(value)}
        setMarker={(value) => setMarker(value)}
      />

      <View style={styles.currentLocation}>
        <RoundButton
          icon="my-location"
          family="MaterialIcons"
          onPress={() => relocate()}
        />
      </View>
    </View>
  );
};

export default MapContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    ...StyleSheet.absoluteFillObject,
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
  currentLocation: {
    position: "absolute",
    bottom: 70,
    right: 0,
    padding: 10,
  },
});
