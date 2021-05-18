import React from "react";
import { View, TouchableOpacity } from "react-native";
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
  size = 40,
}) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
        style={[
          {
            width: size,
            height: size,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          },
          { backgroundColor: disabled ? colors.disabled : backgroundColor },
        ]}
      >
        {family == "MaterialCommunityIcons" && (
          <MaterialCommunityIcons name={icon} color={color} size={size} />
        )}
        {family == "MaterialIcons" && (
          <MaterialIcons name={icon} color={color} size={size} />
        )}
        {family == "AntDesign" && (
          <AntDesign name={icon} color={color} size={size} />
        )}
        {family == "Feather" && (
          <Feather name={icon} color={color} size={size} />
        )}
      </View>
    </TouchableOpacity>
  );
}

export default RoundButton;
