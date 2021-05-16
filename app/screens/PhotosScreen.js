import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import AppButton from "../components/Button";
import FormScreen from "../components/FormScreen";
import ImageGrid from "../components/ImageGrid";
import defaultStyles from "./../config/styles";

const PhotosScreen = ({ navigation, route }) => {
  const [photos, setphotos] = useState([]);

  const addPhoto = (newPhotos) => {
    let previous = photos;
    let allPhotos = previous.concat(newPhotos);
    setphotos(allPhotos);
  };

  // Get Photos Array on every navigation
  useEffect(() => {
    const { params } = route;
    if (params) {
      const { photos } = params;
      if (photos) addPhoto(photos);
      delete params.photos;
    }
  }, [route]);

  // Header is Visable if no photos added
  let headerVisable = photos.length == 0;

  // Function to Delete Photo by index
  const deletePhoto = (index) => {
    let newPhotosArray = photos;
    newPhotosArray.splice(index, 1);
    setphotos(newPhotosArray);
    console.log("photos.length:", photos.length);
  };

  return (
    <FormScreen
      header="Add photos to your listing"
      subheader="Photos help guests imagine staying in your place. You can start with one and add more after you publish"
      headerVisable={headerVisable}
      subheaderVisable={headerVisable}
    >
      <AppButton
        style={defaultStyles.formButton}
        title="Add Photos"
        onPress={() => {
          navigation.navigate("ImageBrowser", {
            goBack: "Photos",
          });
        }}
      />
      <AppButton
        style={defaultStyles.formButton}
        title="test"
        onPress={() => {
          deletePhoto(0);
        }}
      />

      <ImageGrid images={photos} />
    </FormScreen>
  );
};

export default PhotosScreen;
