import { Stack } from '@mui/material';
import { ReactNode } from 'react';

const StackItem = ({ children }: { children?: ReactNode }) => {
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ width: 1 }}>
      {children}
    </Stack>
  );
};

export default StackItem;
