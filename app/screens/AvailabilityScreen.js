import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppCalendar from "./../components/Calendar";
import FormScreen from "./../components/FormScreen";
import BookingWindow from "../components/Availability/BookingWindow";
import CheckIn from "../components/Availability/CheckIn";
import { ScrollView } from "react-native-gesture-handler";
import TripLength from "../components/Availability/TripLength";
import routes from "../navigation/routes";

const AvailabilityScreen = ({ navigation }) => {
  return (
    <FormScreen
      header={"Availability"}
      subheader={""}
      onSubmit={() => {
        navigation.navigate(routes.CALENDAR);
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <BookingWindow />
        <CheckIn />
        <TripLength />
      </ScrollView>
    </FormScreen>
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
