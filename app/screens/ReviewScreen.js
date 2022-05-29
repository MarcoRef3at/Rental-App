import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FormScreen from "./../components/FormScreen";
import CollagePhotos from "./../components/CollagePhotos";
import routes from "../navigation/routes";

const ReviewScreen = ({ navigation }) => {
  return (
    <FormScreen
      header={"Okay, now let's review your settings"}
      subheader={"You can make changes to your listing after you publish."}
      submitBottonTitle={"Finish"}
      onSubmit={() => navigation.navigate(routes.FINISH)}
    >
      <CollagePhotos />
    </FormScreen>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({});
