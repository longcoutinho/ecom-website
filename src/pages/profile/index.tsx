import {PAGE_TITLE, PageURL} from "@/constants";
import Page from "@/layouts";
import {Box, Button} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/constants/FnCommon"
import React, {useEffect, useState} from "react";
import BannerTitle from "@/components/BannerTitle";
import {COMMON_TEXT} from "@/constants/message";
import {User} from "@/interfaces";
import {getUserInfo} from "@/constants/FnCommon";

export default function Profile() {
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        setUser(getUserInfo());
    }, [])
    return (
        <Page title={PAGE_TITLE.HOME} menuIndex={1}>
            <Box className="profile-page-container" sx={{ width: "100vw" }}>
                <Box className="profile-page-wrapper">
                    <Box className="name-and-email-container">
                        <p>{user?.fullName}</p>
                        <p>{user?.email}</p>
                    </Box>
                    <Box className="user-info-container">
                        <Box className="profile-user-info-element">
                            <p>Email ID</p>
                            <p>{user?.email}</p>
                        </Box>
                        <Box className="profile-user-info-element">
                            <p>Full Name</p>
                            <p>{user?.fullName}</p>
                        </Box>
                        <Box className="profile-user-info-element">
                            <p>Phone Number</p>
                            <p>{user?.phoneNumber}</p>
                        </Box>
                        <Box className="profile-user-info-element">
                            <p>DOB</p>
                            <p>2/11/2000</p>
                        </Box>
                    </Box>
                    <Box>
                        <Button>Edit profile</Button>
                    </Box>
                </Box>
            </Box>
        </Page>
    );
}
