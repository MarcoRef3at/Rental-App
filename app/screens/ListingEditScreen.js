import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Button, View, ScrollView } from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";
import useApi from "./../hooks/useApi";
import listingsApi from "../api/listings";
import AppText from "./../components/Text";
import defaultStyles from "./../config/styles";
import AppButton from "./../components/Button";
import RoundButton from "./../components/RoundButton";
import FormCounter from "./../components/forms/FormCounter";

const validationSchema = Yup.object().shape({
  type: Yup.object().required().nullable().label("Type"),
  category: Yup.object().required().nullable().label("Category"),
});
const typePlaceholder = "Choose a property type";
const categoryPlaceholder = "Confirm the type of place you have";
const guestNumberPlaceholder = "Number of Guests";
const bedroomNumberPlaceholder = "Bedrooms for guests";
const bathroomNumberPlaceholder = "Beds for guests";

// const response = {
//   LstTp: [
//     {
//       ID: 1,
//       Nm: "no1",
//     },
//     {
//       ID: 2,
//       Nm: "no2",
//     },
//   ],
//   LstCt: [
//     {
//       ID: 1,
//       Nm: "no3",
//     },
//   ],
// };

function ListingEditScreen() {
  const location = useLocation();
  const getTypeAndCategory = useApi(listingsApi.getListTypeAndCategory);

  useEffect(() => {
    getTypeAndCategory.request();
  }, []);
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          type: null,
          category: null,
          guestNumber: 1,
          bedroomNumber: 1,
          bathroomNumber: 1,
        }}
        onSubmit={(values) => {
          console.log(values);
          // navigation.navigate(routes.MESSAGES)
        }}
        validationSchema={validationSchema}
      >
        <AppText style={defaultStyles.textHeader}>
          Which of These Sounds most like your place?
        </AppText>
        <ScrollView>
          <Picker
            items={getTypeAndCategory.data.LstTp}
            name="type"
            numberOfColumns={1}
            // PickerItemComponent={CategoryPickerItem}
            placeholder={typePlaceholder}
            width="100%"
          />

          <Picker
            items={getTypeAndCategory.data.LstCt}
            name="category"
            numberOfColumns={1}
            // PickerItemComponent={CategoryPickerItem}
            placeholder={categoryPlaceholder}
            width="100%"
          />

          <AppText style={defaultStyles.textHeader}>
            How many guests can stay?
          </AppText>

          <FormCounter title={guestNumberPlaceholder} type="guestNumber" />
          <FormCounter title={bedroomNumberPlaceholder} type="bedroomNumber" />
          <FormCounter
            title={bathroomNumberPlaceholder}
            type="bathroomNumber"
          />

          <AppText style={defaultStyles.textHeader}>
            What kind of beds are there?
          </AppText>
          <Picker
            items={getTypeAndCategory.data.LstTp}
            name="type"
            numberOfColumns={1}
            // PickerItemComponent={CategoryPickerItem}
            placeholder={typePlaceholder}
            width="100%"
          />
        </ScrollView>
        <SubmitButton
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "30%",
          }}
          title="Next"
        />
      </Form>
      {/* <View style={{ margin: 35, borderColor: "red" }} /> */}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
