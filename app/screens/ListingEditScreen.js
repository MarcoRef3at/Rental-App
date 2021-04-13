import React, { useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import * as Yup from "yup";

import { Form, FormPicker as Picker, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import useLocation from "../hooks/useLocation";
import useApi from "./../hooks/useApi";
import listingsApi from "../api/listings";
import AppText from "./../components/Text";
import defaultStyles from "./../config/styles";
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
const bedTypesPlaceholder = "Common spaces";
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
  // const location = useLocation();
  const getTypeAndCategory = useApi(listingsApi.getListTypeAndCategory);

  const bedTypes = {
    bdtp: [
      {
        ID: 4,
        Nm: "Single",
      },
      {
        ID: 5,
        Nm: "Double",
      },
      {
        ID: 6,
        Nm: "Triple",
      },
    ],
  };
  let bedTypeInit = {};
  bedTypes[Object.keys(bedTypes)[0]].map((x) => (bedTypeInit[x.Nm] = 0));

  useEffect(() => {
    getTypeAndCategory.request();
  }, []);

  // console.log("====================================");
  // console.log(Object.keys(bedTypeInit)[0]);
  // console.log(bedTypeInit[Object.keys(bedTypeInit)[0]]);
  // console.log("====================================");
  const initialValues = {
    type: null,
    category: null,
    guestNumber: 1,
    bedroomNumber: 1,
    bathroomNumber: 1,
    ...bedTypeInit,
  };

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log("submit", values);
          // navigation.navigate(routes.MESSAGES)
        }}
        validationSchema={validationSchema}
      >
        <AppText style={defaultStyles.textHeader}>
          Which of These Sounds most like your place?
        </AppText>
        <ScrollView>
          <FormCounter label={guestNumberPlaceholder} type="guestNumber" />
          <Picker
            items={getTypeAndCategory.data.LstTp}
            name="type"
            // PickerItemComponent={CategoryPickerItem}
            placeholder={typePlaceholder}
            width="100%"
          />

          <Picker
            items={getTypeAndCategory.data.LstCt}
            name="category"
            // PickerItemComponent={CategoryPickerItem}
            placeholder={categoryPlaceholder}
            width="100%"
          />

          <AppText style={defaultStyles.textHeader}>
            How many guests can stay?
          </AppText>

          <FormCounter label={guestNumberPlaceholder} type="guestNumber" />
          <FormCounter label={bedroomNumberPlaceholder} type="bedroomNumber" />
          <FormCounter
            label={bathroomNumberPlaceholder}
            type="bathroomNumber"
          />

          {/* Bed Types */}
          <AppText style={defaultStyles.textHeader}>
            What kind of beds are there?
          </AppText>
          <Picker
            items={bedTypes.bdtp}
            name="bedType.Double"
            PickerItemComponent={FormCounter}
            initialValue={0}
            placeholder={bedTypesPlaceholder}
            width="100%"
          />

          <View style={{ margin: 50, borderColor: "red" }} />
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
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
