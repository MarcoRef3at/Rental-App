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
        <Picker
          items={getTypeAndCategory.data.LstTp}
          name="type"
          numberOfColumns={1}
          // PickerItemComponent={CategoryPickerItem}
          placeholder="Type"
          width="50%"
        />

        <Picker
          items={getTypeAndCategory.data.LstCt}
          name="category"
          numberOfColumns={1}
          // PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
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
