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

export default function ImageGrid({ images }) {
  const [data, setData] = useState(["null"]);
  const updateGrid = () => {
    let uris = [];
    images &&
      images.map((image) => {
        uris.push(image.uri);
      });
    console.log("uris.length:", uris.length);
    setData(uris);
    console.log("uris.length:", uris.length);
  };

  useFocusEffect(
    React.useCallback(() => {
      updateGrid();
    }, [images])
  );

  useEffect(() => {
    // updateGrid();
    console.log("====================================");
    console.log("images change");
    console.log("====================================");
  }, [images]);

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
          <RoundButton
            icon="delete"
            onPress={() => console.log("delete", index)}
          />
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
    width: "65%",
    backgroundColor: "#000000a0",
  },
});
