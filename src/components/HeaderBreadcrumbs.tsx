import isString from 'lodash/isString';
import { Box, Typography, Link } from '@mui/material';
import Breadcrumbs from './Breadcrumbs';

export default function HeaderBreadcrumbs({ links, action, heading, moreLink = '' || [], sx, ...other }: any) {
  return (
    <Box sx={{ mb: 5, ...sx }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4" gutterBottom>
            {heading}
          </Typography>
          <Breadcrumbs links={links} {...other} />
        </Box>

        {action && <Box sx={{ flexShrink: 0 }}>{action}</Box>}
      </Box>

      <Box sx={{ mt: 2 }}>
        {isString(moreLink) ? (
          <Link href={moreLink} target="_blank" variant="body2">
            {moreLink}
          </Link>
        ) : (
          moreLink.map((href: any) => (
            <Link noWrap key={href} href={href} variant="body2" target="_blank" sx={{ display: 'table' }}>
              {href}
            </Link>
          ))
        )}
      </Box>
    </Box>
  );
}
