import React, { useState } from "react";
import { StyleSheet, View, CheckBox, TouchableOpacity } from "react-native";

import AppText from "./../Text";

const FormChecker = ({ currentItem, items, setItems }) => {
  const [isSelected, setSelection] = useState(false);
  const handleChange = () => {
    setSelection(!isSelected);
    let newValue = { ...currentItem, value: !isSelected };
    let index = items.findIndex((element) => element.ID == newValue.ID);
    items[index] = newValue;
    let newValues = [...items];
    setItems(newValues);
    // console.log("item:", items);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleChange()}>
        <AppText>{currentItem.Nm}</AppText>
        <View style={styles.counter}>
          <CheckBox
            value={isSelected}
            onValueChange={handleChange}
            style={styles.checkbox}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FormChecker;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  counter: {
    flexDirection: "row",
    position: "absolute",
    alignSelf: "flex-end",
  },
});
