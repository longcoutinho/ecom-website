import {Box} from "@mui/material";
import React from "react";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function InteractiveIcon() {
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
        return (
            <FontAwesomeIcon id="cart-shopping-iconn" icon={faUser}></FontAwesomeIcon>
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