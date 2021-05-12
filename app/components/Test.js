// Function
import React, { Component, useEffect, useState } from "react";
import { View, Text, Button, Image, ScrollView } from "react-native";

const Test = ({ navigation, route }) => {
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
  useEffect(() => {
    console.log("photos:", photos);
    // photos.map = (item) => {
    //   console.log("item", item);
    // };
  }, [photos]);
  return (
    <View style={{ flex: 1 }}>
      <Button
        title="Open image browser"
        onPress={() => {
          navigation.navigate("Test2");
        }}
      />
      <ScrollView>{photos.map((item, i) => renderImage(item, i))}</ScrollView>
    </View>
  );
};

export default Test;
