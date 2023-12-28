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
                    src="https://www.kimca.net/wp-content/uploads/2022/03/logo.png"
                />
            </Box>
        </Box>
    );
};