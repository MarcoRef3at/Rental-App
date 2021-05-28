import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppCalendar from "./../components/Calendar";

const AvailabilityScreen = () => {
  return (
    <View style={styles.container}>
      <AppCalendar />
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
