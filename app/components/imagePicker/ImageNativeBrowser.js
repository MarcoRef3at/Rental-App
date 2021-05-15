import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "./../Button";
import * as ImagePicker from "expo-image-picker";
import routes from "../../navigation/routes";

const ImageNativeBrowser = ({ navigation }) => {
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        navigation.navigate(routes.PHOTOS, { photos: result });
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  useEffect(() => {
    requestPermission();
  }, []);
  return (
    <AppButton
      title="Mobile Browser"
      onPress={() => {
        selectImage();
      }}
    />
  );
};

export default ImageNativeBrowser;

const styles = StyleSheet.create({});
