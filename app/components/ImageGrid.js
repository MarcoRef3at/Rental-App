import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Vibration,
  ImageBackground,
} from "react-native";
import GridView from "react-native-draggable-gridview";
import { useFocusEffect } from "@react-navigation/native";

export default function ImageGrid({ images }) {
  const [data, setData] = useState(["1"]);

  useFocusEffect(
    React.useCallback(() => {
      let uris = [];
      images &&
        images.map((image) => {
          // console.log("image:", image.uri);
          uris.push(image.uri);
        });
      setData(uris);
    }, [images])
  );

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
          style={{ height: "100%", width: "100%" }}
          source={{ uri: item }}
        >
          {index == 0 && <Text style={styles.coverPhoto}>COVER PHOTO</Text>}
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
          console.log("data:", items);
        }}
      />
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
  coverPhoto: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
});
