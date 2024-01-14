import {Box, Link} from "@mui/material";
import Container from "@mui/system/Container";
import React from "react";
import Logo from "@/components/header/logo/Logo";
import Menu from "@/components/header/menu/Menu";
import InteractiveIcon from "@/components/header/interactive-icon/InteractiveIcon";
import {PageURL} from "@/constants";

export default function BannerTitle(props: any) {
    return (
        <Container className="banner-title-container" disableGutters maxWidth={false}>
            <Box className="banner-title-wrapper">
                <p>{props.title}</p>
            </Box>
            <Box>
                <Link href={PageURL.HOME}>Home</Link>
                <Link href={props.link}>{props.title_link}</Link>
            </Box>
        </Container>
    );
}