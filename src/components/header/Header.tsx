import { Box, Button } from "@mui/material";
import Container from "@mui/system/Container";
import {useEffect, useRef, useState} from "react";
import { IMenuItem } from "@/interfaces";
import { PATH_PAGE } from "@/routes/path";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown, faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux";
import {useDispatch } from "react-redux";
import { getNumberItemInCart} from "@/constants/FnCommon";
import {TypePost} from "@/interfaces/response";
import Logo from "@/components/header/logo/Logo";
import Menu from "@/components/header/menu/Menu";

export default function Header(props: any) {
    const route = useRouter();
    const [listPostsMenu, setListPostsMenu] = useState<TypePost[]>([])
    const [cartAmount, setCartAmount] = useState<number>();
    const searchRef = useRef<any>(null);
    const [menuState, setMenuState] = useState(false);
    const [searchScreen, setSearchScreen] = useState(false);

    const counter = useSelector((state: any) => state.counter);
    const menuIndex = useSelector((state: any) => state.menuIndex);
    const assign = (number: any) => {
        return {
            type: "ASSIGN",
            payload: number,
        }
    }

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(assign(getNumberItemInCart()));
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
        setSearchScreen(false);
    }

    const handleSearchInput = (e: any) => {
        searchRef.current.value = e;
        // setSearchInput(e);
    }

    //data


    const SearchScreen = () => {
        return (
            <Box className="search-screen-wrapper"
                 sx = {{display: searchScreen?'flex':'none'}}
            >
                <Box className="cancel-icon-wrapper">
                    <FontAwesomeIcon onClick={() => setSearchScreen(false)} className="cancel-icon" icon={faTimes}></FontAwesomeIcon>
                </Box>
                <Box className="search-wrapper">
                    <input ref={searchRef} onChange={(e) => handleSearchInput(e.target.value) } className="search-input" placeholder="Bạn muốn tư vấn gì?"></input>
                    <Button onClick={() => handleSearch(searchRef.current.value)} className="search-button">
                        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </Button>
                </Box>
            </Box>
        )
    }

    const MenuHeaderMobile = () => {
        const [dropDownState, setDropDownState] = useState("none");

        const enableDropDown = () => {
            setDropDownState( (dropDownState == "block") ? "none" : "block");
        }


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

        const MenuDropDown = (props: any) => {

            if (props.show) return (
                <Box className="drop-down-menu" style={{display: dropDownState}}>
                    {ListPostsMenu}
                </Box>
            )
            else return null;
        }


        const ArrowDownIcon = (props: any) => {
            if (props.show) return (
                <FontAwesomeIcon onClick={enableDropDown} className="arrow-icon" icon={faCaretDown}></FontAwesomeIcon>
            )
            else return null;
        }


        const ListPostsMenu = listPostsMenu?.map((element, index, ind) => {
            // eslint-disable-next-line react/jsx-key
            return (<p key={index} onClick={() => redirect(element.name)}>{element.name}</p>);
        });

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
                    // backgroundColor: 'red'
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
                className="big-menu-mobile"
                sx={{display: menuState?'flex':'none'}}
            >
                <Box className="cancel-icon-wrapper"
                     sx = {{ borderBottom: '1px solid #d7d7d7'}}
                >
                    <FontAwesomeIcon onClick={() => setMenuState(false)} className="cancel-icon" icon={faTimes}></FontAwesomeIcon>
                </Box>
                <Box className="menu-bars-wrapper">
                    {listMenu}
                </Box>
            </Box>
        );
    };

    const gotoCart = () => {
        route.push({
            pathname: "/cart",
        });
    };

    const openMenu = () => {
        console.log('kkk');
        setMenuState(true);
    }

    const IntroductionHeader = () => {
        const MenuMobile = () => {
            return (
                <Box className="menu-icon-wrapper laptop-none">
                    <FontAwesomeIcon onClick={() => openMenu()} icon={faBars}></FontAwesomeIcon>
                </Box>
            )
        }

        const SearchMobile = () => {
            return (
                <Box className="search-icon-wrapper laptop-none">
                    <FontAwesomeIcon onClick={() => setSearchScreen(true)} icon={faSearch}></FontAwesomeIcon>
                </Box>
            )
        }

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
                <Button onClick={() => handleSearch(searchRef.current.value)} className="search-button">
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </Button>
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
                <p className="cart-title-p" style={{fontWeight: '700', fontSize: '17px'}}>Giỏ hàng</p>
                <Box className="cart-amount">
                    <p>{counter}</p>
                </Box>
            </Box>;
        };

        return (
            <Box className="introduction-header-container">
                <MenuMobile></MenuMobile>
                <Logo></Logo>
                <Search></Search>
                <PhoneService></PhoneService>
                <SearchMobile></SearchMobile>
                <Cart></Cart>
            </Box>
        );
    };

    //export components
    return (
        <Container className="header-container" disableGutters maxWidth={false}>
            <Logo></Logo>
            <Menu></Menu>
        </Container>
    );
};

