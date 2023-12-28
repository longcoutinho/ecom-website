import React from "react";
import {Box} from "@mui/material";
import {IMenuItem} from "@/interfaces";
import Link from "next/link";
import {MenuTitle} from "@/constants";

export default function Menu() {
    const listMenu = MenuTitle.map((menuItem: IMenuItem, index: number) => (
        <Box key={index} className="menu-item">
            <Box className="menu-element">
                <Link href={menuItem.redirect_link}>{menuItem.title}</Link>
            </Box>
        </Box>
    ));
    return (
        <Box className="big-menu">
            <Box className="menu-bars-wrapper">
                {listMenu}
            </Box>
        </Box>
    );
};