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
            height: 600,
            display: "flex",
            flexDirection: "column",
            borderBottom: "2px solid red",
          }}
        >
          <TitleContent titleContent={"Các bài viết mới nhất"}></TitleContent>
        </Box>
      </Box>
    </Page>
  );
}
