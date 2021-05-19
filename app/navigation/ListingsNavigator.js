import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingEditScreen from "./../screens/ListingEditScreen";
import LocationScreen from "./../screens/LocationScreen";
import AmenitiesScreen from "./../screens/AmenitiesScreen";
import HouseRules from "./../screens/HouseRules";
import PhotosScreen from "./../screens/PhotosScreen";
import Test from "../components/Test";
import ImageBrowserContainer from "./../components/imagePicker/ImageBrowserContainer";
import ListingNameScreen from "./../screens/ListingNameScreen";
import AvailabilityScreen from "./../screens/AvailabilityScreen";

const Stack = createStackNavigator();

const ListingsNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingEditScreen} />
    <Stack.Screen name="Location" component={LocationScreen} />
    <Stack.Screen name="Amenities" component={AmenitiesScreen} />
    <Stack.Screen name="HouseRules" component={HouseRules} />
    <Stack.Screen name="Photos" component={PhotosScreen} />
    <Stack.Screen name="ImageBrowser" component={ImageBrowserContainer} />
    <Stack.Screen name="ListName" component={ListingNameScreen} />
    <Stack.Screen name="Availability" component={AvailabilityScreen} />

    <Stack.Screen name="Test" component={Test} />
  </Stack.Navigator>
);

export default ListingsNavigator;
