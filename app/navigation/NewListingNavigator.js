import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingEditScreen from "../screens/ListingEditScreen";
import LocationScreen from "../screens/LocationScreen";

const Stack = createStackNavigator();

const NewListingNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingEditScreen} />
    <Stack.Screen name="Location" component={LocationScreen} />
  </Stack.Navigator>
);

export default NewListingNavigator;
