import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
function App() {
  return (
    <MapContainer center={[43, -75]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* WATERCOLOR CUSTOM TILES */}
      {/* <TileLayer
    attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
  /> */}
      {/* GOOGLE MAPS TILES */}
      {/* <TileLayer
    attribution="Google Maps"
    // url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
    // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
    url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
    maxZoom={20}
    subdomains={["mt0", "mt1", "mt2", "mt3"]}
  /> */}
    </MapContainer>
  );
}

export default App;
