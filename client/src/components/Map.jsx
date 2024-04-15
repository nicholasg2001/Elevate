import { useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const GymMap = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
  });
  const [location, setLocation] = useState('');
  const [gyms, setGyms] = useState([]);
  const [selectedGym, setSelectedGym] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ address: location }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK) {
          const { lat, lng } = results[0].geometry.location;
          const placesService = new google.maps.places.PlacesService(map);
          placesService.nearbySearch(
            {
              location: { lat: lat(), lng: lng() },
              radius: 15000, // 15 km radius
              type: ['gym'],
            },
            (results, status) => {
              if (status === google.maps.places.PlacesServiceStatus.OK) {
                setGyms(results);
              }
            }
          );
        }
      });
    } catch (error) {
      console.error('Error fetching nearby gyms:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter a location"
        />
        <button type="submit">Search</button>
      </form>

      {isLoaded && (
        <GoogleMap
          center={{ lat: 40.78, lng: -73.15 }}
          zoom={10}
          mapContainerStyle={{ height: '500px', width: '100%' }}
        >
          {gyms.map((gym) => (
            <Marker
              key={gym.place_id}
              position={{
                lat: gym.geometry.location.lat(),
                lng: gym.geometry.location.lng(),
              }}
              onClick={() => setSelectedGym(gym)}
            >
              {selectedGym === gym && (
                <InfoWindow onCloseClick={() => setSelectedGym(null)}>
                  <div>
                    <h3>{gym.name}</h3>
                    <p>{gym.vicinity}</p>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      )}
    </div>
  );
};

export default GymMap;