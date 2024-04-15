import { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

const GymMap = () => {

  const libraries = ['places'];
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
    libraries: libraries,
  });
  const [location, setLocation] = useState('');
  const [gyms, setGyms] = useState([]);
  const [selectedGym, setSelectedGym] = useState(null);
  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null); 

  useEffect(() => {
    if (isLoaded) {
      const mapInstance = new window.google.maps.Map(document.createElement('div'));
      setMap(mapInstance);
      // Initialize autocomplete
      const autocompleteInstance = new window.google.maps.places.Autocomplete(
        document.getElementById('locationInput')
      );
      setAutocomplete(autocompleteInstance);
    }
  }, [isLoaded]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: location }, (results, status) => {
        if (status === window.google.maps.GeocoderStatus.OK) {
          const { lat, lng } = results[0].geometry.location;
          const placesService = new window.google.maps.places.PlacesService(map);
          placesService.nearbySearch(
            {
              location: { lat: lat(), lng: lng() },
              radius: 15000, // 15 km radius
              type: ['gym'],
            },
            (results, status) => {
              if (status === window.google.maps.places.PlacesServiceStatus.OK) {
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

  const handleClear = () => {
    setGyms([]);
    setLocation(''); 
    setSelectedGym(null); 
  };


  useEffect(() => {
    if (autocomplete) {
      // Add event listener for place changed event to update location state
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (!place.geometry || !place.geometry.location) {
          console.error('Autocomplete returned place with no geometry');
          return;
        }
        setLocation(place.formatted_address); // Update location state with formatted address
      });
    }
  }, [autocomplete]);

  if (loadError) return 'Error loading maps';

  return (
    <div className="flex flex-row mt-5">
      <div className="flex flex-col mr-2">
        <form onSubmit={handleSearch}>
          <button className="mr-2"type="submit">🔍</button>
          <input
            id="locationInput"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter a location"
          />
        </form>
        {location && (
          <button className="font-poppins rounded-xl text-white mt-2 bg-red-500"onClick={handleClear}>
            Clear
          </button>
        )}
      </div>
      {isLoaded && (
        <GoogleMap
          center={{ lat: 40.78, lng: -73.15 }}
          zoom={10}
          mapContainerStyle={{ flex: 1, height: '550px', width: '100%' }}
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
                  {gym.photos && gym.photos.length > 0 && (
                    <img
                      src={gym.photos[0].getUrl({ maxWidth: 200, maxHeight: 100 })}
                      alt={gym.name}
                    />
                  )}
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
