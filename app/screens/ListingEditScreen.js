import React, { useEffect, useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import * as Yup from "yup";

import { Form, FormPicker as Picker, SubmitButton } from "../components/forms";
import defaultStyles from "./../config/styles";
import FormCounter from "./../components/forms/FormCounter";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import useApi from "./../hooks/useApi";
import AppText from "./../components/Text";

const validationSchema = Yup.object().shape({
  // type: Yup.object().required().nullable().label("Type"),
  // category: Yup.object().required().nullable().label("Category"),
});
const bathroomNumberPlaceholder = "Bathrooms for guests";
const bedroomNumberPlaceholder = "Bedrooms for guests";
const bedTypesPlaceholder = "Common spaces";
const categoryPlaceholder = "Confirm the type of place you have";
const guestNumberPlaceholder = "Number of Guests";
const typePlaceholder = "Choose a property type";

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

function ListingEditScreen({ navigation }) {
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

  const initialValues = {
    type: null,
    category: null,
    guestNumber: 1,
    bedroomNumber: 1,
    bathroomNumber: 1,
    ...bedTypeInit,
  };

  const [formValues, setFormValues] = useState(initialValues);

  const belongsToBedTypes = (name) =>
    Object.keys(bedTypeInit).find((element) => element == name);

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log("submit", values);
          navigation.navigate(routes.LOCATION);
        }}
        validationSchema={validationSchema}
      >
        <AppText style={defaultStyles.textHeader}>
          Which of These Sounds most like your place?
        </AppText>
        <ScrollView showsVerticalScrollIndicator={false}>
          <FormCounter label={guestNumberPlaceholder} type="guestNumber" />
          <Picker
            items={getTypeAndCategory.data.LstTp}
            name="type"
            // PickerItemComponent={CategoryPickerItem}
            placeholder={typePlaceholder}
            width="100%"
            onChange={(values) => {
              setFormValues(values);
            }}
          />

          <Picker
            items={getTypeAndCategory.data.LstCt}
            name="category"
            // PickerItemComponent={CategoryPickerItem}
            placeholder={categoryPlaceholder}
            width="100%"
            onChange={(values) => {
              setFormValues(values);
            }}
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
            onChange={(values) => {
              setFormValues(values);
            }}
          />

          {Object.keys(formValues).map((name) => {
            if (belongsToBedTypes(name) != undefined) {
              return (
                formValues[name] != 0 && (
                  <AppText style={styles.bedTypes}>
                    {belongsToBedTypes(name)} : {formValues[name]}
                  </AppText>
                )
              );
            }
          })}

          <View style={{ margin: 50, borderColor: "red" }} />
        </ScrollView>

        <SubmitButton style={defaultStyles.submitButton} title="Next" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  bedTypes: {
    flexDirection: "column",
    marginVertical: 10,
  },
  submitButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "30%",
  },
});
export default ListingEditScreen;
