import { useState } from "react";
import { geoLocationClient } from "./../api/client";

export default useGoogleLocation = () => {
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [region, setRegion] = useState(null);
  const [street, setStreet] = useState(null);
  const setLocation = (markedLocation) => {
    console.log("setLocation", markedLocation);
    geoLocationClient
      .get("/geocode/json", {
        params: {
          latlng: `${markedLocation.latitude},${markedLocation.longitude}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        response.data.results[0].address_components.map((address) => {
          const route = address.types.find((element) => element == "route");
          route != undefined && setStreet(address.long_name);

          const city = address.types.find(
            (element) => element == "administrative_area_level_2"
          );
          city != undefined && setCity(address.long_name);

          const state = address.types.find(
            (element) => element == "administrative_area_level_1"
          );
          state != undefined && setState(address.long_name);

          const country = address.types.find((element) => element == "country");
          country != undefined && setCountry(address.long_name);
        });
        response.data.results[1].address_components.map((address) => {
          const region = address.types.find(
            (element) => element == "neighborhood"
          );
          region != undefined && setRegion(address.long_name);
        });
      })
      .catch((error) => {
        console.log("error:", error);
      });
  };

  return { setLocation, country, state, city, street, region };
};
