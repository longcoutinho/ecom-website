import NextLink from 'next/link';
import { Box, Link, Typography, Breadcrumbs as MUIBreadcrumbs } from '@mui/material';

export default function Breadcrumbs({ links, activeLast = false, ...other }: any) {
  const currentLink = links[links.length - 1].name;

  const listDefault = links.map((link: any) => <LinkItem key={link.name} link={link} />);

  const listActiveLast = links.map((link: any) => (
    <div key={link.name}>
      {link.name !== currentLink ? (
        <LinkItem link={link} />
      ) : (
        <Typography
          variant="body2"
          sx={{
            maxWidth: 260,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            color: 'text.disabled',
            textOverflow: 'ellipsis',
          }}
        >
          {currentLink}
        </Typography>
      )}
    </div>
  ));

  return (
    <MUIBreadcrumbs
      separator={<Box component="span" sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'text.disabled' }} />}
      {...other}
    >
      {activeLast ? listDefault : listActiveLast}
    </MUIBreadcrumbs>
  );
}

function LinkItem({ link }: any) {
  const { href = '', name, icon } = link;
  return (
    <NextLink href={href} passHref>
      <Link
        key={name}
        variant="body2"
        sx={{
          lineHeight: 2,
          display: 'flex',
          alignItems: 'center',
          color: 'text.primary',
          '& > div': { display: 'inherit' },
        }}
      >
        {icon && <Box sx={{ mr: 1, '& svg': { width: 20, height: 20 } }}>{icon}</Box>}
        {name}
      </Link>
    </NextLink>
  );
}
