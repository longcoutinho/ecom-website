import {Box, Button} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, {useState} from "react";
import Link from "next/link";
import {signIn} from "@/services/userService";
import {HTTP_STATUS, PageURL} from "@/constants";
import {useRouter} from "next/router";
import {redirectUrl, saveUserToSessionStorage} from "@/constants/FnCommon";

export default function Login() {
    const route = useRouter();
    const LoginForm = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [notify, setNotify] = useState('');
        const [notifyColor, setNotifyColor] = useState('');
        const Notify = (props: any) => {
            return (
                <Box className="notify-text-container">
                    <p style={{color: props.textColor}} className="notify-text">{props.text}</p>
                </Box>
            )
        }

        const doSignIn = async () => {
                const request = {
                    username: username,
                    password: password,
                }
                signIn(request).then(
                    (res) => {
                        if (res.status == HTTP_STATUS.OK) {
                            console.log(res.data);
                            saveUserToSessionStorage(res.data);
                            redirectUrl(route, PageURL.HOME);
                        }
                    }).catch((err) => {
                    setNotify(err.response.data);
                    setNotifyColor('red');
                });
        }

        return (
            <Box className="login-wrapper">
                    <Box className="title-container">
                        <p>login</p>
                        <p>Enter Login details to get access</p>
                    </Box>
                    <Box className="form-container">
                        <Box className="input-container">
                            <label>Username</label>
                            <input type="text"
                                   value={username}
                                   onChange={e => { setUsername(e.currentTarget.value); }}
                                   placeholder="Username"></input>
                        </Box>
                        <Box className="input-container">
                            <label>Password</label>
                            <input type="password"
                                   value={password}
                                   onChange={e => { setPassword(e.currentTarget.value); }}
                                   placeholder="Enter Password"></input>
                        </Box>
                        <Notify textColor={notifyColor} text={notify}></Notify>
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
                            <Link href={PageURL.SIGNUP}>Sign Up</Link>
                            <p>here</p>
                        </Box>
                        <Button
                            onClick={doSignIn}
                            className="login-button">Login</Button>
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
