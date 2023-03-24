import { forwardRef } from 'react';
import NextLink from 'next/link';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import Image from '../components/Image';
const Logo = forwardRef(({ disabledLink = false, sx }: any, ref: any) => {
  const logo = (
    <Box ref={ref} sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}>
      <Image alt={'logo'} src={'/logo/logo_full.png'} sx={{ borderRadius: 1, width: '100px', height: '40px' }} />
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <NextLink href="/">{logo}</NextLink>;
});

Logo.displayName = 'Logo';

export default Logo;
