import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const LabelStyle = styled(Typography)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

export default LabelStyle;
