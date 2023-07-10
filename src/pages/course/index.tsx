import { Box, Button, Divider } from "@mui/material";
import Page from "@/layouts";
import {listCourse, listItems, listMenuCourse, PAGE_TITLE} from "@/constants";
import {Course} from "@/interfaces/response";
import React from "react";
import {formatVND} from "@/constants/FnCommon";

export default function Courses() {
    const ListMenuItemComponent = () => {
        const menu = listMenuCourse.map((items, index) => {
            return (
                <Box className="list-items-search-container-elements" key={index}>{items}</Box>
            )
        });
        return (
            <Box className="list-items-search-container-content">
                {menu}
            </Box>
        )
    }

    const ListCourseComponents = (props: any) => {
        return (
            <Box className="list-course-item-page-container">
                <Box className="big-course-wrapper">
                    <Box className="big-course-title-wrapper">
                        <p className="big-course-title">TỬ VI CẤP TỐC</p>
                        <p className="big-course-introduction">Chỉ 12 buổi luận Tử vi như
                            chuyên gia cùng thầy Lê
                            Thanh Cần</p>
                    </Box>
                    <Box className="big-course-register-button">
                        <button>Đăng ký ngay</button>
                    </Box>
                </Box>
                {listCourse.map((course, index) => {
                    return (
                        <Box
                            key={index}
                            className="list-items-element-course"
                        >
                            <Box className="image-and-content-element-item">
                                <Box className="list-items-image">
                                    <img
                                        alt=""
                                        id="image-post_item"
                                        src={course.titleImageUrlStream}
                                    />
                                </Box>
                                <Box className="list-posts-content">
                                    <h1
                                        style={{
                                            fontSize: "17px",
                                            fontWeight: "700px",
                                            color: "rgb(0,32,96)",
                                            textTransform: "none",
                                        }}
                                        className="title-list-item-home"
                                    >
                                        {course.title}
                                    </h1>

                                    <p
                                        className="content-course"
                                        style={{
                                            fontSize: "15px",
                                            color: "rgb(0,32,96)",
                                            margin: "8px 0",
                                            width: "100%",
                                        }}
                                    >
                                        Giảng viên: {course.teacher}
                                    </p>
                                    <div className="item-desciption">
                                        <p>Thời lượng: {course.videoTime} phút</p>
                                    </div>
                                </Box>
                            </Box>
                            <Button className="btn-details-post-course">Xem ngay</Button>
                        </Box>
                    );
                })}
            </Box>
        );
    };

    return (
        <Page title={PAGE_TITLE.HOME} menuIndex={0}>
            <Box className="home-page-content " sx={{ width: "100vw" }}>
                <Box className="list-courses-content">
                    <Box className="list-courses-search-container">
                        <Box className="list-items-search-container-title">
                            <p>Đào tạo</p>
                        </Box>
                        <ListMenuItemComponent></ListMenuItemComponent>
                    </Box>
                    <Box
                        className="list-courses-course-page-wrapper"
                    >
                        <ListCourseComponents></ListCourseComponents>
                    </Box>
                </Box>
            </Box>
        </Page>
    )
}