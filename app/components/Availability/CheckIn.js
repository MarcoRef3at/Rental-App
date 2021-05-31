import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import defaultStyles from "../../config/styles";
import AppFormPicker from "../AppFormPicker";
import AppText from "../Text";

const CheckIn = () => {
  const [arriveAfter, setArriveAfter] = useState();
  const [arriveBefore, setArriveBefore] = useState();
  const [leaveBefore, setLeaveBefore] = useState();
  const arrive_after = [
    {
      ID: 0,
      Nm: "Flexible",
    },
    {
      ID: 1,
      Nm: "8:00 AM",
    },
    {
      ID: 2,
      Nm: "9:00 AM",
    },
    {
      ID: 3,
      Nm: "10:00 AM",
    },
    {
      ID: 4,
      Nm: "11:00 AM",
    },
    {
      ID: 5,
      Nm: "12:00 AM",
    },
    {
      ID: 6,
      Nm: "1:00 PM",
    },
    {
      ID: 9,
      Nm: "1:00 AM (Next Day)",
    },
  ];

  const arrive_before = [
    {
      ID: 0,
      Nm: "Flexible",
    },
    {
      ID: 1,
      Nm: "9:00 AM",
    },
    {
      ID: 2,
      Nm: "10:00 AM",
    },
    {
      ID: 3,
      Nm: "11:00 AM",
    },
    {
      ID: 4,
      Nm: "12:00 AM",
    },
    {
      ID: 5,
      Nm: "1:00 PM",
    },
    {
      ID: 6,
      Nm: "2:00 PM",
    },
    {
      ID: 9,
      Nm: "1:00 AM (Next Day)",
    },
    {
      ID: 10,
      Nm: "2:00 AM (Next Day)",
    },
  ];
  const leave_before = [
    {
      ID: 0,
      Nm: "12:00 AM",
    },
    {
      ID: 1,
      Nm: "1:00 AM",
    },
    {
      ID: 2,
      Nm: "2:00 AM",
    },
    {
      ID: 3,
      Nm: "3:00 AM",
    },
    {
      ID: 4,
      Nm: "4:00 AM",
    },
    {
      ID: 5,
      Nm: "5:00 AM",
    },
    {
      ID: 6,
      Nm: "6:00 AM",
    },
    {
      ID: 9,
      Nm: "11:00 PM",
    },
  ];

  return (
    <View>
      <AppText style={defaultStyles.textHeader2}>Check-in</AppText>

      <AppFormPicker
        items={arrive_after}
        name="category"
        selectedItem={arriveAfter}
        onSelectItem={(item) => {
          setArriveAfter(item);
        }}
        header={"Arrive after"}
        placeholder={"Select a time"}
      />

      <AppFormPicker
        items={arrive_before}
        name="category"
        selectedItem={arriveBefore}
        onSelectItem={(item) => {
          setArriveBefore(item);
        }}
        header={"Arrive before"}
        placeholder={"Select a time"}
      />

      <AppFormPicker
        items={leave_before}
        name="leave_before"
        selectedItem={leaveBefore}
        onSelectItem={(item) => {
          setLeaveBefore(item);
        }}
        header={"Leave before"}
        placeholder={"Select a time"}
      />
    </View>
  );
};

export default CheckIn;

const styles = StyleSheet.create({});
