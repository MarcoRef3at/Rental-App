import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Modal from "react-native-modal";
import AppButton from "./Button";
import ImageBrowser from "./imagePicker/ImageBrowser";
import Test from "./Test";
const AddPhotoModal = ({ modalVisible, setModalVisible }) => {
  const hideModal = () => {
    setModalVisible(false);
  };
  const submit = (onSubmit) => {
    console.log("onSubmit:", onSubmit);
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
      {/* <ImageBrowser
        max={10}
        onChange={(num, onSubmit) => {
          console.log("num:", num);
          submit(onSubmit);
        }}
        callback={(callback) => {
          console.log("callback:", callback);
        }}
      /> */}
      <Test />
      <AppButton
        style={styles.save}
        title="Save"
        onPress={() => {
          setModalVisible(false);
        }}
      />
    </Modal>
  );
};

export default AddPhotoModal;

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
