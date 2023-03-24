import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { NavItemRoot, NavItemSub } from './NavItem';
import { PaperStyle } from './style';
import { getActive } from '..';

export function NavListRoot({ list }: any) {
  const menuRef = useRef(null);

  const { pathname, asPath } = useRouter();

  const active = getActive(list.path, pathname, asPath);

  const [open, setOpen] = useState(false);

  const hasChildren = list.children;

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (hasChildren) {
    return (
      <>
        <NavItemRoot
          open={open}
          item={list}
          active={active}
          ref={menuRef}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        />

        <PaperStyle
          open={open}
          anchorEl={menuRef.current}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          PaperProps={{
            onMouseEnter: handleOpen,
            onMouseLeave: handleClose,
          }}
        >
          {(list.children || []).map((item: any) => (
            <NavListSub key={item.title} list={item} />
          ))}
        </PaperStyle>
      </>
    );
  }

  return <NavItemRoot item={list} active={active} />;
}

function NavListSub({ list }: any) {
  const menuRef = useRef(null);

  const { pathname, asPath } = useRouter();

  const active = getActive(list.path, pathname, asPath);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const hasChildren = list.children;

  if (hasChildren) {
    return (
      <>
        <NavItemSub
          ref={menuRef}
          open={open}
          item={list}
          active={active}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
        />

        <PaperStyle
          open={open}
          anchorEl={menuRef.current}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'left' }}
          PaperProps={{
            onMouseEnter: handleOpen,
            onMouseLeave: handleClose,
          }}
        >
          {(list.children || []).map((item: any) => (
            <NavListSub key={item.title} list={item} />
          ))}
        </PaperStyle>
      </>
    );
  }

  return <NavItemSub item={list} active={active} />;
}
