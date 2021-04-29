import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Button,
  Text,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import PickerItem from "./PickerItem";
import defaultStyles from "./../config/styles";
import AppText from "./Text";
import Constants from "expo-constants";
import { Dimensions } from "react-native";
import { useFormikContext } from "formik";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const ModalOptions = ({
  setModalVisible,
  modalVisible,
  onSelectItem,
  items,
  header = "Choose one of the following options",
  PickerItemComponent = PickerItem,
  numberOfColumns = 1,
  initialValue,
  onChange,
}) => {
  // let itemsCount = items.length < 11 ? items.length : 10;
  // console.log("itemsCount:", itemsCount);
  const { values } = useFormikContext();
  const hideModal = () => {
    setModalVisible(false);
    console.log("values:", onChange);
    onChange(values);
  };
  return (
    <Modal
      propagateSwipe
      animationType="slide"
      transparent={true}
      swipeDirection="down"
      onSwipeComplete={(e) => {
        hideModal();
      }}
      visible={modalVisible}
      onBackButtonPress={() => hideModal()}
      onBackdropPress={() => hideModal()}
    >
      <View
        style={[
          styles.modalView,
          { maxHeight: deviceHeight - Constants.statusBarHeight - 10 },
        ]}
      >
        <View style={{ flexDirection: "column" }}>
          <AppText style={defaultStyles.modalHeader}>{header}</AppText>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ width: deviceWidth - 50 }}
            // ListHeaderComponent={() => (
            //   <AppText style={defaultStyles.modalHeader}>{header}</AppText>
            // )}
            data={items}
            keyExtractor={(item) => item.ID.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                initialValue={initialValue}
                label={item.Nm}
                onPress={() => {
                  hideModal();
                  onSelectItem(item);
                }}
              />
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalOptions;

const styles = StyleSheet.create({
  modalView: {
    flexDirection: "row",
    // alignContent: "flex-end",
    position: "absolute",
    width: "100%",
    // position: "absolute",
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
