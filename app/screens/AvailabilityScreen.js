import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Test from "../components/Test";
import AppCalendar from "./../components/Calendar";
import Calendar1 from "./Calendar1";
import Test2 from "./../components/Test2";
const AvailabilityScreen = ({ allBlocked = true }) => {
  return (
    <View style={styles.container}>
      {/* <AppCalendar /> */}
      {/* <Test /> */}
      {/* <Calendar1 /> */}
      <Test2 />
    </View>
  );
};

export default AvailabilityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 100,
  },
});
