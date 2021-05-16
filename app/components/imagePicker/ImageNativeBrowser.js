import React, { useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import AppButton from "./../Button";
import * as ImagePicker from "expo-image-picker";
import routes from "../../navigation/routes";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import colors from "../../config/colors";
const { width } = Dimensions.get("window");
const ImageNativeBrowser = ({ navigation, addImageToList }) => {
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        addImageToList(result);
      }
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };
  const cameraCapture = async () => {
    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) {
        addImageToList(result);
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
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
      }}
    >
      <TouchableWithoutFeedback onPress={cameraCapture}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            color={colors.medium}
            name="camera"
            size={40}
          />
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={selectImage}>
        <View style={styles.container}>
          <FontAwesome5 color={colors.medium} name="file-image" size={40} />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    justifyContent: "center",
    marginVertical: 10,
    overflow: "hidden",

    width: width / 3,
    height: width / 3,
    marginHorizontal: 10,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageNativeBrowser;
