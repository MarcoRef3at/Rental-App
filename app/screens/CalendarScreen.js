import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import FormScreen from "../components/FormScreen";
import routes from "../navigation/routes";
import AppCalendar from "./../components/Calendar";

const CalendarScreen = ({ navigation, route }) => {
  return (
    <FormScreen
      header={"Manage your calendar"}
      subheader={"Select dates to block or unblock"}
      onSubmit={() => navigation.navigate(routes.PRICE)}
    >
      <AppCalendar calendarAvailablilty={route.params.calendarAvailablilty} />
    </FormScreen>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({});
