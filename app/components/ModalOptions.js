import React, { useState } from "react";
import { View, StyleSheet, FlatList, Button, Text } from "react-native";
import Modal from "react-native-modal";
import PickerItem from "./PickerItem";
import defaultStyles from "./../config/styles";
const ModalOptions = ({
  setModalVisible,
  modalVisible,
  onSelectItem,
  items,
  PickerItemComponent = PickerItem,
  numberOfColumns = 1,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onBackButtonPress={() => setModalVisible(false)}
      onBackdropPress={() => setModalVisible(false)}
    >
      <View style={styles.modalView}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.ID.toString()}
          numColumns={numberOfColumns}
          renderItem={({ item }) => (
            <PickerItemComponent
              item={item}
              label={item.Nm}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        />
      </View>
    </Modal>
  );
};

export default ModalOptions;

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    bottom: -20,
    backgroundColor: "white",
    borderColor: defaultStyles.colors.black,
    borderRadius: 20,

    // Shadow specs
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 20,
  },
});
