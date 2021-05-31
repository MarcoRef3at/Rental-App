import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FormScreen from "../components/FormScreen";
import AppCalendar from "./../components/Calendar";

const CalendarScreen = () => {
  return (
    <FormScreen
      header={"Manage your calendar"}
      subheader={"Select dates to block or unblock"}
    >
      <AppCalendar allBlocked={false} />
    </FormScreen>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({});
