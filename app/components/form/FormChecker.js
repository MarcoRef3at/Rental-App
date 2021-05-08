import React, { useState } from "react";
import { StyleSheet, View, CheckBox } from "react-native";

import AppText from "./../Text";

const FormChecker = ({ label }) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
      <AppText>{label}</AppText>
      <View style={styles.counter}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
      </View>
    </View>
  );
};

export default FormChecker;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 15,
    marginVertical: 10,
  },
  counter: {
    flexDirection: "row",
    position: "absolute",
    alignSelf: "flex-end",
    padding: 5,
  },
});
