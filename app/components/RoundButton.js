import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Feather,
} from "@expo/vector-icons";

import colors from "../config/colors";

function RoundButton({
  onPress,
  icon = "plus-circle",
  disabled = false,
  family = "MaterialCommunityIcons",
  backgroundColor = colors.primary,
  color = colors.white,
}) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
        style={[
          styles.container,
          { backgroundColor: disabled ? colors.disabled : backgroundColor },
        ]}
      >
        {family == "MaterialCommunityIcons" && (
          <MaterialCommunityIcons name={icon} color={color} size={40} />
        )}
        {family == "MaterialIcons" && (
          <MaterialIcons name={icon} color={color} size={40} />
        )}
        {family == "AntDesign" && (
          <AntDesign name={icon} color={color} size={40} />
        )}
        {family == "Feather" && <Feather name={icon} color={color} size={40} />}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RoundButton;
