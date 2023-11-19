
import { useLoadScript, GoogleMap } from '@react-google-maps/api';
import { useMemo } from 'react';

const Map = ({lat, lng}) => {
	console.log(process.env.NEXT_PUBLIC_MAPS_API)
  const mapCenter = useMemo(
    () => ({ lat, lng }),
    []
  );


  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAPS_API,
  });

  if (!isLoaded) {
    return <p>Loading Map...</p>;
  }

  return (
    <div className="h-full w-full">
      <GoogleMap
        center={mapCenter}
        zoom={18}
        mapContainerStyle={{ width: '100%', height: '100%' }}
        onLoad={() => console.log('Map Component Loaded...')}
      />
    </div>
  );
};

export default Map;