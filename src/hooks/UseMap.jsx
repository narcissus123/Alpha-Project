import { useState, useEffect } from "react";
import axios from "axios";
/* 
  This hook gets the current position.
*/
export const useMap = () => {
  const [position, setPosition] = useState({
    lat: 36.56717,
    lng: 53.062184,
  });
  // More logic goes here

  /* Use the useEffect hook to make our state run only when the page is rendered for the first time */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setPosition({ lat: coords.latitude, lng: coords.longitude });
      },
      /* to make an http request to an Api if the user (or the device he is using) blocks access to his location.*/
      (blocked) => {
        if (blocked) {
          const fetch = async () => {
            try {
              const { data } = await axios.get("https://ipapi.co/json");
              setPosition({ lat: data.latitude, lng: data.longitude });
            } catch (err) {
              console.error("Access to user location is blocked.");
            }
          };
          fetch();
        }
      }
    );
  }, []);
  return { position };
};
