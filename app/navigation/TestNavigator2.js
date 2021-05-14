import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingEditScreen from "../screens/ListingEditScreen";
import LocationScreen from "../screens/LocationScreen";
import AmenitiesScreen from "../screens/AmenitiesScreen";
import HouseRules from "../screens/HouseRules";
import PhotosScreen from "../screens/PhotosScreen";
import { ImageBrowser } from "expo-image-picker-multiple";
import Test from "../components/Test";
import ImageBrowserContainer from "../components/imagePicker/ImageBrowserContainer";

const Stack = createStackNavigator();
const TestNavigator2 = () => (
  <Stack.Navigator screenOptions={{ headerShown: true }}>
    <Stack.Screen name="Test" component={Test} />
    {/* <Stack.Screen name="Listings" component={ListingEditScreen} /> */}
    {/* <Stack.Screen name="Location" component={LocationScreen} /> */}
    {/* <Stack.Screen name="Amenities" component={AmenitiesScreen} /> */}
    {/* <Stack.Screen name="HouseRules" component={HouseRules} /> */}
    {/* <Stack.Screen name="Photos" component={PhotosScreen} />
    <Stack.Screen name="ImageBrowser" component={ImageBrowserContainer} /> */}
  </Stack.Navigator>
);

export default TestNavigator2;
