import React, { useState } from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Text from "./Text";
import defaultStyles from "../config/styles";
import PickerItem from "./PickerItem";
import ModalOptions from "./ModalOptions";
import AppModalOptions from "./AppModalOptions";
import AppText from "./Text";

const AppFormPicker = ({
  icon,
  items,
  numberOfColumns = 1,
  onSelectItem,
  PickerItemComponent,
  placeholder,
  selectedItem,
  width = "100%",
  initialValue,
  onChange,
  header,
  subheader,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <AppText style={defaultStyles.textHeader3}>{header}</AppText>
      {subheader && <AppText style={defaultStyles.text}>{subheader}</AppText>}
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <Text style={styles.text}>{selectedItem.Nm}</Text>
          ) : placeholder ? (
            <Text style={styles.placeholder}>{placeholder}</Text>
          ) : (
            <Text style={styles.text}>{items[0].Nm}</Text>
          )}
        </View>
      </TouchableWithoutFeedback>

      <AppModalOptions
        items={items}
        modalVisible={modalVisible}
        setModalVisible={(value) => {
          setModalVisible(value);

          console.log("selectedItem:", selectedItem);
        }}
        onSelectItem={(value) => onSelectItem(value)}
        initialValue={initialValue}
        header={placeholder}
        PickerItemComponent={PickerItemComponent}
        onChange={onChange}
      />
    </>
  );
};

export default AppFormPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});
