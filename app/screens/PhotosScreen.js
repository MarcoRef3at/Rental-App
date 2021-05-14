import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Button,
  Text,
  View,
  ScrollView,
} from "react-native";
import AppButton from "../components/Button";
import FormScreen from "../components/FormScreen";
import ImageInput from "../components/ImageInput";
import ImageInputList from "../components/ImageInputList";
import * as ImagePicker from "expo-image-picker";
// import ImageBrowser from "./../components/imagePicker.js/ImageBrowser";
import AddPhotoModal from "./../components/AddPhoto";
import Test from "./../components/Test";

const PhotosScreen = ({ navigation, route }) => {
  const [photos, setphotos] = useState([]);
  const renderImage = (item, i) => {
    return (
      <Image
        style={{ height: 100, width: 100 }}
        source={{ uri: item.uri }}
        key={i}
      />
    );
  };
  useEffect(() => {
    const { params } = route;
    // console.log("params:", params);
    if (params) {
      const { photos } = params;
      if (photos) setphotos(photos);
      delete params.photos;
    }
  }, [route]);

  const [imageUri, setImageUri] = useState();
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
      if (!result.cancelled) setImageUri(result.uri);
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
      {/* <AppButton
        title="Add Photos"
        onPress={() => {
          console.log("Add Photos");
          selectImage();
        }}
      /> */}
      <AppButton
        title={`Add Photos ${photos.length}`}
        onPress={() => {
          navigation.navigate("ImageBrowser", { goBack: "Photos" });
        }}
      />
      {/* {photos.map((item, i) => renderImage(item, i))} */}

      {/* <View style={{ borderWidth: 2, borderColor: "red" }}> */}
      <Test images={photos} />
      {/* </View> */}
      {/* <AddPhotoModal
        modalVisible={modalVisible}
        setModalVisible={(value) => setModalVisible(value)}
      /> */}
      <Image source={{ uri: imageUri }} style={styles.image} />
      {/* <ImageInput />
      <ImageInputList /> */}
      {/* <ImageBrowser max={10} onChange={(x) => console.log(x)} /> */}
    </FormScreen>
  );
};

export default PhotosScreen;

const styles = StyleSheet.create({
  image: {
    height: "50%",
    width: "50%",
  },
});
