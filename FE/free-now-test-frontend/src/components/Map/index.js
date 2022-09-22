import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet'
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
}


delete Leaflet.Icon.Default.prototype._getIconUrl;
let DefaultIcon = Leaflet.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

Leaflet.Marker.prototype.options.icon = DefaultIcon;

const SimpleMap = ({
    selectedCoordinate,
    zoom=13
}) => {

    const [markerPosition, setMarkerPosition] = useState(selectedCoordinate)

    useEffect(() => {
        setMarkerPosition(selectedCoordinate);
    }, [selectedCoordinate]);


    return (
        <MapContainer
            center={markerPosition}
            zoom={zoom}
            style={{ height: '83vh', width: '100%' }}
            scrollWheelZoom={false}
        >
            <ChangeView center={markerPosition} zoom={zoom}/>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={markerPosition}>
            </Marker>
        </MapContainer>
    );
}

export default SimpleMap;


