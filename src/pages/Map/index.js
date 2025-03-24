import { jsx as _jsx } from "react/jsx-runtime";
/// <reference types="vite/client" />
import './style.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useState, useEffect, useRef } from 'react';
const libraries = ['marker'];
export const Map = () => {
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
    const mapId = import.meta.env.VITE_GOOGLE_MAP_ID;
    const mapContainerStyle = {
        width: '100%',
        height: '300px',
    };
    const center = {
        lat: 49.419395422989965,
        lng: 14.644484426136417,
    };
    const [map, setMap] = useState(null);
    const markerRef = useRef(null);
    useEffect(() => {
        if (map && !markerRef.current) {
            const loadMarkerLibrary = async () => {
                const markerLibrary = (await google.maps.importLibrary('marker'));
                const { AdvancedMarkerElement } = markerLibrary;
                if (AdvancedMarkerElement) {
                    // Create the AdvancedMarkerElement once it's loaded
                    markerRef.current = new AdvancedMarkerElement({
                        position: center,
                        map: map,
                        title: 'Gynekologie MUDr. Jana Tůmová',
                    });
                }
                else {
                    console.error('AdvancedMarkerElement could not be loaded.');
                }
            };
            loadMarkerLibrary();
        }
    }, [map]);
    return (_jsx(LoadScript, { libraries: libraries, googleMapsApiKey: apiKey || '', version: "weekly" // Use the latest version of the API
        , children: _jsx(GoogleMap, { mapContainerStyle: mapContainerStyle, center: center, zoom: 15, onLoad: (mapInstance) => {
                setMap(mapInstance);
                if (mapId) {
                    mapInstance.setOptions({
                        mapId: mapId,
                    });
                }
                else {
                    console.error('Map ID is undefined!');
                }
            } }) }));
};
