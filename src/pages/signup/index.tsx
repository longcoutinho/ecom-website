import {Box, Button} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";
import Link from "next/link";

export default function SignUp() {
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
                        <input type="text" placeholder="Enter Password"></input>
                    </Box>
                    <Box>
                        <Box>
                            <input type={"checkbox"}/>
                            <label>keep me logged in</label>
                        </Box>
                        <Box>
                            <Link href={"/signup"}>forgot password?</Link>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box>
                        <p>Don&apos;t have an account?
                        </p>
                        <Link href={"login"}>Login</Link>
                        <p>here</p>
                    </Box>
                    <Box>
                        <Button>Login</Button>
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
