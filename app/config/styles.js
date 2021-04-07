import { Platform } from "react-native";

import colors from "./colors";

const defaultStyles = {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    justifyContent: "center",
  },
  textHeader: {
    color: colors.dark,
    fontSize: 30,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "bold",
  },
};

export default defaultStyles;
