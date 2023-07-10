import { PAGE_TITLE } from "@/constants";
import Page from "@/layouts";
import { PATH_PAGE } from "@/routes/path";
import {Box, Checkbox, Divider, Grid, Input, Paper} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import {useState} from "react";

export default function QueDich() {
    const route = useRouter();
    const redirect = (path: any) => {
        route.push(path);
    }

    const [isFirstTab, setIsFirstTab] = useState(true);

    const QueDichContent = (props: any) => {
        if (props.isFirstTab === true) {
            return (
                <Box>
                    <Divider />
                    <Box className="quedich-content-wrapper">
                        <Box className="quedich-content-element">
                            <p className="quedich-content-title">Lần gieo</p>
                            <p className="quedich-index">Lần 6</p>
                            <p className="quedich-index">Lần 5</p>
                            <p className="quedich-index">Lần 4</p>
                            <p className="quedich-index">Lần 3</p>
                            <p className="quedich-index">Lần 2</p>
                            <p className="quedich-index">Lần 1</p>
                        </Box>
                        <Box className="quedich-content-element">
                            <p className="quedich-content-title">Âm Dương</p>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </Box>
                        <Box className="quedich-content-element">
                            <p className="quedich-content-title">Hào động</p>
                            <Checkbox className="checkbox-quedich" />
                            <Checkbox className="checkbox-quedich" />
                            <Checkbox className="checkbox-quedich" />
                            <Checkbox className="checkbox-quedich" />
                            <Checkbox className="checkbox-quedich" />
                            <Checkbox className="checkbox-quedich" />
                        </Box>
                    </Box>
                </Box>
            )
        }
        else {
            return (
                <Box className="seri-tien-wrapper">
                    <p>Nhập số seri tiền: </p>
                    <input type="text"/>
                </Box>
            )
        }
    }

    const QueDichTitle = (props: any) => {
        if (props.selected == false) {
            return (
                <Box onClick={() => doSomething()} sx={{backgroundColor: "gray", color: "white"}} className="quedich-title-content">
                    <p>{props.content}</p>
                </Box>
            )
        }
        else {
            return (
                <Box sx={{backgroundColor: "white", color: "rgb(0,32,96)"}} className="quedich-title-content">
                    <p>{props.content}</p>
                </Box>
            )
        }
    }

    const doSomething = () => {
        setIsFirstTab(!isFirstTab);
    }

    return (
        <Page title={PAGE_TITLE.LAPLA} menuIndex={2}>
            <Box className="lapla-container">
                <Box className="lapla-wrapper">
                    <Box className="lapla-content">
                        <Box className="lapla-title">
                            <p className="lapla-bigtitle">Lập quẻ dịch</p>
                            <p className="lapla-smalltitle">Slogan: Do better, be better!</p>
                        </Box>
                        <Box className="quedich-container">
                            <Box className="quedich-title">
                                <QueDichTitle selected={isFirstTab} content={'lập quẻ lục hào'}></QueDichTitle>
                                <QueDichTitle selected={!isFirstTab} content={'lập quẻ seri tiền'}></QueDichTitle>
                            </Box>
                                <Box className="quedich-content">
                                    <Box className="type-of-work">
                                        <p>Việc cần xem: </p>
                                        <input type="text"/>
                                    </Box>
                                    <Box className="time-of-work">
                                        <p>Ngày (Dương lịch):</p>
                                        <Box className="hour-of-work">
                                            <input type="date"/>
                                            <Box className="detail-hour-of-work">
                                                <p>Giờ:</p>
                                                <input style={{marginLeft: "10px"}} type="time"/>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            <QueDichContent isFirstTab={isFirstTab}></QueDichContent>
                            <Box className="quedich-button">
                                <button>Lập quẻ</button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Page>
    );
}
