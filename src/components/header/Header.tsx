import { Box } from "@mui/material";
import Container from "@mui/system/Container";
import React from "react";
import Logo from "@/components/header/logo/Logo";
import Menu from "@/components/header/menu/Menu";
import InteractiveIcon from "@/components/header/interactive-icon/InteractiveIcon";

export default function Header() {
    return (
        <Container className="header-container" disableGutters maxWidth={false}>
            <Box className="header-wrapper">
                <Logo></Logo>
                <Menu></Menu>
                <InteractiveIcon></InteractiveIcon>
            </Box>
        </Container>
    );
};

