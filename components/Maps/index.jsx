import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import PropTypes from 'prop-types';

function Maps(props) {
  const { isMobile } = props;
  const containerStyle = {
    width: '100%',
    height: isMobile ? '300px' : '200px',
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyA1MgLuZuyqR_OGY3ob3M52N46TDBRI_9k',
    libraries: ['places'],
  });
  const location = { lat: 0.18747572074114935, lng: 117.47756543968396 };
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <GoogleMap
        options={{ streetViewControl: false }}
        zoom={16}
        center={location}
        mapContainerStyle={containerStyle}
        mapContainerClassName="map-container"
      >
        <Marker position={location} />
      </GoogleMap>
    </>
  );
}

Maps.propTypes = {
  isMobile: PropTypes.bool,
};

export default Maps;
