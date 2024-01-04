import {PAGE} from "@/constants/message";
import {listServicesTitle, HomePage, PostsService, ItemService} from "@/constants";
import {formatVND} from "@/constants/FnCommon";
import {getAllPosts, getServicePosts} from "@/services/postsService"
import {getTypeofPosts} from "@/services/typeService";
import {getAllItems} from "@/services/itemService";
import Page from "@/layouts";
import { Box, Button, CircularProgress} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {Navigation, Scrollbar, Pagination, A11y, Autoplay} from "swiper";
import {Post, Item, Service, TypePost} from "@/interfaces/response";
import {useEffect, useRef, useState} from "react";
import { useRouter } from "next/router";
import {useDispatch} from "react-redux";
<link rel="preconnect" href="https://fonts.gstatic.com"></link>;

export default function Login() {
    const route = useRouter();
    const LoginForm = () => {
        return (
            <Box className="login-wrapper">
                <Box className="form-register-wrapper">
                    <Box className="form-register-title-container">
                        <p>Đăng nhập</p>
                    </Box>
                    <Box className="form-register-content-container">
                        <input type="text" placeholder="Họ và tên"></input>
                        <input type="text" placeholder="Số điện thoại"></input>
                        <input type="text" placeholder="Email"></input>
                        <input type="text" placeholder="Địa chỉ"></input>
                        <input type="text" placeholder="SĐT"></input>
                        <button>Đăng nhập</button>
                    </Box>
                </Box>
            </Box>
        )
    }

    const Register = () => {
        return (
            <Box className="register-home-page-wrapper">
                <Box className="form-register-wrapper">
                    <Box className="form-register-title-container">
                        <p>Đăng ký tư vấn</p>
                    </Box>
                    <Box className="form-register-content-container">
                        <input type="text" placeholder="Họ và tên"></input>
                        <input type="text" placeholder="Số điện thoại"></input>
                        <input type="text" placeholder="Địa chỉ"></input>
                        <button>Đăng ký</button>
                    </Box>
                </Box>
            </Box>
        )
    }

    return (
        <Box className="login-container" sx={{ width: "100vw"}}>
            <LoginForm></LoginForm>
        </Box>
    );
}
