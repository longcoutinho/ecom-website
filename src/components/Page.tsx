import { forwardRef } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';

const Page = forwardRef(({ children, title = '', meta, ...other }: any, ref: any) => (
  <>
    <Head>
      <title>{`${title} | OneChainCP`}</title>
      {meta}
    </Head>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

Page.displayName = 'Page';

export default Page;
