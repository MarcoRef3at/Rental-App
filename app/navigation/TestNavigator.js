import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingEditScreen from "../screens/ListingEditScreen";
import LocationScreen from "../screens/LocationScreen";
import AmenitiesScreen from "./../screens/AmenitiesScreen";
import HouseRules from "./../screens/HouseRules";
import PhotosScreen from "./../screens/PhotosScreen";
import { ImageBrowser } from "expo-image-picker-multiple";
import Test from "./../components/Test";
import Test2 from "./../components/Test2";

const Stack = createStackNavigator();
const TestNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: true }}>
    {/* <Stack.Screen name="Listings" component={ListingEditScreen} /> */}
    {/* <Stack.Screen name="Location" component={LocationScreen} /> */}
    {/* <Stack.Screen name="Amenities" component={AmenitiesScreen} /> */}
    {/* <Stack.Screen name="HouseRules" component={HouseRules} /> */}
    <Stack.Screen name="Photos" component={PhotosScreen} />
    <Stack.Screen name="Test" component={Test} />
    <Stack.Screen name="Test2" component={Test2} />
  </Stack.Navigator>
);

export default TestNavigator;
