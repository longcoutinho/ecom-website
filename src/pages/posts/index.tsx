import {Backend, PAGE_TITLE} from "@/constants";
import Page from "@/layouts";
import { Box, Button, Input, Paper } from "@mui/material";
import PaginationMui from '@mui/material/Pagination';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
<link rel="preconnect" href="https://fonts.gstatic.com"></link>;
import {Post, TypePost} from "../../interfaces/response"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Pagination, Autoplay } from "swiper";
import {router} from "next/client";
import Link from "next/link";

export default function PostComponent() {
  const [listPosts, setListPost] = useState<Post[]>([]);
  const [listFeaturedPosts, setListFeaturedPosts] = useState<Post[]>([]);
  const [pageDefault, setPageDefault] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  // const [title, setTitle] = useState("");
  const [postsType, setPostsType] = useState<string>("");
  const [listTypePost, setListTypePost] = useState<TypePost[]>([]);
  const {push, query} = useRouter();
  const textInput = useRef<any>();
  const title = useRef<any>(null);

  useEffect(() => {
    console.log(query.type);
    // @ts-ignore
    setPostsType(query.type);
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
    if (query.page !== undefined && query.pageSize !== undefined) {
      axios({
        method: "get",
        url: Backend.URL + "/posts",
        params: {
          page: query.page,
          pageSize: query.pageSize,
          title: query.title,
        },
      }).then(
        (res) => {
          setListPost(res.data.content);
          setPageDefault(res.data.pageable.pageNumber + 1);
          setPageCount(res.data.totalPages);
        },
        (err) => {
          console.log(err);
        }
      );
      axios({
        method: "get",
        url: Backend.URL + "/posts",
      }).then(
        (res) => {
          setListFeaturedPosts(res.data.content);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }, [query]);

  //datas
  
  const redirectPagination = (page: string, pageSize: any, typePost: any) => {
    var pageNumber = parseInt(page);
    pageNumber--;
    let params = new URLSearchParams();
    params.append('page', pageNumber.toString());
    params.append('pageSize', pageSize);
    if (typePost != "" && typePost != undefined) params.append('type', typePost);
    push({
      pathname: "/posts",
      search: "?" + params,
    });
  };

  const redirectSearchInput = (page: string, pageSize: any, type: any, title: any) => {
    var pageNumber = parseInt(page);
    pageNumber--;
    let builder = new URLSearchParams();
    builder.set('page', pageNumber.toString());
    if (type != undefined) builder.set('type', type);
    if (title != "") builder.set('title', title);
    builder.set('pageSize', "9");
    push({
      pathname: "/posts",
      search: "?" + builder
    });
  }

  const paginationChange = (e: any) => {
    console.log(postsType);
    redirectPagination(e, 9, postsType);
  }

  const searchPosts = (event: any) => {
    if (event.key == 'Enter') {
        title.current.value = event.target.value;
        redirectSearchInput("1", 9, postsType, title.current.value);
    }
  }

  const handleChangeInput = (e: any) => {
    title.current.value = e.target.value;
  }

  const SearchInputMobile = () => {
    return (
        <Box
            sx={{marginTop: "40px"}}
            className="posts-search-input display-laptop"
        >
          <input autoFocus ref={title} onChange={handleChangeInput} className="list-posts-input-content" onKeyDown={searchPosts} placeholder="Tìm kiếm bài viết" />
        </Box>
    );
  }

  const SearchInput = () => {
    return (
      <Box
          sx={{marginTop: "40px"}}
        className="posts-search-input laptop-view"
      >
        <input autoFocus ref={title} onChange={handleChangeInput} className="list-posts-input-content" onKeyDown={searchPosts} placeholder="Tìm kiếm bài viết" />
      </Box>
    );
  };

  const RelatedPost = () => {
    return (
        <Box className="related-post-container">
          {
            listPosts.slice(0,5).map((relatedPost, index) => (
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

  const ListFeaturedPosts = () => {
    const options = {
      slidesPerView: 1,
      spaceBetween: 50,
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        690: {
          slidesPerView: 1,
        },
        1100: {
          slidesPerView: 1,
        },
        1300: {
          slidesPerView: 1,
        },
        1600: {
          slidesPerView: 1,
        },
        1900: {
          slidesPerView: 1,
        },
      },
    };

    const ListFeaturedPostsComponent = listFeaturedPosts.slice(0,4).map((featuredPost, index) => (
      <Box key={index}>
        <SwiperSlide onClick={() => redirect(featuredPost.id)} key={index} className="swiper-slide-featured-posts">
          <div className="slide-post">
           <div className="posts-image" style={{cursor:'pointer'}}>
             <img
              src={featuredPost.titleImageUrlStream}
              className="swiper-slide-featured-posts-image"
              alt=""
            
         /></div>
          <div className="swiper-slide-featured-posts-content">
            <p className="post-page-para-tilte">{featuredPost?.title}</p>
            <p className="post-page-para-intro">{featuredPost?.introduction}</p>
            <p className="post-page-create-at">{featuredPost?.createAt}</p>
          </div></div>
        </SwiperSlide>
      </Box>
    ));

    const ListReadMost = listFeaturedPosts.slice(0, 4).map((post, index) => (
      <Box key={index} className="list-read-most-content">
        <Box className="rounded-index">
          <p>{index + 1}</p>
        </Box>
        <p onClick={() => redirect(post.id)} className="list-read-most-title" style={{marginLeft: "10px"}}>{post.title}</p>
      </Box>
    ));

    return (
      <Box className="list-posts-page-featured-container">
        <Box className="list-posts-page-featured-wrapper">
          <Swiper
            className="list-posts-featured-swiper"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            {...options}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
          >
            {ListFeaturedPostsComponent}
            ...
          </Swiper>
        </Box>
      </Box>
    )
  }

  const redirect = (id: any) => {
    push({
      pathname: "/posts/detail",
      search: "?" + new URLSearchParams({ id: id }),
    });
  };


  const ListPosts = () => {
    const ListPostComponents = (props: any) => {
      return (
        <Box
          className="list-posts-container"
        >
          {listPosts.map((post, index) => {
            return (
              <Box
                onClick={() => redirect(post.id)}
                key={index}
                className="list-posts-element"
              >
                <Box className="image-and-content-element">
                  <Box className="list-posts-image">
                    <img
                      alt=""
                      id="image-post_tintuc"
                      src={post.titleImageUrlStream}
                    />
                  </Box>
                  <Box
                    className="list-posts-content"
                  >
                    <h1 style={{ fontSize: "18px", fontWeight: "700", color: "rgb(0,32,96)", textTransform: "uppercase"}} className="title-list-posts-element">
                      {post.title}
                    </h1>
                    <p
                      className="introduction-list-posts-element"
                      style={{ fontSize: "10px", color: "rgb(0,32,96)", marginTop: "0px"}}
                    >
                      {post.introduction}
                    </p>
                    <p>{post.createAt}</p>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      );
    };

    return (
      <Box
        className="list-posts-wrapper"
        sx={{
          padding: "0",
          flexGrow: 1,
        }}
      >
        <ListPostComponents />
        {<PaginationMui count={pageCount} defaultPage={pageDefault} variant="outlined" onChange={(e: any, value) => paginationChange(value)} sx={{color:'white'}}/>}
      </Box>
    );
  };

  const listType = [
    "Tin phong thủy",
    "Vật phẩm phong thủy",
    "Sự kiện",
    "Ứng dụng vạn sự kỳ thư",
    "Tin trà",
  ];

  const Title = () => {
    return (
        <Box className="post-page-title-wrapper">
          <p>{postsType}</p>
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
      <Link style={{marginLeft: "5px"}} href="/posts?page=0&pageSize=9">Kho tàng tri thức</Link>
      <PostTypeDirectory></PostTypeDirectory>
      <SearchDirectiory></SearchDirectiory>
    </Box>)
  }

  const TypePostMobile = () => {
    if (postsType !== undefined) return (<Box></Box>)
    else return (
        <Box className="menu-type-post-wrapper display-laptop">
          <Box className="post-page-title">
            <p>Kho tàng tri thức</p>
          </Box>
          <Box className="menu-type-post-content">
            {listTypePost.map((typePost, index) => (
                <Box onClick={() => redirectSearchInput("1", 9, typePost.name, title.current.value)} className="menu-type-post-element" key={index}>
                  <p>{typePost.name}</p>
                </Box>
            ))}
          </Box>
        </Box>
    )
  }

  const TypePost = () => {
    if (postsType !== undefined) return (<Box></Box>)
    else return (
        <Box className="menu-type-post-wrapper laptop-view">
          <Box className="post-page-title">
            <p>Kho tàng tri thức</p>
          </Box>
          <Box className="menu-type-post-content">
            {listTypePost.map((typePost, index) => (
                <Box onClick={() => redirectSearchInput("1", 9, typePost.name, title.current.value)} className="menu-type-post-element" key={index}>
                  <p>{typePost.name}</p>
                </Box>
            ))}
          </Box>
        </Box>
    )
  }

  const MobileView = () => {
    return (
        <Box>
          <TypePostMobile></TypePostMobile>
          <SearchInputMobile></SearchInputMobile>
        </Box>
    )
  }

  const Post = () => {
    return (
        <Box className="post-page-content-container">
          <Box className="post-page-content-wrapper">
            <Directory></Directory>
            <Title></Title>
            <MobileView></MobileView>
            <ListFeaturedPosts></ListFeaturedPosts>
            <ListPosts></ListPosts>
          </Box>
          <Box className="post-page-ad-wrapper">
            <SearchInput></SearchInput>
            <TypePost></TypePost>
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
    );
  }

  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={0} cartAmount={5}>
      <Box className="post_content">
        <Post></Post>
      </Box>
    </Page>
  );
}
