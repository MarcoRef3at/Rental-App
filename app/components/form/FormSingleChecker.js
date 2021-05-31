import React, { useState } from "react";
import { StyleSheet, View, CheckBox, TouchableOpacity } from "react-native";
import AppText from "./../Text";
import RoundButton from "./../RoundButton";
import colors from "../../config/colors";

const FormSingleChecker = ({ label, value, setValue }) => {
  const handleChange = () => {
    setValue(!value);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleChange()}>
        <AppText style={styles.label}>{label}</AppText>
        <View style={styles.counter}>
          {value ? (
            <RoundButton
              family={"AntDesign"}
              icon={"checkcircle"}
              backgroundColor={"white"}
              color={colors.primary}
              onPress={() => handleChange()}
            />
          ) : (
            <RoundButton
              family={"Feather"}
              icon={"circle"}
              backgroundColor={null}
              color={colors.primary}
              onPress={() => handleChange()}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FormSingleChecker;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingVertical: 15,
    paddingHorizontal: 10,
    // borderColor: "red",
    // borderWidth: 2,
  },
  label: {
    paddingTop: 7,
    width: "80%",
  },
  counter: {
    flexDirection: "row",
    position: "absolute",
    alignSelf: "flex-end",
  },
});
