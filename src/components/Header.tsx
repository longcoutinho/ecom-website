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

const Header = (props: IHeader) => {
  const { menuIndex, admin } = props;
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
  const [listMenuItem, setListMenuItem] = useState(
    admin ? menuAdmimItem : initMenuItem
  );
  //components
  const Menu = () => {
    const listMenu = listMenuItem.map((menuItem: IMenuItem, index) => (
      <Box
        key={index}
        className="menu-item"
        sx={{
          width: "20%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: props.menuIndex !== index ? "white" : "#8F0101",
          backgroundColor: props.menuIndex !== index ? "#8F0101" : "white",
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
          height: "15%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "end",
          backgroundColor: "#8F0101",
        }}
      >
        {listMenu}
      </Box>
    );
  };

  //export components
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: 350,
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        className="line"
        sx={{
          width: "100%",
          height: "10%",
          backgroundColor: "#8F0101",
        }}
      />
      <Box
        className="logo and banner"
        sx={{
          width: "100%",
          height: "75%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box
          className="logo"
          sx={{
            width: "30%",
            height: "100%",
          }}
        >
          <Image
            alt=""
            src="https://vanphongxanh.vn/wp-content/uploads/2022/03/logo-social.png"
            sx={{
              objectFit: "fill",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
        <Box
          className="banner"
          sx={{
            width: "70%",
            height: "100%",
          }}
        >
          <Image
            alt=""
            src="https://viettelnamban.com/wp-content/uploads/2021/03/21-1400x438.png"
            sx={{
              objectFit: "fill",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </Box>
      <Menu></Menu>
      <Stack direction={"row"} sx={{ py: 2, px: 2 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button>Tìm kiếm</Button>
      </Stack>
    </Container>
  );
};
export default Header;
