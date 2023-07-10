import { PAGE_TITLE } from "@/constants";
import Page from "@/layouts";
import { PATH_PAGE } from "@/routes/path";
import {Box, Checkbox, Divider, Grid, Input, Paper} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import {useState} from "react";

export default function Tutru() {
    const route = useRouter();
    const redirect = (path: any) => {
        route.push(path);
    }

    const [isFirstTab, setIsFirstTab] = useState(true);

    return (
        <Page title={PAGE_TITLE.LAPLA} menuIndex={2}>
            <Box className="lapla-container">
                <Box className="lapla-wrapper">
                    <Box className="lapla-content">
                        <Box className="lapla-title">
                            <p className="lapla-bigtitle">Lập lá số tứ trụ</p>
                            <p className="lapla-smalltitle">Slogan: Do better, be better!</p>
                        </Box>
                        <Box className="lapla-title-content">
                            <Box className="lapla-title-content-wrapper">
                                <Box>
                                    <p>Họ và tên: </p>
                                    <input type="text" />
                                    <p>Giới tính </p>
                                    <p>Nam </p>
                                    <Checkbox />
                                    <p>Nữ </p>
                                    <Checkbox />
                                </Box>
                                <Box>
                                    <p>Ngày sinh </p>
                                    <input type="text" />
                                    <p>Giờ sinh </p>
                                    <p>Dương </p>
                                    <Checkbox />
                                    <p>Âm </p>
                                    <Checkbox />
                                </Box>
                                <Box>
                                    <p>Giờ sinh</p>
                                    <input type="time" />
                                </Box>
                                <Box>
                                    <p>Năm xem</p>
                                    <input type="number" min="1900" max="2099" step="1" value="2023" />
                                </Box>
                                <Box>
                                    <button>Lập lá số</button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Page>
    );
}
