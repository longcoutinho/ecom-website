import { Box, Button, Input } from "@mui/material";
import Container from "@mui/system/Container";
import {useEffect, useRef, useState} from "react";
import { IMenuItem } from "@/interfaces";
import { PATH_PAGE } from "@/routes/path";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import ShoppingCartIcon from "./ShoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {useSelector} from "react-redux";
import {useDispatch } from "react-redux";
import { getNumberItemInCart} from "@/constants/FnCommon";
import {Backend} from "@/constants";

export default function Header(props: any) {
  const route = useRouter();
  const [listPostsMenu, setListPostsMenu] = useState([
    {
      id: "1",
      name: "Lý số 1",
    }
  ])
  const [dropDownState, setDropDownState] = useState("none");
  const [cartAmount, setCartAmount] = useState<number>();
  const searchRef = useRef<any>(null);

  const counter = useSelector((state: any) => state.counter);
  const assign = (number: any) => {
    return {
      type: "ASSIGN",
      payload: number,
    }
  }
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("long kk");
    dispatch(assign(getNumberItemInCart()));
    setDropDownState("none");
    axios({
      method: "get",
      url: Backend.URL + "/type/0",
    }).then(
        (res) => {
          setListPostsMenu(res.data);
        },
        (err) => {
          console.log(err);
        }
    );
    var cart: any = window.localStorage.getItem('cart');
    var newCart = [];
    if (cart != null) {
      newCart = JSON.parse(window.localStorage.getItem("cart") || "");
    }
    var totalPrice = 0;
    for(var i = 0; i < newCart.length; i++)
      totalPrice += newCart[i].totalPrice;
    setCartAmount(newCart.length);
  },[]);
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
  const handleSearch = (title: string) => {
    // @ts-ignore
    route.push({
      pathname: "/search",
      search: "?" + new URLSearchParams({
        title: title,
        page: "0",
        pageSize: "9",
      }),
    });
  }

  const handleSearchInput = (e: any) => {
    searchRef.current.value = e;
    // setSearchInput(e);
  }

  //data
  const initMenuItem: any = [
    {
      title: "Trang chủ",
      redirect_link: PATH_PAGE.user.tab1,
      drop_down: false,
    },
    {
      title: "Kho tàng tri thức",
      redirect_link: PATH_PAGE.user.tab2,
      drop_down: true,
    },
    {
      title: "Vật phẩm",
      redirect_link: PATH_PAGE.user.tab3,
      drop_down: false,
    },
    {
      title: "Lập lá số",
      redirect_link: PATH_PAGE.user.tab4,
      drop_down: false,
    },
    {
      title: "Khóa học",
      redirect_link: PATH_PAGE.user.tab5,
      drop_down: false,
    },
    {
      title: "Dịch vụ",
      redirect_link: PATH_PAGE.user.tab6,
      drop_down: false,
    },
    {
      title: "Liên hệ",
      redirect_link: PATH_PAGE.user.tab7,
      drop_down: false,
    },
  ];

  const redirect = (nameType: any) => {
    setDropDownState("none");
    route.push({
      pathname: "/posts",
      search: "?" + new URLSearchParams({
        type: nameType,
        page: "0",
        pageSize: "9",
      }),
    });
  }

  //components
  const MenuHeader = () => {
    const ListPostsMenu = listPostsMenu?.map((element, index, ind) => {
      // eslint-disable-next-line react/jsx-key
      return (<p key={index} onClick={() => redirect(element.name)}>{element.name}</p>);
    });

    const MenuDropDown = (props: any) => {
      if (props.show) return (
          <Box className="drop-down-menu" style={{display: dropDownState}}>
            {ListPostsMenu}
          </Box>
      )
      else return null;
    }

    const enableDropDown = () => {
      setDropDownState( (dropDownState == "block") ? "none" : "block");
    }

    const ArrowDownIcon = (props: any) => {
      if (props.show) return (
          <FontAwesomeIcon onClick={enableDropDown} className="arrow-icon" icon={faCaretDown}></FontAwesomeIcon>
      )
      else return null;
    }

    // @ts-ignore
    const listMenu = initMenuItem.map((menuItem: IMenuItem, index: number) => (
      <Box
        key={index}
        className="menu-item"
        sx={{
          height: "20%",
          display: "inline-block",
          fontWeight: 700,
          margin: "0px 10px 0px 10px",
        }}
      >
          <Box className="menu-element">
            <Link href={menuItem.redirect_link}>{menuItem.title}</Link>
            <ArrowDownIcon show={menuItem.drop_down}></ArrowDownIcon>
            <MenuDropDown show={menuItem?.drop_down}></MenuDropDown>
          </Box>
      </Box>
    ));
    return (
      <Box
        className="big-menu mobile-view"
      >
        {listMenu}
      </Box>
    );
  };
  const gotoCart = () => {
    route.push({
      pathname: "/cart",
    });
  };

  const IntroductionHeader = () => {
    const Logo = () => {
      return (
        <Box onClick={() => handleGoToPage("/")} className="logo-wrapper">
          <Box className="logo-container">
            <img
              alt=""
              id="logo"
              src="https://www.kimca.net/wp-content/uploads/2022/03/logo.png"
            />
          </Box>
          <Box className="logo-para">
            <p className="logo-title">Kim Ca</p>
            <p className="mobile-view">Tri thức huyền môn - Đạo giáo</p>
          </Box>
        </Box>
      );
    };

    const Search = () => {
      // @ts-ignore
      return <Box className="search-wrapper">
        <input ref={searchRef} onChange={(e) => handleSearchInput(e.target.value) } className="search-input" placeholder="Bạn muốn tư vấn gì?"></input>
        <Button onClick={() => handleSearch(searchRef.current.value)} className="search-button">Tìm kiếm</Button>
      </Box>;
    };

    const PhoneService = () => {
      return <Box className="phone-service-wrapper">
        <p>Tư vấn dịch vụ:</p>
        <Box className="phone-service-content">
          <FontAwesomeIcon className="phone-icon" icon={faPhone}></FontAwesomeIcon>
          <p>0972158989</p>
        </Box>
      </Box>;
    };

    const Cart = () => {
      return <Box className="cart-wrapper">
        <ShoppingCartIcon onClick={gotoCart} displayAmount={"none"} />
        <p style={{fontWeight: '700', fontSize: '17px'}}>Giỏ hàng</p>
        <Box className="cart-amount">
          <p>{counter}</p>
        </Box>
      </Box>;
    };

    return (
      <Box className="introduction-header-container">
        <Logo></Logo>
        <Search></Search>
        <PhoneService></PhoneService>
        <Cart></Cart>
      </Box>
    );
  };

  //export components
  return (
    <Container className="header-container" disableGutters maxWidth={false}>
      <IntroductionHeader></IntroductionHeader>
      <MenuHeader></MenuHeader>
    </Container>
  );
};

