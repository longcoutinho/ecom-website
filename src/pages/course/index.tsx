import { Box, Button, Divider } from "@mui/material";
import Page from "@/layouts";
import {Backend, listCourse, listItems, PAGE_TITLE} from "@/constants";
import {Course, TypePost} from "@/interfaces/response";
import React, {useEffect, useRef, useState} from "react";
import {formatVND} from "@/constants/FnCommon";
import { useRouter } from "next/router";

import Link from "next/link";
import axios from "axios";
import PaginationMui from "@mui/material/Pagination";

export default function Courses() {
    const [postsType, setPostsType] = useState<string>("");
    const [listMenuCourse, setListTypeCourse] = useState<TypePost[]>([]);
    const {push, query} = useRouter();
    const [pageDefault, setPageDefault] = useState(1);
    const [pageCount, setPageCount] = useState(1);
    const title = useRef<any>(null);

    useEffect(() => {
        axios({
            method: "get",
            url: Backend.URL + "/type/2",
        }).then(
            (res) => {
                console.log(res.data);
                setListTypeCourse(res.data);
            },
            (err) => {
                console.log(err);
            }
        );
    }, [])

    const SearchInput = () => {
        return (
            <Box
                className="posts-search-input laptop-view"
            >
                <input autoFocus ref={title} className="list-posts-input-content" placeholder="Tìm kiếm khóa học" />
            </Box>
        );
    };

    const paginationChange = (e: any) => {
        console.log(postsType);
    }

    const ListMenuItemComponent = () => {
        const menu = listMenuCourse.map((items, index) => {
            return (
                <Box className="list-items-search-container-elements" key={index}>
                    <p>{items.name}</p>
                </Box>
            )
        });
        return (
            <Box className="list-items-search-container-content">
                {menu}
            </Box>
        )
    }

    const Directory = () => {
        const PostTypeDirectory = () => {
            if (postsType === undefined || postsType == "") {
                return (<Box></Box>)
            }
            else {
                return (
                    <Box sx={{display: "flex", flexDirection: "row"}}>
                        <p className="directiory-icon"> {'>>'} </p>
                        <a style={{textTransform: "capitalize", marginLeft: "5px"}} href="#">{postsType}</a>
                    </Box>
                )
            }
        }

        const SearchDirectiory = () => {
            if (query.title == undefined) {
                return (<Box></Box>)
            }
            else {
                return (
                    <Box sx={{display: "flex", flexDirection: "row"}}>
                        <p className="directiory-icon"> {' >> '} </p>
                        <a style={{marginLeft: "5px"}} href="#">Tìm kiếm với từ khóa `&apos;`{query.title}`&apos;`</a>
                    </Box>
                )
            }
        }

        return (<Box className="directory-wrapper">
            <a href="./">Trang chủ</a>
            <p className="directiory-icon"> {' >> '} </p>
            <Link style={{marginLeft: "5px"}} href="/posts?page=0&pageSize=9">Khóa học</Link>
            <PostTypeDirectory></PostTypeDirectory>
            <SearchDirectiory></SearchDirectiory>
        </Box>)
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
            <Box className="home-page-content">
                <Box className="course-wrapper">
                    <Directory></Directory>
                    <Box className="list-courses-content-wrapper">
                        <Box className="list-courses-search-container">
                            <SearchInput></SearchInput>
                            <Box className="list-courses-menu-wrapper">
                                <Box className="list-items-search-container-title">
                                    <p>Đào tạo</p>
                                </Box>
                                <ListMenuItemComponent></ListMenuItemComponent>
                            </Box>
                            <Box className="post-page-register-wrapper laptop-view">
                                <Box className="post-page-title">
                                    <p>Đăng ký xem tử vi</p>
                                </Box>
                                <Box className="post-page-register-content">
                                    <Box className="post-page-input-wrapper">
                                        <p>Họ và tên</p>
                                        <input type="text"></input>
                                    </Box>
                                    <Box className="post-page-input-wrapper">
                                        <p>Số điện thoại</p>
                                        <input type="text"></input>
                                    </Box>
                                    <button>Đăng ký</button></Box>
                            </Box>
                        </Box>
                        <Box
                            className="list-courses-course-page-wrapper"
                        >
                            <ListCourseComponents></ListCourseComponents>
                            {<PaginationMui count={pageCount} defaultPage={pageDefault} variant="outlined" onChange={(e: any, value) => paginationChange(value)} sx={{color:'white'}}/>}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Page>
    )
}