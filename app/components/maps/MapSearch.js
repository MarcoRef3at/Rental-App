import React from "react";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GooglePlacesAutocomplete } from "./react-native-google-places-autocomplete/GooglePlacesAutocomplete";

import config from "./../../config";
import AppTextInput from "./../TextInput";

const MapSearch = ({ setRegion, region, setMarker }) => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      minLength={2} // minimum length of text to search
      autoFocus={true}
      returnKeyType={"search"} // Can be left out for default return key
      fetchDetails={true}
      onPress={(data, details = null) => {
        console.log("data:", data);
        const targetLocation = details.geometry.location;
        const latitude = targetLocation.lat;
        const longitude = targetLocation.lng;
        setRegion({ ...region, latitude, longitude });
        setMarker({ latitude, longitude });
      }}
      query={{
        key: config.googleMapsKey,
        language: "en",
        components: `country:${config.googlePlacesSearchArea}`,
      }}
      textInputProps={{
        InputComp: AppTextInput,
        leftIcon: { type: "font-awesome", name: "chevron-left" },
        errorStyle: { color: "red" },
      }}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={300}
    />
  );
};

export default MapSearch;
