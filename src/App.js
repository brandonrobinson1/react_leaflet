import { Icon } from "leaflet";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
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
    iconSize: [38, 38], // size of the icon
  });

  return (
    <div style={{ display: "15rem" }}>
      <MapContainer center={[40.730761, -73.935242]} zoom={13}>
        <TileLayer
          attribution="Google Maps"
          url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          maxZoom={20}
          subdomains={["mt0", "mt1", "mt2", "mt3"]}
        />

        <MarkerClusterGroup chunkedLoading>
          {!loading &&
            subways.map((station) => {
              return (
                <Marker
                  position={[
                    station.station_latitude,
                    station.station_longitude,
                  ]}
                  icon={customIcon}
                >
                  <Popup>
                    <h2>{station.station_name}</h2>
                    <h3>Routes: {station.daytime_routes}</h3>
                  </Popup>
                </Marker>
              );
            })}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default App;
