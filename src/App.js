import { Icon } from "leaflet";
import { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import * as subwayData from "./data/subwayData.json";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-cluster";

function App() {
  const [subways, setSubways] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      const res = await fetch("https://data.ny.gov/resource/i9wp-a4ja.json");
      const stations = await res.json();
      setSubways(stations);
    };

    getData();
    setLoading(false);
  }, []);

  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    // iconUrl: require("./icons/Map_pin_icon"),
    iconSize: [38, 38], // size of the icon
  });

  return (
    <MapContainer center={[40.730761, -73.935242]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png
      "
      />
      <MarkerClusterGroup>
        {!loading &&
          subways.map((station) => {
            return (
              <Marker
                position={[station.station_latitude, station.station_longitude]}
                icon={customIcon}
              >
                <Popup>
                  <h1>{station.station_name}</h1>
                  <p>Routes: {station.daytime_routes}</p>
                </Popup>
              </Marker>
            );
          })}
      </MarkerClusterGroup>
    </MapContainer>
  );
}

export default App;
