import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5hbmhhcnRhbnRvIiwiYSI6ImNrcDVnbGo5ajF3ZmkzM213cHNrcTI3eGsifQ.HiZB0xuwiXWlZRa0piDMrQ";

function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  // eslint-disable-next-line
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((latlong) => {
      setLng(latlong.coords.longitude);
      setLat(latlong.coords.latitude);
    });
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return (
    <div className="container">
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} |{" "}
        <a
          href={`https://www.google.com/maps/${lat},${lng}`}
          target="_blank"
          rel="noreferrer"
        >
          Gmaps
        </a>
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default App;
