import { PAGE_TITLE } from "@/constants";
import Page from "@/layouts";
import { Box, Button, Input, List } from "@mui/material";
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
  createTime: Date,
  type: Number,
}

interface Course {
  title: String,
  studyTime: String,
  openDate: Date, 
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
  const listPaginatorPosts = [
    "Bài viết 1",
    "Bài viết 1",
    "Bài viết 2",
    "Bài viết 3",
    "Bài viết 4",
    "Bài viết 5",
  ]
  const listCoursesDetail:Course[] = [
    {
      title: 'Phong thủy ứng dụng cho cuộc sống',
      studyTime: '7:00',
      openDate: new Date
    },
    {
      title: 'Phong thủy ứng dụng cho cuộc sống',
      studyTime: '7:00',
      openDate: new Date
    },
    {
      title: 'Phong thủy ứng dụng cho cuộc sống',
      studyTime: '7:00',
      openDate: new Date
    }
  ]
  const listPosts:Post[] = [
    {
      image: "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date,
      type: 1,
    },
    {
      image: "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date,
      type: 1,
    },
    {
      image: "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date,
      type: 1,
    },
    {
      image: "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date,
      type: 2,
    },
    {
      image: "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date,
      type: 2,
    },
    {
      image: "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date,
      type: 2,
    },
    {
      image: "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date,
      type: 3,
    },
    {
      image: "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date,
      type: 3,
    },
    {
      image: "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date,
      type: 3,
    },
  ]
  //components
  const ListServices = () => {
    const arr = listFeaturedNews.map((content, index) => (
      <SwiperSlide key={index} className="swiper-slide-featured-news">
        {content}
      </SwiperSlide>
    ));
    return (
      <Box
        className="list-services-content flex-col"
        sx={{
          width: "100%",
          borderBottom: "2px solid #8F0101",
          height: "200px",
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

  const ListCourses = () => {
    const ListCoursesDetail = listCoursesDetail.map((course) => {
      return (
        <Box
            className="list-courses-detail-element flex-col full-width one-third-col"
        >
          <h1>{course.title}</h1>
          <p>{course.studyTime}</p>
          <p>{course.openDate.toDateString()}</p>
        </Box>
      )
    })
    return (
      <Box
        className="list-courses-content flex-row"
        sx={{
          width: "100%",
          borderBottom: "2px solid #8F0101",
          height: "350px",
        }}
      >
        <Box
          className="list-courses-introduce full-height half-row"
        >
          <Image src="http://hongkyfengshui.vn/vnt_upload/weblink/Slide2bb_1.png"/>
        </Box>
        <Box
          className="list-cources-detail flex-col full-height half-row"
        >
          {ListCoursesDetail}
        </Box>
      </Box>
    );
  }

  const ListPosts = () => {
    const ListPostComponent = (props:any) => {
      const ListPostsElement = listPosts.map((post) => {
        if (post.type == props.type) {
          return (
            <Box
                className="list-posts-detail-element flex-col full-width one-third-col"
            >
              <h1>{post.title}</h1>
              <p>{post.createTime.toDateString()}</p>
            </Box>
          )
        }
      })
      return (
        <Box
          className="list-posts-detail flex-col one-third-row full-height"
            >{ListPostsElement}
        </Box>
      )
    }
    
    return (
      <Box
        className="list-posts-content flex-row full-width full-height"
        sx={{
          height: "300px",
        }}
      >
        <ListPostComponent type="1"></ListPostComponent>
        <ListPostComponent type="2"></ListPostComponent>
        <ListPostComponent type="3"></ListPostComponent>
      </Box>
    );
  }

  const SearchInput = () => {
    return (
      <Box
        className= "search-input full-width center flex-row"
        sx={{
          height: '100px',
        }}
      >
        <Input sx={{}}></Input>
        <Button>Tìm kiếm</Button>
      </Box>
    );
  };
  const ListPaginatorPosts = () => {
    const listPostJSX = listPaginatorPosts.map((post, index) => (
      <Box key={index}
        className="list-paginator-posts full-width"
        sx={{
          height: '266px',
          border: '2px solid #8F0101',
          marginTop: '100px',
        }}
      >
        <p>{post}</p>
      </Box>
    ))
    return (
      <Box
          className="wrap-list-paginator-posts full-width flex-col"
          sx={{
            height: 'auto',
            marginTop: '100px',
            borderTop: '2px solid #8F0101'
          }}
      >
        {listPostJSX}
      </Box>
    )
  }
  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={0}>
      <Box className="content full-width flex-col">
        <Box
          className="header-content full-width flex-col"
          sx={{
            height: '600px',
            backgroundSize: '100% 100%',
            backgroundImage: 'url("http://hongkyfengshui.vn/vnt_upload/weblink/HomeSlide-1-1360x600_1.jpg")'
          }}
        >
        </Box>
        <Box
          className="focus-content full-width flex-col"
          sx={{
            borderBottom: "2px solid red",
            padding: '0px 300px 0px 300px',
          }}
        >
          <ListServices></ListServices>
          <ListCourses></ListCourses>  
          <ListPosts></ListPosts>
        </Box>
      </Box>
    </Page>
  );
}
