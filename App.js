import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import Card from "./app/components/Card";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  const [token, setToken] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (token) setToken(token);
  };

  useEffect(() => {
    restoreToken();
  }, []);

  if (!isReady)
    return (
      <AppLoading
        startAsync={() => restoreToken}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <NavigationContainer theme={navigationTheme}>
        {token ? <AppNavigator /> : <AuthNavigator />}
        {/* <AppNavigator /> */}
        {/* {token ? <ListingEditScreen /> : <AuthNavigator />} */}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
