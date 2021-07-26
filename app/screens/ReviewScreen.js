import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FormScreen from "./../components/FormScreen";
import CollagePhotos from "./../components/CollagePhotos";

const ReviewScreen = () => {
  return (
    <FormScreen
      header={"Okay, now let's review your settings"}
      subheader={"You can make changes to your listing after you publish."}
    >
      <CollagePhotos />
    </FormScreen>
  );
};

export default ReviewScreen;

const styles = StyleSheet.create({});
