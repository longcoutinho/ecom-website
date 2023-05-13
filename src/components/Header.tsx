import { Box, Button, MenuItem, Menu } from "@mui/material";
import Container from "@mui/system/Container";
import { useState } from "react";
import Image from "./Image";
import { IMenuItem } from "@/interfaces";
import { PATH_PAGE } from "@/routes/path";
import Link from "next/link";
import React from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { useRouter } from "next/router";
import ShoppingCartIcon from "./ShoppingCart";

const Header = () => {
  const route = useRouter();
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleGoToPage = (path: any) => {
    route.push(path);
  };
  //data
  const initMenuItem: any = [
    {
      title: "Trang chủ",
      redirect_link: PATH_PAGE.tintuc.root,
    },
    {
      title: "Kho tàng tri thức",
      redirect_link: PATH_PAGE.user.tab3,
    },
    {
      title: "Chuyên gia",
      redirect_link: PATH_PAGE.lapla.root,
    },
    {
      title: "Dịch vụ tư vấn",
      redirect_link: PATH_PAGE.user.tab4,
    },
    {
      title: "Khóa học",
      redirect_link: PATH_PAGE.user.tab4,
    },
    {
      title: "Hỏi đáp",
      redirect_link: PATH_PAGE.user.tab4,
    },
  ];
  //components
  const Logo = () => {
    return (
      <Box className="logo-wrapper">
        <Box className="logo-container">
          <img
            onClick={() => handleGoToPage("/")}
            alt=""
            id="logo"
            src="https://www.kimca.net/wp-content/uploads/2022/03/logo.png"
          />
        </Box>
        <Box className="logo-para">
          <p style={{fontSize: "40px", }}>
            Kim ca
          </p>
          <p>
            Tri thức huyền môn - Đạo giáo
          </p>
        </Box>
      </Box>
    );
  };
  const MenuHeader = () => {
    const listMenu = initMenuItem.map((menuItem: IMenuItem, index: number) => (
      <Box
        key={index}
        className="menu-item"
        sx={{
          width: "20%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          margin: "0px 10px 0px 10px",
        }}
      >
        <Link href={menuItem.redirect_link}>
          <p>{menuItem.title}</p>
        </Link>
      </Box>
    ));
    return (
      <Box
        className="big-menu"
        sx={{
          width: "100%",
          height: "70%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {listMenu}
        <ShoppingCartIcon onClick={gotoCart} displayAmount={"none"} />
      </Box>
    );
  };
  const gotoCart = () => {
    route.push({
      pathname: "/cart",
    });
  };

  //export components
  return (
    <Container
      disableGutters
      maxWidth={false}
      className="flex-row "
      sx={{
        position: "absolute",
        top: "0px",
        height: "105px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 20% 0px 20%",
      }}
    >
      <Logo></Logo>
      <MenuHeader />

      <div className="icon-menu">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <DehazeIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {initMenuItem.map((item: any, index: number) => (
            <MenuItem
              key={index}
              onClick={() => handleGoToPage(item.redirect_link)}
            >
              {item.title}
            </MenuItem>
          ))}
          <MenuItem>
            <ShoppingCartIcon onClick={gotoCart} displayAmount={"none"} />
          </MenuItem>
        </Menu>
      </div>
    </Container>
  );
};
export default Header;
