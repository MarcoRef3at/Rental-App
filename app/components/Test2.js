import React, { useState } from "react";
import moment from "moment";
import { Button, View } from "react-native";
import { Calendar, CalendarList } from "react-native-calendars";
import colors from "../config/colors";

const _format = "YYYY-MM-DD";
const _today = moment().format(_format);
const _maxDate = moment().add(1, "years").format(_format);
const Test2 = ({ allBlocked = false }) => {
  const [markedDates, setMarkedDates] = useState({});

  const onDaySelect = (day) => {
    const _selectedDay = moment(day.dateString).format(_format);
    let selected = true;

    // Already in marked dates, so reverse current marked state
    if (markedDates[_selectedDay]) {
      selected = !markedDates[_selectedDay].selected;
    }

    // Create a new object using object property spread since it should be immutable
    // Reading: https://davidwalsh.name/merge-objects

    const updatedMarkedDates = {
      ...markedDates,
      ...{ [_selectedDay]: { selected } },
    };
    // Triggers component to render again, picking up the new state
    setMarkedDates(updatedMarkedDates);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* <Button
        title="test"
        onPress={() => console.log("markedDates:", markedDates)}
      /> */}
      <CalendarList
        firstDay={6}
        minDate={_today}
        pastScrollRange={0}
        futureScrollRange={12}
        onDayPress={onDaySelect}
        markedDates={markedDates}
        theme={{
          selectedDayBackgroundColor: allBlocked ? colors.primary : "white",
          selectedDayTextColor: allBlocked ? "#ffffff" : "#d9e1e8",
          dayTextColor: allBlocked ? "#d9e1e8" : "#2d4150",
          textDisabledColor: "#d9e1e8",
        }}
      />
    </View>
  );
};

export default Test2;
