import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

const Calendar1 = ({ allBlocked = true }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  let selectedDayStyle = allBlocked ? styles.blocked : styles.unblocked;
  let selectedDayTextStyle = allBlocked
    ? styles.blockedText
    : styles.unblockedText;

  const onDateChange = (date) => {
    currentDate = date;
    // console.log("date:", date);
    let previousDate = selectedDate != null ? selectedDate : [];
    let index;
    if (previousDate.toString().includes(date.toString())) {
      previousDate.map((moment, i) => {
        if (JSON.stringify(moment._d) == JSON.stringify(date._d)) {
          index = i;
        }
      });
      // Remove date
      previousDate = previousDate.filter((d, i) => i != index);
      selectedDayStyle = allBlocked ? styles.blocked : styles.unblocked;
      selectedDayTextStyle = allBlocked
        ? styles.blockedText
        : styles.unblockedText;
    } else {
      // Add date
      previousDate.push(date);
      selectedDayStyle = allBlocked ? styles.unblocked : styles.blocked;
      selectedDayTextStyle = allBlocked
        ? styles.unblockedText
        : styles.blockedText;
    }
    setSelectedDate(previousDate);
    console.log("Selected Dates:", previousDate);
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
        minDate={new Date("2021 - 05 - 02")}
        disabledDatesTextStyle={allBlocked && styles.blockedText}
        restrictMonthNavigation
        // dayShape={"square"}
        onDateChange={(l) => {
          console.log("l:", l);
          // onDateChange(l);
          // console.log("selectedDayTextStyle:", selectedDayTextStyle);
        }}
        customDatesStyles={customDatesStylesCallback}
        textStyle={{ fontWeight: "bold" }}
        selectedDayStyle={selectedDayStyle}
        selectedDayTextStyle={selectedDayTextStyle}
        allowRangeSelection
        allowBackwardRangeSelect
      />
    </View>
  );
};

export default Calendar1;

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
    fontWeight: "normal",
  },
  unblocked: {
    backgroundColor: "white",
  },
  unblockedText: {
    color: "black",
    fontWeight: "bold",
  },
  selected: {
    backgroundColor: "green",
  },
  selectedText: {
    color: "yellow",
    fontWeight: "bold",
  },
});

const blockedStyle = { style: styles.blocked, textStyle: styles.blockedText };
const unblockedStyle = {
  style: styles.unblocked,
  textStyle: styles.unblockedText,
};
const selected = {
  style: styles.selected,
  textStyle: styles.selectedText,
};
