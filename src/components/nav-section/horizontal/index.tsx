import { memo } from 'react';
import { Stack } from '@mui/material';
import { NavListRoot } from './NavList';

const hideScrollbar = {
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
};

function NavSectionHorizontal({ navConfig }: any) {
  return (
    <Stack direction="row" justifyContent="center" sx={{ bgcolor: 'background.neutral', borderRadius: 1, px: 0.5 }}>
      <Stack direction="row" sx={{ ...hideScrollbar, py: 1 }}>
        {navConfig.map((group: any) => (
          <Stack key={group.subheader} direction="row" flexShrink={0}>
            {group.items.map((list: any) => (
              <NavListRoot key={list.title} list={list} />
            ))}
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default memo(NavSectionHorizontal);
