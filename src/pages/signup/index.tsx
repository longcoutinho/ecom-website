import {Box, Button} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import "../../constants/message";
import {COMMON_TEXT, SIGNUP_PAGE} from "@/constants/message";
import "@/constants/FnCommon";
import {isNullOrEmpty, isValidLength} from "@/constants/FnCommon";
import {signUp} from "@/services/userService";
import {HTTP_STATUS} from "@/constants";

export default function SignUp() {
    // const route = useRouter();
    const SignUpForm = () => {
        const [username, setUsername] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [notify, setNotify] = useState('');
        const [notifyColor, setNotifyColor] = useState('');
        const [fullName, setFullName] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');

        useEffect(() => {
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setNotify('');
            setFullName('');
            setPhoneNumber('');
        }, [])

        const Notify = (props: any) => {
            return (
                <Box className="notify-text-container">
                    <p style={{color: props.textColor}} className="notify-text">{props.text}</p>
                </Box>
            )
        }

         const doSignUp = async () => {
            if (isNullOrEmpty(username)) setNotify(SIGNUP_PAGE.EMPTY_USERNAME);
            else if (!isValidLength(username, 6, 12)) setNotify(SIGNUP_PAGE.INVALID_LENGTH_USERNAME);
            else if (isNullOrEmpty(email)) setNotify(SIGNUP_PAGE.EMPTY_EMAIL);
            else if (isNullOrEmpty(password)) setNotify(SIGNUP_PAGE.EMPTY_PASSWORD);
            else if (!isValidLength(password, 6, 24)) setNotify(SIGNUP_PAGE.INVALID_LENGTH_PASSWORD);
            else if (isNullOrEmpty(confirmPassword)) setNotify(SIGNUP_PAGE.EMPTY_CONFIRM_PASSWORD);
            else if (password != confirmPassword) setNotify(SIGNUP_PAGE.INVALID_CONFIRM_PASSWORD);
            else {
                const request = {
                    username: username,
                    password: password,
                    email: email,
                    fullName: fullName,
                    phoneNumber: phoneNumber
                }
                signUp(request).then(
                    (res) => {
                    if (res.status == HTTP_STATUS.OK) {
                        setNotify(COMMON_TEXT.SUCCESS);
                        setNotifyColor('green');
                    }
                }).catch((err) => {
                    setNotify(err.response.data);
                    setNotifyColor('red');
                });
            }
        }

        return (
            <Box className="signup-wrapper">
                <Box className="title-container">
                    <p>{SIGNUP_PAGE.SIGNUP}</p>
                    <p>{SIGNUP_PAGE.TITLE}</p>
                </Box>
                <Box className="form-container">
                    <Box className="input-container">
                        <label>{COMMON_TEXT.FULL_NAME}</label>
                        <input type="text" value={fullName}
                               onChange={e => { setFullName(e.currentTarget.value); }}
                               placeholder="Enter full name"></input>
                    </Box>
                    <Box className="input-container">
                        <label>{COMMON_TEXT.PHONE_NUMBER}</label>
                        <input type="text" value={phoneNumber}
                               onChange={e => { setPhoneNumber(e.currentTarget.value); }}
                               placeholder="Enter phone number"></input>
                    </Box>
                    <Box className="input-container">
                        <label>{COMMON_TEXT.EMAIL_ADDRESS}</label>
                        <input type="text"
                               value={email}
                               onChange={e => { setEmail(e.currentTarget.value); }}
                               placeholder="Enter Email Address"></input>
                    </Box>
                    <Box className="input-container">
                        <label>{COMMON_TEXT.USERNAME}</label>
                        <input type="text" value={username}
                               onChange={e => { setUsername(e.currentTarget.value); }}
                               placeholder="Enter Username"></input>
                    </Box>
                    <Box className="input-container">
                        <label>{COMMON_TEXT.PASSWORD}</label>
                        <input type="password"
                               value={password}
                               onChange={e => { setPassword(e.currentTarget.value); }}
                               placeholder="Enter Password"></input>
                    </Box>
                    <Box className="input-container">
                        <label>{COMMON_TEXT.CONFIRM_PASSWORD}</label>
                        <input type="password"
                               value={confirmPassword}
                               onChange={e => { setConfirmPassword(e.currentTarget.value); }}
                               placeholder="Confirm Password"></input>
                    </Box>
                    <Notify textColor={notifyColor} text={notify}></Notify>
                </Box>
                <Box className="signup-button-container">
                    <Box className="sign-up-container">
                        <p>Already have an account?
                        </p>
                        <Link href={"login"}>{COMMON_TEXT.LOGIN}</Link>
                        <p>here</p>
                    </Box>
                    <Button onClick={doSignUp} className="signup-button">{SIGNUP_PAGE.SIGNUP}</Button>
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
