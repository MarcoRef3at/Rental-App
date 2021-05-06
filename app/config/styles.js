import { Platform } from "react-native";

import colors from "./colors";

const defaultStyles = {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    justifyContent: "center",
    width: "100%",
  },
  textHeader: {
    color: colors.dark,
    fontSize: 30,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "bold",
  },
  modalHeader: {
    color: colors.dark,
    padding: 20,
    fontSize: 20,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "bold",
  },
  submitButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "30%",
  },
};

export default defaultStyles;
