import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { StaticCollage } from "react-native-images-collage";
import colors from "../config/colors";
import AppText from "./Text";
const CollagePhotos = () => {
  const photos = [
    "https://picsum.photos/400",
    "https://picsum.photos/400",
    "https://picsum.photos/400",
    "https://picsum.photos/400",
    "https://picsum.photos/400",
    "https://picsum.photos/400",
  ];

  return (
    <View>
      <AppText style={{ paddingTop: 30 }}>Your Listing</AppText>
      <View style={styles.card}>
        <View style={styles.cardContainer}>
          <StaticCollage
            width={400}
            height={200}
            images={photos}
            matrix={[1, 2]}
            containerStyle={{
              width: "100%",
            }}
            imageStyle={{
              borderColor: colors.white,
              borderWidth: 2,
            }}
          />
          <View style={styles.cardContainerText}>
            <AppText>Entire Place</AppText>
            <AppText>List Name</AppText>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log("pressed");
          }}
          style={styles.cardFooter}
        >
          <AppText>Preview List</AppText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CollagePhotos;

const styles = StyleSheet.create({
  card: {
    borderColor: "white",
    borderWidth: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardContainer: {
    borderBottomColor: colors.medium,
    borderBottomWidth: 1,
  },
  cardContainerText: {
    padding: 10,
  },
  cardFooter: {
    padding: 10,
    alignItems: "center",
  },
});
