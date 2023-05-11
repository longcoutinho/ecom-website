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
  const [listFeaturedPosts, setListFeaturedPosts] = useState<Post[]>([]);
  const [pageDefault, setPageDefault] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [title, setTitle] = useState("");
  const router = useRouter();
  const textInput = useRef<any>();

  const focusInput = () => {
    textInput.current.focus();
  }

  useEffect(() => {
    if (router.query.page !== undefined && router.query.pageSize !== undefined) {
      axios({
        method: "get",
        url: "http://10.248.158.167:1112/posts",
        params: {
          page: router.query.page,
          pageSize: router.query.pageSize,
          title: router.query.title,
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
  }, [router.query]);

  //datas
  
  const redirectPagination = (page: string, pageSize: any) => {
    var pageNumber = parseInt(page);
    pageNumber--;
    router.push({
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
    router.push({
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
            {/* <p>{featuredPost.title}</p>
            <p>{featuredPost.introduction}</p> */}
            <p style={{color:'white',cursor:'pointer'}}>{featuredPost?.title}</p>
            <p style={{color:'#777777'}}>{featuredPost?.introduction}</p>
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
      <Box className="list-posts-featured-container">
        <Box className="list-posts-featured-wrapper">
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
        <Box className="introduction-posts-wrapper">
          <Box className="list-posts-image-hightlight" sx={{cursor:'pointer'}}>
                <SearchInput></SearchInput>
                </Box>
                <Box
                  className="list-read-most"
                >
                  <Box>
                    <p style={{textTransform: 'uppercase', fontSize: '16px', fontWeight: '500'}}>Đọc nhiều</p>
                  </Box>
                  <Box>
                    {ListReadMost}
                  </Box>
                </Box>
        </Box>
      </Box>
    )
  }

  const redirect = (id: any) => {
    router.push({
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
                    <h1 style={{ fontSize: "18px", fontWeight: "700px"}} className="title-list-posts-element">
                      {post.title}
                    </h1>
                    <p
                      className="introduction-list-posts-element"
                      style={{ fontSize: "14px", color: "#777777", marginTop: "20px"}}
                    >
                      {post.introduction}
                    </p>
                  </Box>
                </Box>
                <Button className="btn-details">Xem chi tiết</Button>
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
        <PaginationMui count={pageCount} defaultPage={pageDefault} variant="outlined" onChange={(e: any, value) => paginationChange(value)} sx={{color:'white'}}/>
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
  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={0}>
      <Box className="content full-width">
        <Box
          className="header-content full-width flex-row"
          sx={{
            position: "relative",
            padding: "0px 200px 70px 200px",
            height: "350px",
            backgroundSize: "cover",
            backgroundImage:
              'url("http://hongkyfengshui.vn/vnt_upload/weblink/slide_1.jpg")',
            justifyContent: "flex-end",
            alignItems: "flex-end",
            zIndex: -1,
          }}
        >
          <Box
            className="flex-col center full-width full-height"
            sx={{ color: "white" }}
          >
            <p
              style={{
                textTransform: "uppercase",
                fontSize: "30px",
                marginTop: "70px",
              }}
            >
              <span
                style={{
                  fontSize: "30px",
                  padding: "10px 30px 10px 30px",
                  border: "2px solid white",
                }}
              >
                Tin tức
              </span>
            </p>
          </Box>
        </Box>
        <div className="width-full" style={{backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.1) , rgba(0, 0, 0, 0.7) 60px, rgba(0, 0, 0, 0.99) 107px)  ",
            backgroundClip: "padding-box",}}>
        <Box
          className="body-content_home"
          
        >
          <MenuPostComponent></MenuPostComponent>
          <ListFeaturedPosts></ListFeaturedPosts>
          <ListPosts></ListPosts>
        </Box>
        </div>
      </Box>
    </Page>
  );
}
