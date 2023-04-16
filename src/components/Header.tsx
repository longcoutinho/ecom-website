import {
  Box,
  Button,
  Input,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import Container from "@mui/system/Container";
import { useEffect, useState } from "react";
import Image from "./Image";
import { IHeader, IMenuItem } from "@/interfaces";
import { PATH_PAGE } from "@/routes/path";
import Link from "next/link";
import Iconify from "./Iconify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faSearch, faSignIn } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [search, setSearch] = useState("");
  //data
  const initMenuItem = [
    {
      title: "Trang tin tức huyền học",
      redirect_link: PATH_PAGE.user.tab1,
    },
    {
      title: "Sản phẩm phong thủy",
      redirect_link: PATH_PAGE.user.tab2,
    },
    {
      title: "Lập lá số phong thủy",
      redirect_link: PATH_PAGE.user.tab3,
    },
    {
      title: "Đặt lịch tư vấn",
      redirect_link: PATH_PAGE.user.tab4,
    },
  ];
  const menuAdmimItem = [
    {
      title: "Quản lý tin tức phong thủy",
      redirect_link: "#",
    },
    {
      title: "Quản lý sản phẩm phong thủy",
      redirect_link: "#",
    },
  ];
  //init
  /*
  const [listMenuItem, setListMenuItem] = useState(
    admin ? menuAdmimItem : initMenuItem
  );
  */
  //components
  const Logo = () => {
    return (
      <Box className="full-height" sx={{width: '130px', objectFit: 'fill'}}>
        <Image className="logo" src="https://dothethao.net.vn/wp-content/uploads/2020/06/logo-ha-noi-fc.jpg"></Image>
      </Box>
    )
  }
  const Menu = () => {
    const listMenu = initMenuItem.map((menuItem: IMenuItem, index) => (
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
        className="menu"
        sx={{
          width: "100%",
          height: "30%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "end",
          color: 'white',
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      >
        {listMenu}
      </Box>
    );
  };

  const Contact = () => {
    const ListItemContactComponent = () => {
      return (
        <Box className="flex-row center list-contact-items" sx={{
          fontSize: '15px',
          justifyContent: 'center',
        }}> 
          <FontAwesomeIcon className="contact-item" icon={faPhone} style={{color: 'red'}}/>
          <p>0123456789</p>
          <FontAwesomeIcon className="contact-item" icon={faEnvelope}/>
          <FontAwesomeIcon className="contact-item" icon={faSearch}/>
          <FontAwesomeIcon className="contact-item" icon={faSignIn}/>
        </Box>
      )
    }

    return (
      <Box
        className="menu flex-row"
        sx={{
          height: '30%',
          color: 'white',
          width: '300px'
        }}
      >
        <ListItemContactComponent></ListItemContactComponent>
      </Box>
    )
  }

  //export components
  return (
    <Container
      disableGutters
      maxWidth={false}
      className = "flex-row"
      sx={{
        position: 'absolute',
        top: '0px',
        height: '100px',
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Logo></Logo>
      <Menu></Menu>
      <Contact></Contact>
    </Container>
  );
};
export default Header;
