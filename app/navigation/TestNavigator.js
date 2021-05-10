import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingEditScreen from "../screens/ListingEditScreen";
import LocationScreen from "../screens/LocationScreen";
import AmenitiesScreen from "./../screens/AmenitiesScreen";
import HouseRules from "./../screens/HouseRules";

const Stack = createStackNavigator();
const TestNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {/* <Stack.Screen name="Listings" component={ListingEditScreen} /> */}
    {/* <Stack.Screen name="Location" component={LocationScreen} /> */}
    <Stack.Screen name="Amenities" component={AmenitiesScreen} />
    {/* <Stack.Screen name="HouseRules" component={HouseRules} /> */}
  </Stack.Navigator>
);

export default TestNavigator;
