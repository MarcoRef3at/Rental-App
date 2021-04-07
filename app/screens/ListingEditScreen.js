import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
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

const validationSchema = Yup.object().shape({
  type: Yup.object().required().nullable().label("Type"),
  category: Yup.object().required().nullable().label("Category"),
});

const response = {
  LstTp: [
    {
      ID: 1,
      Nm: "no1",
    },
    {
      ID: 2,
      Nm: "no2",
    },
  ],
  LstCt: [
    {
      ID: 1,
      Nm: "no3",
    },
  ],
};

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
        }}
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <AppText style={defaultStyles.textHeader}>
          Which of These Sounds most like your place?
        </AppText>
        <Picker
          items={getTypeAndCategory.data.LstTp}
          name="type"
          numberOfColumns={1}
          // PickerItemComponent={CategoryPickerItem}
          placeholder="Choose a property type"
          width="100%"
        />

        <Picker
          items={getTypeAndCategory.data.LstCt}
          name="category"
          numberOfColumns={1}
          // PickerItemComponent={CategoryPickerItem}
          placeholder="Confirm the type of place you have"
          width="100%"
        />

        <SubmitButton title="Next" />
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
