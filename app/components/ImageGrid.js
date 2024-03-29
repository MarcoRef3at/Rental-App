import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Vibration,
  ImageBackground,
} from "react-native";
import GridView from "react-native-draggable-gridview";
import { useFocusEffect } from "@react-navigation/native";
import RoundButton from "./RoundButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Spacer from "./Spacer";

export default function ImageGrid({ images, photosLength, deletePhoto }) {
  // Carry string only no objects
  const [data, setData] = useState(["null"]);

  const updateGrid = (newGrid = images) => {
    let uris = [];
    newGrid &&
      newGrid.map((image) => {
        uris.push(image.uri);
      });
    setData(uris);
  };

  useFocusEffect(
    React.useCallback(() => {
      updateGrid();
    }, [images])
  );

  // useEffect(() => {
  //   updateGrid();
  // }, [photosLength]);

  const onPressDelete = (item) => setData(data.filter((v) => v != item));

  const renderItem = (item, index) => {
    return (
      <View
        style={{
          flex: 1,
          margin: 5,
          justifyContent: "center",
          backgroundColor: "gray",
        }}
      >
        <ImageBackground
          style={{ flex: 1, height: "100%", width: "100%" }}
          source={{ uri: item }}
        >
          {index == 0 && (
            <Text style={styles.coverPhotoTitle}>COVER PHOTO</Text>
          )}
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              alignItems: "flex-end",
              margin: 5,
            }}
          >
            <Text
              style={[
                styles.coverPhotoTitle,
                { width: "10%", position: "absolute", bottom: 0 },
              ]}
            >
              {index}
            </Text>
            <RoundButton
              icon={"delete"}
              size={30}
              onPress={() => {
                onPressDelete(item);
                deletePhoto(index);
              }}
            />
          </View>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <GridView
        data={data}
        numColumns={2}
        renderItem={renderItem}
        onBeginDragging={() => Vibration.vibrate(30)}
        onReleaseCell={(items) => {
          setData(items);
          Vibration.vibrate(10);
        }}
        // locked={locked}
        // renderLockedItem={renderLockedItem}
      />
      <Spacer />
      <Spacer />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 10,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  coverPhotoTitle: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    width: "65%",
    backgroundColor: "#000000a0",
    borderRadius: 20,
    margin: 5,
    marginTop: 10,
  },
});
