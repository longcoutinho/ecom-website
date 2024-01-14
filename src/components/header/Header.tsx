import {Box, Link} from "@mui/material";
import Container from "@mui/system/Container";
import React from "react";
import Logo from "@/components/header/logo/Logo";
import Menu from "@/components/header/menu/Menu";
import InteractiveIcon from "@/components/header/interactive-icon/InteractiveIcon";
import {PageURL} from "@/constants";

export default function Header() {
    return (
        <Container className="header-container" disableGutters maxWidth={false}>
            <Box className="header-wrapper">
                <Logo></Logo>
                <Menu></Menu>
                <InteractiveIcon></InteractiveIcon>
            </Box>
            <Box className="black-header">
                <p>Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer Shop Now</p>
                <Link href={PageURL.ITEM}>Shop now</Link>
            </Box>
        </Container>
    );
}