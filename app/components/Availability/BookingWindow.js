import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import defaultStyles from "../../config/styles";
import AppFormPicker from "../AppFormPicker";
import AppText from "../Text";

const BookingWindow = () => {
  const [advanceNotice, setAdvanceNotice] = useState({
    ID: 1,
    Nm: "At least 1 day's notice",
  });
  const [reservationRequest, setReservationRequest] = useState();
  const [availablity, setAvailablity] = useState();
  const response = [
    {
      ID: 0,
      Nm: "Same Day",
    },
    {
      ID: 1,
      Nm: "At least 1 day's notice",
    },
    {
      ID: 2,
      Nm: "At least 2 day's notice",
    },
    {
      ID: 3,
      Nm: "At least 3 days' notice",
    },
    {
      ID: 4,
      Nm: "At least 7 days' notice",
    },
  ];

  const rsvrqst = [
    {
      ID: 0,
      Nm: "Yes",
    },
    {
      ID: 1,
      Nm: "No",
    },
  ];
  const rsvtm = [
    {
      ID: 0,
      Nm: "6:00 AM",
    },
    {
      ID: 1,
      Nm: "7:00 AM",
    },
    {
      ID: 9,
      Nm: "Anytime",
    },
  ];
  const availabliltyWindow = [
    {
      ID: 0,
      Nm: "All Future Dates",
    },
    {
      ID: 1,
      Nm: "12 months in advance",
    },
    {
      ID: 3,
      Nm: "9 months in advance",
    },
    {
      ID: 4,
      Nm: "6 months in advance",
    },
    {
      ID: 5,
      Nm: "3 months in advance",
    },
    {
      ID: 6,
      Nm: "Dates unavailable by default",
    },
  ];

  return (
    <View>
      <AppText style={defaultStyles.textHeader2}>Booking window</AppText>

      <AppFormPicker
        items={response}
        name="category"
        selectedItem={advanceNotice}
        onSelectItem={(item) => {
          setAdvanceNotice(item);
        }}
        header={"Advance notice"}
        subheader={"How much notice do you need before a gurest arrives?"}
      />

      <AppFormPicker
        items={advanceNotice.ID == 0 ? rsvtm : rsvrqst}
        name="category"
        selectedItem={reservationRequest}
        onSelectItem={(item) => {
          setReservationRequest(item);
        }}
        header={
          advanceNotice.ID == 0
            ? "Same day cut-off time"
            : "Reservation requests"
        }
        subheader={
          advanceNotice.ID == 0
            ? "Same day requests after this time will be blocked"
            : `Without ${advanceNotice.ID} ${
                advanceNotice.ID == 1 ? `day's` : `days'`
              } notice, can a guest still send a reservation request?`
        }
      />

      <AppFormPicker
        items={availabliltyWindow}
        name="availabliltyWindow"
        selectedItem={availablity}
        onSelectItem={(item) => {
          setAvailablity(item);
        }}
        header={"Availabilty window"}
        subheader={"How far into the future can guests book?"}
      />
    </View>
  );
};

export default BookingWindow;

const styles = StyleSheet.create({});
