import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/Button";
import FormScreen from "../components/FormScreen";
import ImageInput from "../components/ImageInput";
import ImageInputList from "../components/ImageInputList";
import * as ImagePicker from "expo-image-picker";
// import ImageBrowser from "./../components/imagePicker.js/ImageBrowser";
import AddPhotoModal from "./../components/AddPhoto";

const PhotosScreen = ({ navigation }) => {
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

  const [modalVisible, setModalVisible] = useState(false);

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
        title="Add Photo"
        onPress={() => {
          console.log("Add Photo");
          setModalVisible(true);
          navigation.navigate("Test");
        }}
      />
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
