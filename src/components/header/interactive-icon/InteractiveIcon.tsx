import {Box, Divider, Link} from "@mui/material";
import React, {useEffect, useState} from "react";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useRouter} from "next/router";
import {deleteUserInfo, getUserInfo, redirectUrl} from "@/constants/FnCommon";
import {PageURL} from "@/constants";
import {COMMON_TEXT} from "@/constants/message";
import {User} from "@/interfaces";

export default function InteractiveIcon() {
    const router = useRouter();
    //cart
    const CartIcon = () => {
        return (
            <FontAwesomeIcon id="cart-shopping-iconn" icon={faCartShopping}></FontAwesomeIcon>
        )
    }
    //search
    const SearchIcon = () => {
        return (
            <FontAwesomeIcon id="cart-shopping-iconn" icon={faSearch}></FontAwesomeIcon>
        )
    }

    const UserIcon = () => {
        const goToLoginPage = () => {
            redirectUrl(router, PageURL.LOGIN);
        }

        const DropDownUser = () => {
            const [user, setUser] = useState<User | null>(null);
            useEffect(() => {
                setUser(getUserInfo());
            }, []);

            const signOut = () => {
                setUser(null);
                deleteUserInfo();
            }

            if (user == null) {
                return (
                    <Box className="user-info-hover-container">
                        <Box className="user-info-element">
                            <Link href={PageURL.LOGIN}>{COMMON_TEXT.LOGIN}</Link>
                            <p>	&nbsp;/&nbsp;</p>
                            <Link href={PageURL.SIGNUP}>{COMMON_TEXT.SIGNUP}</Link>
                        </Box>
                    </Box>
                )
            }
            else {
                return (
                    <Box className="user-info-hover-container">
                            <Box className="user-info-element">
                                <Link href={"/profile"}>My profile</Link>
                            </Box>
                            <Box className="user-info-element">
                                <p>Edit profile</p>
                            </Box>
                            <Box className="user-info-element" onClick={signOut}>
                                <p>Sign out</p>
                            </Box>
                    </Box>
                )
            }
        }

        return (
            <Box className="user-icon-wrapper">
                <FontAwesomeIcon className="user-icon" onClick={() => goToLoginPage()} id="cart-shopping-iconn" icon={faUser}></FontAwesomeIcon>
                <DropDownUser></DropDownUser>
            </Box>
        )
    }



    return (
        <Box className="interactive-icon-wrapper">
            <SearchIcon></SearchIcon>
            <CartIcon></CartIcon>
            <UserIcon></UserIcon>
        </Box>
    );
};
