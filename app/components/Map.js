import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Modal from "react-native-modal";
import AppButton from "./Button";
import MapContainer from "./maps/MapContainer";
const Map = ({ modalVisible, setModalVisible, setLocation }) => {
  const [marker, setMarker] = useState(null);

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
      <MapContainer marker={marker} setMarker={(m) => setMarker(m)} />
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
    flex: 1,
    margin: 0,
    ...StyleSheet.absoluteFillObject,
  },
  save: {
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 10,
  },
});
