import { PAGE_TITLE } from "@/constants";
import Page from "@/layouts";
import { Box, Button, Input } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import TitleContent from "@/components/TitleContent";
import Image from "@/components/Image";

interface Post {
  image: String,
  title: String,
  author: String,
  createTime: String,
}

export default function Home() {
  //datas
  const listFeaturedNews = [
    "Bài viết 1",
    "Bài viết 2",
    "Bài viết 3",
    "Bài viết 4",
    "Bài viết 5",
  ];

  //components
  const ListFeaturedNews = () => {
    const arr = listFeaturedNews.map((content, index) => (
      <SwiperSlide key={index} className="swiper-slide-featured-news">
        {content}
      </SwiperSlide>
    ));
    return (
      <Box
        className="list-featured-news"
        sx={{
          width: "100%",
          height: "70%",
        }}
      >
        <Swiper
          className="swiper-featured-news"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={100}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper: any) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {arr}
          ...
        </Swiper>
      </Box>
    );
  };
  const SearchInput = () => {
    return (
      <Box
        className="search-input"
        sx={{
          width: "100%",
          height: 100,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input sx={{}}></Input>
        <Button>Tìm kiếm</Button>
      </Box>
    );
  };
  return (
    <Page title={PAGE_TITLE.HOME}>
      <Box
        className="content"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          className="header-content"
          sx={{
            width: "100%",
            height: 600,
            display: "flex",
            flexDirection: "column",
            borderBottom: "2px solid red",
          }}
        >
          <SearchInput></SearchInput>
          <ListFeaturedNews></ListFeaturedNews>
        </Box>
        <Box
          className="focus-content"
          sx={{
            width: "100%",
            height: 1600,
            display: "flex",
            flexDirection: "row",
            borderBottom: "2px solid red",
          }}
        >
          <Box
          className="left-focus-content"
          sx={{
            width: "70%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            borderBottom: "2px solid red",
          }}
          >
            <TitleContent titleContent={"Các bài viết mới nhất"}></TitleContent>
            <Box
            className="table-newest-posts"
            sx={{
              width: "100%",
              height: "700px",
              display: "flex",
              flexDirection: "row",
              border: "2px solid red",
            }}
            >
              <Box
              className="biggest-table-newest-posts"
              sx={{
                width: "70%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                border: "2px solid red",
              }}
              >
                <Box
                className="image-biggest-table-newest-posts"
                sx={{
                  width: "100%",
                  height: "70%",
                  display: "flex",
                  flexDirection: "column",
                  border: "2px solid red",
                }}
                >
                  <Image src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"></Image>
                </Box>
              </Box>
              <Box
                className="small-table-newest-posts"
                sx={{
                  width: "100%",
                  height: "70%",
                  display: "flex",
                  flexDirection: "column",
                  border: "2px solid red",
                  backgroundColor: "red"
                }}
              >
                <Box
                className="image-small-table-newest-posts"
                sx={{
                  width: "100%",
                  height: "33.33%",
                  border: "2px solid red",
                }}
                >
                  <Image src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"></Image>
                </Box>
                <Box
                className="image-small-table-newest-posts"
                sx={{
                  width: "100%",
                  height: "33.33%",
                  border: "2px solid red",
                }}
                >
                  <Image src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"></Image>
                </Box>
                <Box
                className="image-small-table-newest-posts"
                sx={{
                  width: "100%",
                  height: "33.33%",
                  border: "2px solid red",
                }}
                >
                  <Image src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"></Image>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
          className="right-focus-content"
          sx={{
            width: "30%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            borderBottom: "2px solid red",
          }}
          >
          </Box>
          
        </Box>
      </Box>
    </Page>
  );
}
