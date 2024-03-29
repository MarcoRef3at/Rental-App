import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingEditScreen from "../screens/ListingEditScreen";
import LocationScreen from "../screens/LocationScreen";
import AmenitiesScreen from "./../screens/AmenitiesScreen";
import HouseRules from "./../screens/HouseRules";
import PhotosScreen from "./../screens/PhotosScreen";
import { ImageBrowser } from "expo-image-picker-multiple";
import AppFormPicker from "../components/AppFormPicker";
import ImageBrowserContainer from "./../components/imagePicker/ImageBrowserContainer";
import ListingNameScreen from "./../screens/ListingNameScreen";
import AvailabilityScreen from "./../screens/AvailabilityScreen";
import CalendarScreen from "./../screens/CalendarScreen";
import PriceScreen from "./../screens/PriceScreen";
import ReviewScreen from "./../screens/ReviewScreen";
import Test from "./../components/Test";

const Stack = createStackNavigator();
const TestNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {/* <Stack.Screen name="Listings" component={ListingEditScreen} /> */}
    {/* <Stack.Screen name="Location" component={LocationScreen} /> */}
    {/* <Stack.Screen name="Amenities" component={AmenitiesScreen} /> */}
    {/* <Stack.Screen name="HouseRules" component={HouseRules} /> */}
    {/* <Stack.Screen name="Photos" component={PhotosScreen} /> */}
    {/* <Stack.Screen name="Test" component={Test} /> */}
    {/* <Stack.Screen name="Photos" component={PhotosScreen} />
    <Stack.Screen name="ImageBrowser" component={ImageBrowserContainer} /> */}
    {/* <Stack.Screen name="Name" component={ListingNameScreen} /> */}
    {/* <Stack.Screen name="Availability" component={AvailabilityScreen} />
    <Stack.Screen name="Calendar" component={CalendarScreen} /> */}
    {/* <Stack.Screen name="Price" component={PriceScreen} />*/}
    <Stack.Screen name="Review" component={ReviewScreen} />
    {/* <Stack.Screen name="Test" component={Test} /> */}
  </Stack.Navigator>
);

export default TestNavigator;
