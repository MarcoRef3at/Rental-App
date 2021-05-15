import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import AppButton from "../components/Button";
import FormScreen from "../components/FormScreen";
import ImageGrid from "../components/ImageGrid";

const PhotosScreen = ({ navigation, route }) => {
  const [photos, setphotos] = useState([]);
  useEffect(() => {
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
      if (photos) addPhoto(photos);
      delete params.photos;
    }
  }, [route]);

  return (
    <FormScreen
      header="Add photos to your listing"
      subheader="Photos help guests imagine staying in your place. You can start with one and add more after you publish"
    >
      <AppButton
        title="Add Photos"
        onPress={() => {
          navigation.navigate("ImageBrowser", {
            goBack: "Photos",
            photos: photos,
          });
        }}
      />

      <ImageGrid images={photos} />
    </FormScreen>
  );
};

export default PhotosScreen;

const styles = StyleSheet.create({});
