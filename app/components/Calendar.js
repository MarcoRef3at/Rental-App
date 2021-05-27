import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";

const AppCalendar = () => {
  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    return year + "-" + month + "-" + date; //format: dd-mm-yyyy;
  };
  let selectStyle = {
    color: "green",
    disabled: true,
    endingDay: true,
    startingDay: true,
  };
  const marked = {
    "2021-05-27": selectStyle,
    "2021-05-29": selectStyle,
  };
  const [selected, setSelected] = useState(marked);

  const addToSelected = (day) => {
    let previous = selected;
    previous[day] = selectStyle;
    setSelected(previous);
  };

  useEffect(() => {
    console.log("selected:", selected);
  }, [selected]);

  return (
    <View>
      <CalendarList
        // markingType={"custom"}
        markedDates={selected}
        // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
        // markingType={"period"}
        // markedDates={{ [selected[1]]: { selected: true, marked: true } }}
        // markedDates={{
        //   "2021-05-30": customStyles.blocked,
        //   "2021-05-31": { disabled: true, disableTouchEvent: false },
        // }}
        pastScrollRange={0}
        // dayComponent={(date, state) => {
        //   console.log("state:", date);
        //   return (
        //     <Text
        //       style={{
        //         textAlign: "center",
        //         color: state === "disabled" ? "gray" : "black",
        //       }}
        //     >
        //       {date.day}
        //     </Text>
        //   );
        // }}
        // minDate={getCurrentDate}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => {
          addToSelected(day.dateString);
        }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => {
          console.log("selected day", day.dateString);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        // monthFormat={"yyyy MM"}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => {
          console.log("month changed", month);
        }}
        enableSwipeMonths={true}
      />
    </View>
  );
};

export default AppCalendar;

const styles = StyleSheet.create({});
const customStyles = {
  blocked: {
    customStyles: {
      container: {
        backgroundColor: "grey",
      },
      text: {
        textDecorationLine: "line-through",
        textDecorationStyle: "solid",
        fontWeight: "normal",
      },
    },
  },
};
