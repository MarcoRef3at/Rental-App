import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import AppButton from "../components/Button";
import FormScreen from "../components/FormScreen";

import * as ImagePicker from "expo-image-picker";

import Test from "./../components/Test";
import ImageGrid from "../components/ImageGrid";

const PhotosScreen = ({ navigation, route }) => {
  const [photos, setphotos] = useState([]);
  useEffect(() => {
    console.log("photos:", photos);
    return () => {};
  }, [photos]);

  const addPhoto = (newPhotos) => {
    let previous = photos;
    let allPhotos = previous.concat(newPhotos);
    setphotos(allPhotos);
  };

  useEffect(() => {
    const { params } = route;
    if (params) {
      const { photos } = params;
      console.log("photozz:", photos);
      if (photos) addPhoto(photos);
      delete params.photos;
    }
  }, [route]);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) addPhoto([result]);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);
  return (
    <FormScreen
      header="Add photos to your listing"
      subheader="Photos help guests imagine staying in your place. You can start with one and add more after you publish"
    >
      <AppButton
        title="Add Photos"
        onPress={() => {
          console.log("Add Photos");
          selectImage();
        }}
      />

      <AppButton
        title={`Add Photos ${photos.length}`}
        onPress={() => {
          navigation.navigate("ImageBrowser", { goBack: "Photos" });
        }}
      />

      <ImageGrid images={photos} />
    </FormScreen>
  );
};

export default PhotosScreen;

const styles = StyleSheet.create({});
