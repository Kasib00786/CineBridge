import React, { useState } from 'react';
import { FaMapMarkerAlt, FaSearch, FaCaretDown, FaFilm } from 'react-icons/fa';
import Navigation from './Navigation';

// === MAP IMPORTS (Requires 'leaflet' and 'react-leaflet' installed) ===
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 

// Fix for default Leaflet marker icons not showing up correctly
import L from 'leaflet';
// Note: If you encounter marker issues, ensure this custom icon merge is present:
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});
// ====================


// Mock Data for Theaters in Mathura (with static coordinates)
const mathuraTheaters = [
    { id: 1, name: 'Inox (Omaxe City)', distance: '4.2 km', showings: 5, type: 'Multiplex', coords: [27.4924, 77.6713] },
    { id: 2, name: 'Aparna Cinemax', distance: '7.5 km', showings: 3, type: 'Single Screen', coords: [27.4700, 77.6600] },
    { id: 3, name: 'Janki Palace Cinema', distance: '12 km', showings: 6, type: 'Multiplex', coords: [27.5050, 77.6780] },
    { id: 4, name: 'Brijwasi Palace', distance: '15 km', showings: 2, type: 'Single Screen', coords: [27.4800, 77.6850] },
];

// Default Map Center and Zoom for Mathura
const MATHURA_COORDS = [27.4924, 77.6713];
const INITIAL_ZOOM = 13;


export default function Theater() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('All');
    
    // Filtering logic
    const filteredTheaters = mathuraTheaters
        .filter(theater => 
            theater.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(theater => 
            selectedType === 'All' || theater.type === selectedType
        );

    const theaterTypes = ['All', 'Multiplex', 'Single Screen'];

    return (
        <div className='min-h-screen bg-gray-900'>
                <div className=' top-0 left-0 right-0 z-50 w-full shadow-xl'><Navigation /></div>
            {/* Page Title & Location */}
            <div className='p-6 md:p-5 text-white'>
                <h2 className='text-4xl md:text-5xl font-extrabold tracking-tight mb-2'>Theaters Near You</h2>
                <div className='flex items-center'>
                    <FaMapMarkerAlt className='text-red-500 mr-2 text-xl' />
                    <span className='text-xl font-semibold'>Mathura, UP</span>
                    <button className='text-sm text-blue-400 ml-4 hover:underline'>Change Location</button>
                </div>
            </div>

            {/* Main Content Split: List (Left, 70%) & Map (Right, 30%) */}
            <div className='flex flex-col md:flex-row min-h-[calc(100vh-160px)]'>
                
                {/* 3A. Left Column: Theater List (70% on Desktop) */}
                <div className='md:w-7/10 bg-gray-900 p-4 md:p-6 order-2 md:order-1'>
                    
                    {/* Search Bar */}
                    <div className='relative mb-6'>
                        <input
                            type="text"
                            placeholder="Search by Theater Name (e.g., Inox, PVR)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                        />
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>

                    {/* Filters */}
                    <div className='mb-6 flex space-x-4 items-center'>
                        <label htmlFor="theater-type" className="text-white font-medium">Theater Type:</label>
                        <div className="relative">
                            <select
                                id="theater-type"
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className='appearance-none p-3 bg-gray-800 rounded-xl text-white hover:bg-gray-700 transition duration-200 cursor-pointer pr-8 focus:outline-none'
                            >
                                {theaterTypes.map(type => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                            <FaCaretDown className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none' />
                        </div>
                    </div>

                    {/* Theater List */}
                    <div className='space-y-4'>
                        {filteredTheaters.length > 0 ? (
                            filteredTheaters.map(theater => (
                                <div key={theater.id} className='bg-gray-800 p-5 rounded-xl shadow-lg border-l-4 border-red-500 hover:bg-gray-700 transition duration-200'>
                                    <div className='flex justify-between items-start'>
                                        <div>
                                            <h4 className='text-2xl font-bold text-white'>{theater.name}</h4>
                                            <p className='text-sm text-gray-400 mb-2'>
                                                {theater.distance} away • {theater.type}
                                            </p>
                                        </div>
                                        <button className='py-1 px-3 bg-red-600 text-white font-semibold rounded-full text-sm hover:bg-red-500'>
                                            View Details & Book
                                        </button>
                                    </div>
                                    
                                    <div className='flex items-center space-x-4 mt-3'>
                                        <div className='flex items-center space-x-1 text-sm text-gray-300'>
                                            <FaFilm className='text-red-500' />
                                            <span>{theater.showings} Showings Today</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-white text-center py-10 text-xl">
                                No theaters found matching your search criteria.
                            </p>
                        )}
                    </div>
                </div>

                {/* 3B. Right Column: Interactive Map (30% on Desktop) */}
                <div className='md:w-3/10 h-96 md:h-auto order-1 md:order-2 z-0'>
                <MapContainer 
                    center={MATHURA_COORDS} 
                    zoom={INITIAL_ZOOM} 
                    scrollWheelZoom={true} 
                    className='h-full w-full'
                >
                    <TileLayer
                    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a>, &copy; <a href="https://openstreetmap.org/">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                    />

                    {/* Map Markers for Theaters */}
                    {mathuraTheaters.map(theater => (
                    <Marker position={theater.coords} key={theater.id}>
                        <Popup>
                        <div className="font-semibold text-gray-100">
                            {theater.name}
                        </div>
                        <div className="text-sm text-gray-300">
                            {theater.distance} away | {theater.type}
                        </div>
                        <button className='mt-2 text-xs text-blue-400 hover:underline'>
                            View Details
                        </button>
                        </Popup>
                    </Marker>
                    ))}
                </MapContainer>
                </div>


            </div>
        </div>
    );
}