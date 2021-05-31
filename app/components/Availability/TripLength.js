import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import defaultStyles from "../../config/styles";
import AppFormPicker from "../AppFormPicker";
import FormChecker from "../form/FormChecker";
import FormCounter from "../form/FormCounter";
import AppText from "../Text";
import AppTextInput from "./../TextInput";
import AppButton from "./../Button";
import FormSingleChecker from "../form/FormSingleChecker";

const TripLength = () => {
  let items = [
    {
      ID: 1,
      Nm: "Manually review and approve reservation requests",
      value: true,
    },
    { ID: 2, Nm: "Don't allow reservation requests", value: true },
  ];

  const [minimumStay, setMinimumStay] = useState(1);
  const [maximumStay, setMaximumStay] = useState(1);
  const [reservationRequest1, setReservationRequest1] = useState(true);
  const [reservationRequest2, setReservationRequest2] = useState(false);

  return (
    <View>
      <AppText style={defaultStyles.textHeader2}>Trip length</AppText>

      <FormCounter
        label={"Minimum stay (nights)"}
        value={minimumStay}
        setValue={(x) => setMinimumStay(x)}
      />
      <FormCounter
        label={"Maximum stay (nights)"}
        value={maximumStay}
        setValue={(x) => setMaximumStay(x)}
      />

      <AppText style={defaultStyles.textHeader3}>
        For stays longer than {maximumStay} night{maximumStay > 1 && "s"}
      </AppText>

      <FormSingleChecker
        label="Manually review and approve reservation requests"
        value={reservationRequest1}
        setValue={(newValue) => {
          setReservationRequest1(newValue);
          setReservationRequest2(!newValue);
        }}
      />
      <FormSingleChecker
        label="Don't allow reservation requests"
        value={reservationRequest2}
        setValue={(newValue) => {
          setReservationRequest2(newValue);
          setReservationRequest1(!newValue);
        }}
      />
    </View>
  );
};

export default TripLength;

const styles = StyleSheet.create({});
