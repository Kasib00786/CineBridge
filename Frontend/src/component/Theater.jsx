import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaSearch,
  FaCaretDown,
  FaFilm,
} from "react-icons/fa";
import Navigation from "./Navigation";

/* ================= MAP IMPORTS ================= */
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Footer from "./Footer";

/* Fix Leaflet marker icons */
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

/* ================= LOCATION DATA ================= */
const LOCATIONS = {
  Mathura: {
    label: "Mathura, UP",
    center: [27.4924, 77.6713],
    theaters: [
      { id: 1, name: "Inox (Omaxe City)", distance: "4.2 km", showings: 5, type: "Multiplex", coords: [27.4924, 77.6713] },
      { id: 2, name: "Aparna Cinemax", distance: "7.5 km", showings: 3, type: "Single Screen", coords: [27.47, 77.66] },
      { id: 3, name: "Janki Palace Cinema", distance: "12 km", showings: 6, type: "Multiplex", coords: [27.505, 77.678] },
    ],
  },

  Delhi: {
    label: "Delhi, India",
    center: [28.6139, 77.209],
    theaters: [
      { id: 1, name: "PVR Select Citywalk", distance: "3.1 km", showings: 7, type: "Multiplex", coords: [28.5286, 77.2197] },
      { id: 2, name: "INOX Nehru Place", distance: "5.4 km", showings: 5, type: "Multiplex", coords: [28.5494, 77.2507] },
    ],
  },

  Mumbai: {
    label: "Mumbai, MH",
    center: [19.076, 72.8777],
    theaters: [
      { id: 1, name: "PVR Juhu", distance: "2.8 km", showings: 6, type: "Multiplex", coords: [19.1075, 72.8263] },
      { id: 2, name: "INOX R-City", distance: "6.2 km", showings: 4, type: "Multiplex", coords: [19.099, 72.916] },
    ],
  },
};

/* ================= MAP VIEW UPDATER ================= */
function ChangeMapView({ center }) {
  const map = useMap();
  map.setView(center, 13);
  return null;
}

/* ================= COMPONENT ================= */
export default function Theater() {
  const [location, setLocation] = useState("Mathura");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  const currentLocation = LOCATIONS[location];
  const theaters = currentLocation.theaters;

  const filteredTheaters = theaters
    .filter((t) =>
      t.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (t) => selectedType === "All" || t.type === selectedType
    );

  const theaterTypes = ["All", "Multiplex", "Single Screen"];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />

      {/* HEADER */}
      <div className="p-6 text-white">
        <h2 className="text-4xl font-extrabold mb-2">
          Theaters Near You
        </h2>

        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-red-500 text-xl" />
          <span className="text-xl font-semibold">
            {currentLocation.label}
          </span>

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-gray-800 text-white px-3 py-1 rounded-lg outline-none"
          >
            {Object.keys(LOCATIONS).map((loc) => (
              <option key={loc} value={loc}>
                {LOCATIONS[loc].label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col md:flex-row">
        {/* LEFT: THEATER LIST */}
        <div className="md:w-7/10 p-6">
          {/* SEARCH */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search theater name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 py-3 rounded-xl bg-gray-800 text-white outline-none"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* FILTER */}
          <div className="flex items-center gap-4 mb-6">
            <label className="text-white">Theater Type:</label>
            <div className="relative">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="appearance-none bg-gray-800 text-white px-4 py-2 rounded-xl pr-8"
              >
                {theaterTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
              <FaCaretDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* THEATER CARDS */}
          <div className="space-y-4">
            {filteredTheaters.length ? (
              filteredTheaters.map((theater) => (
                <div
                  key={theater.id}
                  className="bg-gray-800 p-5 rounded-xl border-l-4 border-red-500"
                >
                  <div className="flex justify-between">
                    <div>
                      <h4 className="text-2xl font-bold text-white">
                        {theater.name}
                      </h4>
                      <p className="text-gray-400">
                        {theater.distance} • {theater.type}
                      </p>
                    </div>

                    <button className="bg-red-600 text-white px-4 py-1 rounded-full">
                      Book
                    </button>
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-gray-300">
                    <FaFilm className="text-red-500" />
                    {theater.showings} Showings Today
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-white text-xl py-10">
                No theaters found
              </p>
            )}
          </div>
        </div>

        {/* RIGHT: MAP */}
        <div className="md:w-3/10 h-96 md:h-auto z-10">
          <MapContainer
            center={currentLocation.center}
            zoom={13}
            className="h-full w-full"
          >
            <ChangeMapView center={currentLocation.center} />

            <TileLayer
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
            />

            {theaters.map((theater) => (
              <Marker position={theater.coords} key={theater.id}>
                <Popup>
                  <strong>{theater.name}</strong>
                  <br />
                  {theater.distance} • {theater.type}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
