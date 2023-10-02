import React, { useState } from 'react';
import { LoadScript, GoogleMap, InfoWindow } from '@react-google-maps/api';

interface MapProps {
    center: { lat: number; lng: number };
}

const CustomInfoWindowContent: React.FC = () => {
    const openGoogleMaps = () => {
        const googleMapsLink = 'https://www.google.com/maps?q=12019+Nebel+St,+Rockville,+MD+20852';
        window.open(googleMapsLink, '_blank');
    };

    return (
        <div style={{ color: '#333', fontSize: '14px' }}>
            <h1 style={{fontWeight:600, marginBottom: '8px' }}>Capital Upfitters Auto & Truck Accessories</h1>
            <p style={{fontWeight:300, color: "grey", marginBottom: '4px' }}>12019 Nebel St, Rockville, MD 20852</p>
            <a style={{cursor: 'pointer', color: "blue", fontWeight:400}} onClick={openGoogleMaps}>View on Google Maps</a>
        </div>
    );
};

const GoogleMapComponent: React.FC<MapProps> = ({ center }) => {
    const [infoWindowOpen, setInfoWindowOpen] = useState<boolean>(true);

    const toggleInfoWindow = () => {
        setInfoWindowOpen(!infoWindowOpen);
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyBjenRU8I45sR1FzB4TGs1OKr8G5HnXcxo">
            <GoogleMap
                mapContainerStyle={{ height: '400px', width: '100%' }}
                center={center}
                zoom={20}
                onClick={toggleInfoWindow}
            >
                {infoWindowOpen && (
                    <InfoWindow position={center} onCloseClick={toggleInfoWindow}>
                        <CustomInfoWindowContent />
                    </InfoWindow>
                )}
            </GoogleMap>
        </LoadScript>
    );
};

export default GoogleMapComponent;
