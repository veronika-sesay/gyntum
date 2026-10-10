/// <reference types="vite/client" />
import "./style.css";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useState, useEffect, useRef } from "react";
import { Libraries } from "@react-google-maps/api";

const libraries: Libraries = ["marker"];

export const Map = (): JSX.Element => {
  const apiKey: string = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const mapId: string = import.meta.env.VITE_GOOGLE_MAP_ID;

  const mapContainerStyle: { width: string; height: string } = {
    width: "100%",
    height: "300px",
  };
  const center: { lat: number; lng: number } = {
    lat: 49.419395422989965,
    lng: 14.644484426136417,
  };

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(
    null
  );
  const [shouldLoad, setShouldLoad] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Start loading the Google Maps script only when the map section
  // is about to scroll into view (saves hundreds of KB of JS on initial load)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (map && !markerRef.current) {
      const loadMarkerLibrary = async () => {
        const markerLibrary = (await google.maps.importLibrary("marker")) as {
          AdvancedMarkerElement: typeof google.maps.marker.AdvancedMarkerElement;
        };
        const { AdvancedMarkerElement } = markerLibrary;

        if (AdvancedMarkerElement) {
          // Create the AdvancedMarkerElement once it's loaded
          markerRef.current = new AdvancedMarkerElement({
            position: center,
            map: map,
            title: "Gynekologie MUDr. Jana Tůmová",
          });
        } else {
          console.error("AdvancedMarkerElement could not be loaded.");
        }
      };
      loadMarkerLibrary();
    }
  }, [map]);

  return (
    <div ref={containerRef} style={{ minHeight: "300px" }}>
      {shouldLoad && (
        <LoadScript
          libraries={libraries} // Make sure 'marker' library is included
          googleMapsApiKey={apiKey || ""}
          version="weekly" // Use the latest version of the API
        >
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={15}
            onLoad={(mapInstance) => {
              setMap(mapInstance);
              if (mapId) {
                mapInstance.setOptions({
                  mapId: mapId,
                });
              } else {
                console.error("Map ID is undefined!");
              }
            }}
          />
        </LoadScript>
      )}
    </div>
  );
};
