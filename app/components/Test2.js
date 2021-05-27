import React, { useState } from "react";
import moment from "moment"; // 2.20.1
import { View } from "react-native"; // 0.0.1
import { Calendar } from "react-native-calendars"; // 1.16.1

const _format = "YYYY-MM-DD";
const _today = moment().format(_format);
const _maxDate = moment().add(15, "days").format(_format);
const Test2 = () => {
  let initialState = {
    [_today]: { disabled: true },
  };
  const [markedDates, setMarkedDates] = useState(initialState);

  const onDaySelect = (day) => {
    const _selectedDay = moment(day.dateString).format(_format);
    // console.log("markedDates:", markedDates);
    let selected = true;
    if (markedDates[_selectedDay]) {
      // Already in marked dates, so reverse current marked state
      selected = markedDates[_selectedDay].selected;
      console.log("selected:", selected);
    }

    // Create a new object using object property spread since it should be immutable
    // Reading: https://davidwalsh.name/merge-objects
    console.log("markedDates:", markedDates);
    const updatedMarkedDates = {
      ...markedDates,
      ...{ [_selectedDay]: { selected } },
    };
    console.log("updatedMarkedDates:", updatedMarkedDates);
    // Triggers component to render again, picking up the new state
    setMarkedDates(updatedMarkedDates);
  };
  return (
    <View style={{ flex: 1 }}>
      <Calendar
        // we use moment.js to give the minimum and maximum dates.
        minDate={_today}
        maxDate={_maxDate}
        // hideArrows={true}

        onDayPress={onDaySelect}
        markedDates={markedDates}
      />
    </View>
  );
};

export default Test2;
