import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "./../Text";
import RoundButton from "./../RoundButton";
import { useFormikContext } from "formik";

const FormCounter = ({ title, type }) => {
  const { setFieldValue, values } = useFormikContext();
  return (
    <View style={styles.container}>
      <AppText>{title}</AppText>
      <View style={styles.counter}>
        <RoundButton
          icon="minus-circle"
          onPress={() =>
            setFieldValue(type, values[type] > 1 ? values[type] - 1 : 1)
          }
        />
        <AppText style={{ paddingVertical: 5, paddingHorizontal: 15 }}>
          {values[type]}
        </AppText>
        <RoundButton
          icon="plus-circle"
          onPress={() => setFieldValue(type, values[type] + 1)}
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
