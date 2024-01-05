import {Box, Button} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React from "react";
import Link from "next/link";

export default function SignUp() {
    // const route = useRouter();
    const SignUpForm = () => {
        return (
            <Box className="signup-wrapper">
                <Box className="title-container">
                    <p>sign up</p>
                    <p>Create your account to get full access</p>
                </Box>
                <Box className="form-container">
                    <Box className="input-container">
                        <label>Username</label>
                        <input type="text" placeholder="Enter Username"></input>
                    </Box>
                    <Box className="input-container">
                        <label>Email Address</label>
                        <input type="text" placeholder="Enter Email Address"></input>
                    </Box>
                    <Box className="input-container">
                        <label>Password</label>
                        <input type="password" placeholder="Enter Password"></input>
                    </Box>
                    <Box className="input-container">
                        <label>Confirm Password</label>
                        <input type="password" placeholder="Confirm Password"></input>
                    </Box>
                </Box>
                <Box className="signup-button-container">
                    <Box className="sign-up-container">
                        <p>Already have an account?
                        </p>
                        <Link href={"login"}>Login</Link>
                        <p>here</p>
                    </Box>
                    <Button className="signup-button">sign up</Button>
                </Box>
            </Box>
        )
    }

    return (
        <Box className="signup-container" sx={{ width: "100vw"}}>
            <SignUpForm></SignUpForm>
        </Box>
    );
}
