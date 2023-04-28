import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import { useMap } from "../../../hooks/UseMap";

import { MapPin } from "../../../assets/svg/Svg";

// This component shows the institute location on the map.
const Map = () => {
  /* Dynamic position */
  const { position } = useMap();
  return (
    <div class="h-[30rem] md:h-[31rem] md:w-1/2">
      <div class="shadow-lg  img-fluid relative top-8 m-auto mt-3 max-w-lg overflow-hidden rounded-lg border md:max-w-sm lg:max-w-md">
        {/* Map */}
        <MapContainer
          center={position}
          zoom={16}
          scrollWheelZoom={true}
          style={{ minHeight: "40vh", minWidth: "30vw" }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              Alpha Academy
              <br />
            </Popup>
          </Marker>
        </MapContainer>

        {/* Map footer. */}
        <div class="flex w-full flex-row gap-2 bg-slate-50 py-3 px-3 text-black">
          <MapPin />
          <div>
            <span class="w-full text-xs sm:text-sm">
              Unit 15, Maziar Complex, Modares Alley, in front of Khayam, 18th
              Street, Sari
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Map };
