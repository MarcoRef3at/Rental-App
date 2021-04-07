import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ListingEditScreen from "./../screens/ListingEditScreen";

const Stack = createStackNavigator();

const ListingsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Listings" component={ListingEditScreen} />
  </Stack.Navigator>
);

export default ListingsNavigator;
