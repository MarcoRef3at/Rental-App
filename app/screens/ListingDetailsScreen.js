import React from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";
import AppText from "./../components/Text";
import defaultStyles from "./../config/styles";
import Icon from "./../components/Icon";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.image}
          source={{
            uri: `data:image/png;base64,${listing.Pto}`,
          }}
        />
        <View style={styles.detailsContainer}>
          <AppText style={defaultStyles.textHeader}>{listing.Nm}</AppText>
          <Text style={styles.price}>$199</Text>
          <AppText style={defaultStyles.textHeader3}>{listing.Dsc}</AppText>
          <View style={styles.userContainer}>
            <AppText style={defaultStyles.textHeader2}>
              What this place offers
            </AppText>

            <ListItem
              title="Kitchen"
              IconComponent={
                <Icon
                  name="silverware-fork-knife"
                  backgroundColor={colors.primary}
                />
              }
            />
            <ListItem
              title="Parking"
              IconComponent={
                <Icon name="car" backgroundColor={colors.primary} />
              }
            />
            <ListItem
              title="Shared Pool"
              IconComponent={
                <Icon name="pool" backgroundColor={colors.primary} />
              }
            />
          </View>
          <View>
            <AppText style={defaultStyles.textHeader2}>Where you'll be</AppText>
            <AppText style={defaultStyles.text}>
              El Gouna, Hurghada, Red Sea
            </AppText>
            <AppText style={defaultStyles.text}>------- MAP ----------</AppText>
          </View>
          <View style={styles.userContainer}>
            <ListItem
              title="Availability"
              subTitle="May 30 - 31"
              onPress={() => console.log("Pressed")}
            />
            <ListItem
              title="House Rules"
              subTitle="Check-in: After 2:00 PM"
              onPress={() => console.log("Pressed")}
            />
            <ListItem
              title="Health & Safety"
              subTitle="No smoke alarm"
              onPress={() => console.log("Pressed")}
            />
            <ListItem
              title="Cancellation plicy"
              subTitle="This reservation is non-refundable"
              onPress={() => console.log("Pressed")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
