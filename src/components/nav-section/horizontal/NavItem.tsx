/* eslint-disable react/no-children-prop */
import { forwardRef } from 'react';
import NextLink from 'next/link';
import { Box, Link } from '@mui/material';
import { ICON } from '../../../config';
import Iconify from '../../Iconify';
import { ListItemStyle } from './style';
import { isExternalLink } from '..';

export const NavItemRoot = forwardRef(({ item, active, open, onMouseEnter, onMouseLeave }: any, ref: any) => {
  const { title, path, icon, children } = item;

  if (children) {
    return (
      <ListItemStyle ref={ref} open={open} activeRoot={active} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <NavItemContent icon={icon} title={title} children={children} />
      </ListItemStyle>
    );
  }

  return isExternalLink(path) ? (
    <ListItemStyle component={Link as any} href={path} target="_blank" rel="noopener">
      <NavItemContent icon={icon} title={title} children={children} />
    </ListItemStyle>
  ) : (
    <NextLink href={path} passHref>
      <ListItemStyle activeRoot={active}>
        <NavItemContent icon={icon} title={title} children={children} />
      </ListItemStyle>
    </NextLink>
  );
});

NavItemRoot.displayName = 'NavItemRoot';

export const NavItemSub = forwardRef(({ item, active, open, onMouseEnter, onMouseLeave }: any, ref: any) => {
  const { title, path, icon, children } = item;

  if (children) {
    return (
      <ListItemStyle
        ref={ref}
        subItem
        disableRipple
        open={open}
        activeSub={active}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <NavItemContent icon={icon} title={title} children={children} subItem />
      </ListItemStyle>
    );
  }

  return isExternalLink(path) ? (
    <ListItemStyle subItem href={path} disableRipple rel="noopener" target="_blank" component={Link}>
      <NavItemContent icon={icon} title={title} children={children} subItem />
    </ListItemStyle>
  ) : (
    <NextLink href={path} passHref>
      <ListItemStyle disableRipple activeSub={active} subItem>
        <NavItemContent icon={icon} title={title} children={children} subItem />
      </ListItemStyle>
    </NextLink>
  );
});

NavItemSub.displayName = 'NavItemSub';

function NavItemContent({ icon, title, children, subItem }: any) {
  return (
    <>
      {icon && (
        <Box
          component="span"
          sx={{
            mr: 1,
            width: ICON.NAVBAR_ITEM_HORIZONTAL,
            height: ICON.NAVBAR_ITEM_HORIZONTAL,
            '& svg': { width: '100%', height: '100%' },
          }}
        >
          {icon}
        </Box>
      )}
      {title}
      {children && (
        <Iconify
          icon={subItem ? 'eva:chevron-right-fill' : 'eva:chevron-down-fill'}
          sx={{
            ml: 0.5,
            width: ICON.NAVBAR_ITEM_HORIZONTAL,
            height: ICON.NAVBAR_ITEM_HORIZONTAL,
          }}
        />
      )}
    </>
  );
}
