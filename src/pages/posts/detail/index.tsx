import {Backend, PAGE_TITLE} from "@/constants";
import Page from "@/layouts";
import {Box, Divider, TextField, Button, Fade, Alert} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Post, TypePost, Comment} from "../../../interfaces/response";
import Link from "next/link";

<link rel="preconnect" href="https://fonts.gstatic.com"></link>;

export default function PostDetail() {
  const [detailPost, setListPost] = useState<Post>();
  const [listTypePost, setListTypePost] = useState<TypePost[]>([
  ]);
  const [listRelatedPost, setListRelatedPost] = useState<Post[]>([]);
    const route = useRouter();

  useEffect(() => {
    axios({
      method: "get",
      url: Backend.URL + "/type/0",
    }).then(
        (res) => {
          console.log(res.data);
          setListTypePost(res.data);
        },
        (err) => {
          console.log(err);
        }
    );
    if (route.query.id !== undefined) {
      const URL = Backend.URL + "/posts/" + route.query.id;
      console.log(route.query.id);
      axios({
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        method: "get",
        url: URL,
      }).then(
        (res) => {
          const newArr = res.data as Post;
          console.log(res.data);
          setListPost(newArr);
          getRelatedPost(newArr.typeId);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }, [route.query]);
  //datas
  //components

    const getRelatedPost = (typeId: any) => {
        axios({
            method: "get",
            url: Backend.URL + "/posts",
            params: {
                typeId: typeId,
            }
        }).then(
            (res) => {
                console.log(res.data);
                setListRelatedPost(res.data.content);
            },
            (err) => {
                console.log(err);
            }
        );
    }

  const findTypePostName = (id: any) => {
    for(let i = 0; i < listTypePost.length; i++) {
      if (id === listTypePost[i].id) return listTypePost[i].name;
    }
    return "";
  }

    const redirect = (id: any) => {
        route.push({
            pathname: "/posts/detail",
            search: "?" + new URLSearchParams({ id: id }),
        });
    };

  const DetailPost = () => {
    return (
        <Box
          className="detail-posts-focus-content"
        >
          <div className="detail-posts-focus"
          dangerouslySetInnerHTML={{ __html: detailPost?.content?detailPost.content:"" }}></div>
        </Box>
    );
  }

  const Directory = () => {
    const PostTypeDirectory = () => {
        const link = "/posts?type=" + findTypePostName(detailPost?.typeId) + "&page=0&pageSize=9";
        return (
            <Box sx={{display: "flex", flexDirection: "row", flexWrap: 'wrap'}}>
              <p className="directiory-icon"> {' >> '} </p>
              <a style={{textTransform: "capitalize", marginLeft: "5px"}} href={link}>{findTypePostName(detailPost?.typeId)}</a>
              <p className="directiory-icon"> {' >> '} </p>
                <a style={{textTransform: "capitalize", marginLeft: "5px"}} href="#">{detailPost?.title}</a>
            </Box>
        )
    }
    return (<Box className="directory-wrapper">
      <a href="">Trang chủ</a>
      <p className="directiory-icon"> {'>>'} </p>
      <Link style={{marginLeft: "5px"}} href="/posts?page=0&pageSize=9">Kho tàng tri thức</Link>
      <PostTypeDirectory></PostTypeDirectory>
    </Box>)
  }

  const RelatedPost = () => {
      return (
          <Box className="related-post-container">
              {
                  listRelatedPost.slice(0, 15).map((relatedPost, index) => (
                      <Box key={index} onClick={() => redirect(relatedPost.id)} className="related-post-element">
                          <Box className="related-post-image">
                              <img src={relatedPost.titleImageUrlStream} />
                          </Box>
                          <Box className="related-post-content">
                              <p>{relatedPost.title}</p>
                              <p>{relatedPost.createAt}</p>
                          </Box>
                      </Box>
                  ))
              }
          </Box>
      )
  }

  const CommentComponent = () => {
      // list comment data
      const [listComment, setListComment] = useState<Comment[]>([]);
    
      // alert status
      const [alertVisibility, setAlertVisibility] = useState(false);
      const [alertContent, setAlertContent] = useState("");
      const [alertType, setAlertType] = useState<any>(""); // 0: success, 1: error

      const getComment = (postId: any) => {
          axios({
              method: "get",
              url: Backend.URL + "/comment/" + postId,
          }).then(
              (res) => {
                  console.log(res.data);
                  setListComment(res.data.content);
              },
              (err) => {
                  console.log(err);
              }
          );
      }


      useEffect(() => {
          getComment(route.query.id);
      }, []);

      const AlertComponent = () => {
          return(
              <Box sx={{position: "fixed", top: "0px", right: "0px"}}>
                  <Fade
                      in={alertVisibility} //Write the needed condition here to make it appear
                      timeout={{ enter: 1000, exit: 1000 }} //Edit these two values to change the duration of transition when the element is getting appeared and disappeard
                      addEndListener={() => {
                          setTimeout(() => {
                              setAlertVisibility(false)
                          }, 2000);
                      }}
                  >
                      <Alert severity={alertType} variant="standard" className="alert">
                          {/*<AlertTitle>Success</AlertTitle>*/}
                          {alertContent}
                      </Alert>
                  </Fade>
              </Box>
          )
      }

      const PostComment = () => {
        const reset = () => {
            setNameComment("");
            setEmailComment("");
            setContentComment("");
        }

        const createComment = () => {
            axios({
                method: "post",
                url: Backend.URL + "/comment",
                data: {
                    name: nameComment,
                    email: emailComment,
                    content: contentComment,
                    serviceId: route.query.id,
                }
            }).then(
                (res) => {
                    console.log(res.data);
                    getComment(route.query.id);
                    setAlertVisibility(true);
                    setAlertType("success");
                    setAlertContent("Thêm bình luận thành công!");
                    reset();
                },
                (err) => {
                    setAlertVisibility(true);
                    setAlertType("error");
                    // console.log(err.response.data);
                    setAlertContent(err.response.data);
                }
            );
        }
        // input new comment
      const [nameComment, setNameComment] = useState("");
      const [emailComment, setEmailComment] = useState("");
      const [contentComment, setContentComment] = useState("");

        return (
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", width: "100%"}}>
                  <Box sx={{display: "flex", flexDirection: "row", width: "100%"}}>
                      <TextField sx={{width: "50%", marginTop: "20px"}}
                                 id="title-post"
                                 label="Tên Nickname"
                                 onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                     console.log(event.target.value);
                                     setNameComment(event.target.value);
                                 }}
                                 className="email-input"
                      />
                      <TextField sx={{width: "50%", marginTop: "20px"}}
                                 id="title-post"
                                 label="Email(Không bắt buộc)"
                                 onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                     console.log(event.target.value);
                                     setEmailComment(event.target.value);
                                 }}
                                 className="email-input"
                      />
                  </Box>
                  <TextField sx={{width: "100%", marginTop: "20px"}}
                             id="title-post"
                             label="Bình luận"
                             onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                 console.log(event.target.value);
                                 setContentComment(event.target.value);
                             }}
                  />
                  <Button className="email-button" onClick={() => createComment()}>Bình luận</Button>
              </Box>
        )
      }

      return (
          <Box>
              <p style={{color: "rgb(0,32,96)", fontSize: "20px", fontWeight: "700"}}>Bình luận</p>
              <Box sx={{marginTop: "10px", gap: "10px", display: "flex", flexDirection: "column", width: "100%"}}>
                  {listComment.map((comment, ind) => (
                      <Box key={ind} sx={{display: "flex", flexDirection: "row", backgroundColor: "#F2F2F2", borderRadius: "20px",
                          padding: "10px 20px", gap: "10px"}}>
                          <Box sx={{width: "30px", height: "30px"}}>
                              <img style={{width: "100%", height: "100%", objectFit: "cover"}} src="https://www.nicepng.com/png/detail/115-1150821_default-avatar-comments-sign-in-icon-png.png"></img>
                          </Box>
                          <Box sx={{width: "100%"}}>
                              <p style={{color: "rgb(0,32,96)", fontSize: "15px", fontWeight: "700"}}>{comment.name}&#40;{comment.email}&#41;</p>
                              <Box sx={{backgroundColor: 'white', padding: '10px', marginTop: "5px"}}>
                                <p style={{color: "rgb(0,32,96)", fontSize: "15px", fontWeight: "500"}}>{comment.content}</p>
                                </Box>
                          </Box>
                      </Box>
                  ))}
              </Box>
              <Divider sx={{marginTop: "20px", backgroundColor: "rgb(0,32,96)"}}/>
              <p style={{color: "rgb(0,32,96)", fontSize: "20px", fontWeight: "700", marginTop: "20px"}}>Tham gia bình luận!</p>
              <PostComment></PostComment>
              <AlertComponent></AlertComponent>
          </Box>
      )
  }

  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={0}>
      <Box className="post-detail-content-wrapper">
          <Box className="post-detail-title-wrapper">
              <Directory></Directory>
              <Box
                  className="posts-detail-title"
              >
                  <p style={{fontSize:'30px', textTransform: "uppercase", fontWeight: "700"}}>{detailPost?.title}</p>
              </Box>
              <Divider />
          </Box>
        <Box className="post-detail-content-container">
            <Box className="post-detail-content-content">
                <Box className="detail-posts-focus-title-container">
                    <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>
                    <p className="detail-posts-focus-title">23:00 15-9-2022</p>
                </Box>
                <Box className="post-detail-content">
                    <DetailPost></DetailPost>
                </Box>
                <CommentComponent></CommentComponent>
            </Box>
          <Box className="post-page-ad-wrapper">
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
              <Box>
                  <Box className="post-page-title">
                      <p>Bài viết liên quan</p>
                  </Box>
                  <RelatedPost></RelatedPost>
              </Box>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}
