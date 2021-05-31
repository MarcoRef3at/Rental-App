import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import AppText from "./../Text";
import RoundButton from "./../RoundButton";
import AppTextInput from "./../TextInput";
import defaultStyles from "./../../config/styles";

const FormCounter = ({
  label,
  item,
  type,
  initialValue = 1,
  value,
  setValue,
}) => {
  let disabled = value <= initialValue;

  return (
    <View style={styles.container}>
      <AppText>{label}</AppText>
      <View style={styles.counter}>
        <RoundButton
          icon="minus-circle"
          disabled={disabled}
          onPress={() => {
            setValue(value > initialValue ? value - 1 : initialValue);
          }}
        />
        {/* <AppText style={styles.counterValue}>{value.toString()}</AppText> */}
        <TextInput
          style={styles.counterValue}
          value={value && value.toString()}
          onChangeText={(x) => setValue(parseInt(x))}
          keyboardType={"number-pad"}
          maxLength={2}
          onBlur={() => !value && setValue(initialValue)}
        />
        <RoundButton
          icon="plus-circle"
          onPress={() => {
            setValue(value + 1);
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
    padding: 10,
  },
  counterValue: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    fontSize: 18,
  },
});
