import { GeolocateControl } from 'react-map-gl';
import { styled } from '@mui/material/styles';

const GeolocateControlStyle = styled(GeolocateControl)(({ theme }: any) => ({
  zIndex: 99,
  borderRadius: 8,
  overflow: 'hidden',
  top: theme.spacing(6),
  left: theme.spacing(1.5),
  boxShadow: theme.customShadows.z8,
}));

export default function MapControlGeolocate({ ...props }: any) {
  return <GeolocateControlStyle positionOptions={{ enableHighAccuracy: true }} trackUserLocation={true} {...props} />;
}
