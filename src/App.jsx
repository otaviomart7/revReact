import { useState } from "react";
import s from "./App.module.css";
import { Menu } from "./components/menu";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

function App() {
  const position = [-22.8909104, -43.2283];

  const [mapType, setMapType] = useState("normal");

  const maps = {
    normal: {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: "&copy; OpenStreetMap contributors",
    },
    satellite: {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      attribution: "&copy; Esri",
    },
  };

  return (
    <>
      <Menu />

      <div className={s.wrapHome}>
        <div className={s.mapButtons}>
          <button
            onClick={() => setMapType("normal")}
            className={mapType === "normal" ? s.active : ""}
          >
            Mapa normal
          </button>

          <button
            onClick={() => setMapType("satellite")}
            className={mapType === "satellite" ? s.active : ""}
          >
            Satélite
          </button>
        </div>

        <MapContainer
          className={s.map}
          center={position}
          zoom={17}
          scrollWheelZoom={false}
        >
          <TileLayer
            key={mapType}
            url={maps[mapType].url}
            attribution={maps[mapType].attribution}
          />

          <Marker position={position}>
            <Popup>
              Localização selecionada
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
}

export default App;