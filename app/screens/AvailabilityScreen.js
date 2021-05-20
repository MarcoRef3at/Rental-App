import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import FormScreen from "../components/FormScreen";
import CalendarPicker from "react-native-calendar-picker";
import colors from "../config/colors";
import moment from "moment";
const AvailabilityScreen = ({ allBlocked = true }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const onDateChange = (date) => {
    let previousDate = selectedDate != null ? selectedDate : [];
    let index;
    if (previousDate.toString().includes(date.toString())) {
      previousDate.map((moment, i) => {
        if (JSON.stringify(moment._d) == JSON.stringify(date._d)) {
          index = i;
        }
      });
      previousDate = previousDate.filter((d, i) => i != index);
    } else {
      previousDate.push(date);
    }
    setSelectedDate(previousDate);
    console.log("previousDate:", previousDate);
  };

  const customDatesStylesCallback = (date) => {
    if (allBlocked) {
      if (
        selectedDate != null &&
        selectedDate.toString().includes(date.toString())
      ) {
        return unblockedStyle;
      } else {
        return blockedStyle;
      }
    } else {
      if (
        selectedDate != null &&
        selectedDate.toString().includes(date.toString())
      ) {
        return blockedStyle;
      } else {
        return unblockedStyle;
      }
    }
  };

  return (
    <View style={styles.container}>
      <CalendarPicker
        firstDay={6}
        minDate={new Date()}
        disabledDatesTextStyle={allBlocked && styles.blockedText}
        restrictMonthNavigation
        // dayShape={"square"}
        onDateChange={onDateChange}
        customDatesStyles={customDatesStylesCallback}
        selectedDayStyle={customDatesStylesCallback}
        textStyle={{ fontWeight: "bold" }}
      />
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
  blocked: {
    backgroundColor: "#cccccc",
  },
  blockedText: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  unblocked: {
    backgroundColor: "white",
  },
  unblockedText: {
    color: "black",
    fontWeight: "bold",
  },
});

const blockedStyle = { style: styles.blocked, textStyle: styles.blockedText };
const unblockedStyle = {
  style: styles.unblocked,
  textStyle: styles.unblockedText,
};
