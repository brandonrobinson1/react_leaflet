import { Icon } from "leaflet";
import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

function App() {
  const [subways, setSubways] = useState([{}]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://data.ny.gov/resource/i9wp-a4ja.json");
      const stations = await res.json();
      setSubways(stations);
    };
    getData();
  }, []);

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    // iconUrl: require("./icons/Map_pin_icon"),
    iconSize: [38, 38], // size of the icon
  });

  const getMarkers = () => {
    subways.map((station) => {
      console.log(station);
      return (
        <Marker
          position={[station.latitude, station.longitude]}
          icon={customIcon}
        >
          <Popup>Subway</Popup>
        </Marker>
      );
    });
  };

  return (
    <MapContainer center={[40.730761, -73.935242]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png
      "
      />
      <Marker
        title="sample"
        icon={customIcon}
        position={[-73.754178, 40.604657]}
      >
        Hello!
      </Marker>
      {getMarkers()}
    </MapContainer>
  );
}

export default App;
