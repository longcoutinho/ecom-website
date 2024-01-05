import {Box, Button} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";
import Link from "next/link";

export default function Login() {
    // const route = useRouter();
    const LoginForm = () => {
        return (
            <Box className="login-wrapper">
                    <Box className="title-container">
                        <p>login</p>
                        <p>Enter Login details to get access</p>
                    </Box>
                    <Box className="form-container">
                        <Box className="input-container">
                            <label>Username</label>
                            <input type="text" placeholder="Username"></input>
                        </Box>
                        <Box className="input-container">
                            <label>Password</label>
                            <input type="password" placeholder="Enter Password"></input>
                        </Box>
                        <Box className="forgot-password-container">
                            <Box className="remember-me-container">
                                <input type={"checkbox"}/>
                                <label>keep me logged in</label>
                            </Box>
                            <Box className="forgot-pass-container">
                                <Link href={"/signup"}>forgot password?</Link>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="login-button-container">
                        <Box className="sign-up-container">
                            <p>Don&apos;t have an account?
                            </p>
                            <Link href={"signup"}>Sign Up</Link>
                            <p>here</p>
                        </Box>
                        <Button className="login-button">Login</Button>
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
