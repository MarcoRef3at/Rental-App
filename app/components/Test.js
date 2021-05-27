import moment from "moment";
import React, { Component, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

const Test = () => {
  const [selected, setSelected] = useState([]);
  const [value, setValue] = useState(false);
  const onDateChange = (date, type) => {
    date = date.toString();
    let dates = selected;
    // If Found >> Remove
    if (selected.includes(date)) {
      let index = dates.indexOf(date);
      if (index !== -1) {
        dates.splice(index, 1);
      }
    } else {
      // If Not Found >> Add
      dates.push(date);
    }
    setSelected(dates);
  };

  const minDate = new Date(2021, 1, 3); // Today
  const maxDate = new Date(2021, 8, 3);

  return (
    <View style={styles.container}>
      {/* <Button title="test" onPress={() => setValue(!value)} /> */}
      <CalendarPicker
        // allowRangeSelection={true}
        firstDay={6}
        minDate={minDate}
        maxDate={maxDate}
        todayBackgroundColor="#f2e6ff"
        // selectedDayColor={value ? "red" : "orange"}
        selectedDayTextColor="#FFFFFF"
        // enableDateChange={false}
        onDateChange={(date, type) => {
          onDateChange(date);
        }}
      />
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 100,
  },
});
