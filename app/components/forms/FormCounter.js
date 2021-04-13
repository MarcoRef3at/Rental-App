import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "./../Text";
import RoundButton from "./../RoundButton";
import { useFormikContext } from "formik";

const FormCounter = ({ label, item, type, initialValue = 1 }) => {
  if (typeof item == "object") {
    type = item.Nm;
  }
  const { setFieldValue, values } = useFormikContext();
  let disabled = values[type] <= initialValue;

  return (
    <View style={styles.container}>
      <AppText>{label}</AppText>
      <View style={styles.counter}>
        <RoundButton
          icon="minus-circle"
          disabled={disabled}
          onPress={() => {
            setFieldValue(
              type,
              values[type] > initialValue ? values[type] - 1 : initialValue
            );
          }}
        />
        <AppText style={{ paddingVertical: 5, paddingHorizontal: 15 }}>
          {values[type]}
        </AppText>
        <RoundButton
          icon="plus-circle"
          onPress={() => {
            setFieldValue(type, values[type] + 1);
          }}
        />
      </View>
    </View>
  );
};

export default FormCounter;

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
