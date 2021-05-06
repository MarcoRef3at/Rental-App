import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function RoundButton({
  onPress,
  icon = "plus-circle",
  disabled = false,
  family = "MaterialCommunityIcons",
}) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
        style={[
          styles.container,
          { backgroundColor: disabled ? colors.disabled : colors.primary },
        ]}
      >
        {family == "MaterialCommunityIcons" && (
          <MaterialCommunityIcons name={icon} color={colors.white} size={40} />
        )}
        {family == "MaterialIcons" && (
          <MaterialIcons name={icon} color={colors.white} size={40} />
        )}
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
