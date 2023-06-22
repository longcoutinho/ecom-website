import { PAGE_TITLE } from "@/constants";
import Page from "@/layouts";
import { Box, Button, Input, Paper } from "@mui/material";
import PaginationMui from '@mui/material/Pagination';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "@/components/Image";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
<link rel="preconnect" href="https://fonts.gstatic.com"></link>;
import {Post} from "../../interfaces/response"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Pagination, Autoplay } from "swiper";

export default function PostComponent() {
  const [listPosts, setListPost] = useState<Post[]>([]);
  const [listFeaturedPosts, setListFeaturedPosts] = useState<Post[]>([
    {
      titleImageUrlStream: "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?cs=srgb&dl=pexels-engin-akyurt-1486861.jpg&fm=jpg",
      title: "Bai viet 1",
      author: "Kim Ca",
      type: 1,
      content: "abc",
      id: 1,
      createAt: "abc",
      introduction: "Nếu bạn muốn được Tư vấn hoặc tham gia khóa học xem Số Mệnh bằng các",
    },
    {
      titleImageUrlStream: "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?cs=srgb&dl=pexels-engin-akyurt-1486861.jpg&fm=jpg",
      title: "Bai viet 1",
      author: "Kim Ca",
      type: 1,
      content: "abc",
      id: 1,
      createAt: "abc",
      introduction: "Nếu bạn muốn được Tư vấn hoặc tham gia khóa học xem Số Mệnh bằng các",
    },
    {
      titleImageUrlStream: "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?cs=srgb&dl=pexels-engin-akyurt-1486861.jpg&fm=jpg",
      title: "Bai viet 1",
      author: "Kim Ca",
      type: 1,
      content: "abc",
      id: 1,
      createAt: "abc",
      introduction: "Nếu bạn muốn được Tư vấn hoặc tham gia khóa học xem Số Mệnh bằng các",
    },
    {
      titleImageUrlStream: "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?cs=srgb&dl=pexels-engin-akyurt-1486861.jpg&fm=jpg",
      title: "Bai viet 1",
      author: "Kim Ca",
      type: 1,
      content: "abc",
      id: 1,
      createAt: "abc",
      introduction: "Nếu bạn muốn được Tư vấn hoặc tham gia khóa học xem Số Mệnh bằng các",
    },
    {
      titleImageUrlStream: "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?cs=srgb&dl=pexels-engin-akyurt-1486861.jpg&fm=jpg",
      title: "Bai viet 1",
      author: "Kim Ca",
      type: 1,
      content: "abc",
      id: 1,
      createAt: "abc",
      introduction: "Nếu bạn muốn được Tư vấn hoặc tham gia khóa học xem Số Mệnh bằng các",
    },
  ]);
  const [pageDefault, setPageDefault] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [title, setTitle] = useState("");
  const [postsType, setPostsType] = useState<string>("");
  const {push, query} = useRouter();
  const textInput = useRef<any>();

  const focusInput = () => {
    textInput.current.focus();
  }

  useEffect(() => {
    if (query.type !== undefined) {
      // @ts-ignore
      setPostsType(query.type);
    }
    if (query.page !== undefined && query.pageSize !== undefined) {
      axios({
        method: "get",
        url: "http://10.248.158.167:1112/posts",
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
        url: "http://10.248.158.167:1112/posts",
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
  
  const redirectPagination = (page: string, pageSize: any) => {
    var pageNumber = parseInt(page);
    pageNumber--;
    push({
      pathname: "/posts",
      search: "?" + new URLSearchParams({ 
        page: pageNumber.toString(),
        pageSize: pageSize,
        title: title
       }),
    });
  };

  const redirectSearchInput = (page: string, pageSize: any, title: any) => {
    var pageNumber = parseInt(page);
    pageNumber--;
    push({
      pathname: "/posts",
      search: "?" + new URLSearchParams({ 
        page: pageNumber.toString(),
        pageSize: pageSize,
        title: title,
       }),
    });
  }

  const paginationChange = (e: any) => {
    redirectPagination(e, 9);
  }

  const searchPosts = (event: any) => {
    if (event.key == 'Enter') {
      console.log(event.key);
      console.log(event.target.value);
      
        setTitle(event.target.value);
        redirectSearchInput("1", 9, event.target.value)
    }
  }

  const handleChangeInput = (e: any) => {
    setTitle(e.target.value);
  }

  const SearchInput = () => {
    return (
      <Box
        className="search-input full-width center flex-row"
      >
        <input autoFocus value={title} onChange={handleChangeInput} className="list-posts-input-content" onKeyDown={searchPosts} placeholder="Nội dung tìm kiếm" ref={textInput}/>
      </Box>
    );
  };

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
        <SwiperSlide key={index} className="swiper-slide-featured-posts">
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
            onSwiper={(swiper: any) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
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
          {listPosts.slice(0,3).map((post, index) => {
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
                    <h1 style={{ fontSize: "18px", fontWeight: "700px", color: "red"}} className="title-list-posts-element">
                      {post.title}
                    </h1>
                    <p
                      className="introduction-list-posts-element"
                      style={{ fontSize: "14px", color: "red", marginTop: "20px"}}
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
        {/*<PaginationMui count={pageCount} defaultPage={pageDefault} variant="outlined" onChange={(e: any, value) => paginationChange(value)} sx={{color:'white'}}/>*/}
      </Box>
    );
  };

  const MenuPostComponent = () => {
    const listMenuItems = [
      "Tin phong thủy",
      "Vật phẩm phong thủy",
      "Sự kiện",
      "Ứng dụng vạn sự kỳ thư",
      "Tin trà",
    ];
    const ListMenuPostComponent = listMenuItems.map((item, index) => {
      return (
        <Box key={index} sx={{ marginLeft: "20px" }}>
          <p style={{ color: "gray", textTransform: "uppercase" }}>{item}</p>
        </Box>
      );
    });
    return (
      <Box sx={{ height: "50px", paddingTop:'30px' }} className="flex-row full-width center">
        {ListMenuPostComponent}
      </Box>
    );
  };

  const Title = () => {
    return (
        <Box className="post-page-title-wrapper">
          <p>{postsType}</p>
        </Box>
    )
  }

  const Post = () => {
    return (
        <Box className="post-page-content-container">
          <Box className="post-page-content-wrapper">
            <Title></Title>
            <ListFeaturedPosts></ListFeaturedPosts>
            <ListPosts></ListPosts>
          </Box>
          <Box className="post-page-ad-wrapper">
            <Box className="post-page-register-wrapper">
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
              <Box></Box>
            </Box>
          </Box>
        </Box>
    );
  }

  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={0}>
      <Box className="post_content">
        <Post></Post>
      </Box>
    </Page>
  );
}
