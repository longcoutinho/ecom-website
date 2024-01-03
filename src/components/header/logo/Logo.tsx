import {Box} from "@mui/material";
import React from "react";
import {redirectUrl} from "@/constants/FnCommon";
import {PageURL} from "@/constants";
import {useRouter} from "next/router";

export default function Logo() {
    const router = useRouter();
    return (
        <Box onClick={() => redirectUrl(router, PageURL.HOME)} className="logo-wrapper">
            <Box className="logo-container">
                <img
                    alt=""
                    id="logo"
                    src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png.webp"
                />
            </Box>
        </Box>
    );
};