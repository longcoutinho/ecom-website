import { PAGE_TITLE } from "@/constants";
import Page from "@/layouts";
import { Box, Button, Input, List } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar, A11y } from "swiper";
import Image from "@/components/Image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { type } from "os";
import zIndex from "@mui/material/styles/zIndex";

<link rel="preconnect" href="https://fonts.gstatic.com"></link>;
interface TypePost {
  id: Number;
  name: string;
}

interface Post {
  image: string;
  title: string;
  author: string;
  createTime: Date;
  type: Number;
}

interface Course {
  title: string;
  studyTime: string;
  openDate: Date;
}

interface Service {
  name: string;
  image: string;
}

export default function Home() {
  //datas
  const listPaginatorPosts = [
    "Bài viết 1",
    "Bài viết 1",
    "Bài viết 2",
    "Bài viết 3",
    "Bài viết 4",
    "Bài viết 5",
  ];
  const listServices: Service[] = [
    {
      name: "dịch vụ tư vấn",
      image: "http://hongkyfengshui.vn/vnt_upload/weblink/Slide2aa_1.png",
    },
    {
      name: "chia sẻ kinh nghiệm",
      image: "http://hongkyfengshui.vn/vnt_upload/weblink/Slide2aa_1.png",
    },
    {
      name: "hệ thống đào tạo",
      image: "http://hongkyfengshui.vn/vnt_upload/weblink/Slide2aa_1.png",
    },
    {
      name: "hệ thống đào tạo",
      image: "url(http://hongkyfengshui.vn/vnt_upload/weblink/Slide2aa_1.png)",
    },
    {
      name: "hệ thống đào tạo",
      image: "url(http://hongkyfengshui.vn/vnt_upload/weblink/Slide2aa_1.png)",
    },
  ];
  const listCoursesDetail: Course[] = [
    {
      title: "Phong thủy ứng dụng cho cuộc sống",
      studyTime: "7:00",
      openDate: new Date(),
    },
    {
      title: "Phong thủy ứng dụng cho cuộc sống",
      studyTime: "7:00",
      openDate: new Date(),
    },
    {
      title: "Phong thủy ứng dụng cho cuộc sống",
      studyTime: "7:00",
      openDate: new Date(),
    },
  ];
  const listPosts: Post[] = [
    {
      image:
        "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date(),
      type: 1,
    },
    {
      image:
        "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date(),
      type: 1,
    },
    {
      image:
        "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date(),
      type: 1,
    },
    {
      image:
        "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date(),
      type: 2,
    },
    {
      image:
        "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date(),
      type: 2,
    },
    {
      image:
        "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date(),
      type: 2,
    },
    {
      image:
        "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date(),
      type: 3,
    },
    {
      image:
        "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày xuân",
      author: "longhvh",
      createTime: new Date(),
      type: 3,
    },
    {
      image:
        "http://hongkyfengshui.vn/vnt_upload/news/12_2022/thumbs/370_crop_DSC09729.jpg",
      title: "Trà quý cho sức khỏe vàng ngày",
      author: "longhvh",
      createTime: new Date(),
      type: 3,
    },
  ];
  const listPostType: TypePost[] = [
    {
      id: 1,
      name: "Tin tức",
    },
    {
      id: 2,
      name: "Kinh Nghiệm",
    },
    {
      id: 3,
      name: "Dịch vụ tư vấn",
    },
  ];
  //components
  const ListServices = () => {
    const arr = listServices.map((service, index) => (
      <Box key={index}>
        <SwiperSlide key={index} className="swiper-slide-featured-news">
          <Image
            src={service.image}
            className="swiper-service-image"
            alt=""
          ></Image>
          <Link className="swiper-service-link" href="#">
            {service.name}
          </Link>
        </SwiperSlide>
      </Box>
    ));
    const options = {
      slidesPerView: 1,
      spaceBetween: 50,
      breakpoints: {
        690: {
          slidesPerView: 2,
        },
        1100: {
          slidesPerView: 2,
        },
        1300: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 4,
        },
      },
    };
    return (
      <Box
        className="list-services-content flex-col"
        sx={{
          width: "100%",
          height: "300px",
          paddingTop: "40px",
        }}
      >
        <Swiper
          className="swiper-featured-news"
          // install Swiper modules
          modules={[Navigation, Scrollbar, A11y]}
          {...options}
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
    const ListCoursesDetail = listCoursesDetail.map((course, index) => {
      return (
        <Box
          key={index}
          className="list-courses-detail-element flex-col full-width one-third-col"
          sx={{
            backgroundColor: "#333333",
            padding: "20px",
          }}
        >
          <Box
            sx={{ height: "20px" }}
            className="full-width flex-row center-no-dir"
          >
            <Image
              alt=""
              className="full-height"
              src="http://hongkyfengshui.vn/modules/main/images/main/icon.png"
            />
            <h1
              style={{
                color: "white",
                textTransform: "uppercase",
                fontSize: "17px",
                marginLeft: "15px",
              }}
            >
              {course.title}
            </h1>
          </Box>
          <Box
            sx={{ height: "20px", margin: "10px 0px 0px 40px" }}
            className="full-width flex-row center-no-dir"
          >
            <FontAwesomeIcon style={{ color: "gray" }} icon={faCalendarDays} />
            <p style={{ color: "gray", fontSize: "12px", marginLeft: "15px" }}>
              <b>Khai giảng:</b> {course.openDate.toDateString()}
            </p>
          </Box>
          <Box
            sx={{ height: "20px", margin: "5px 0px 0px 40px" }}
            className="full-width flex-row center-no-dir"
          >
            <FontAwesomeIcon style={{ color: "gray" }} icon={faCalendarDays} />
            <p style={{ color: "gray", fontSize: "12px", marginLeft: "15px" }}>
              <b>Thời gian học:</b> {course.studyTime}
            </p>
          </Box>
        </Box>
      );
    });
    return (
      <Box
        className="list-courses-content"
        sx={{
          width: "100%",
          marginTop: "10px",
        }}
      >
        <Box
          className="list-courses-introduce full-height "
          sx={{
            overflow: "hidden",
          }}
        >
          <Image
            alt=""
            src="http://hongkyfengshui.vn/vnt_upload/weblink/Slide2bb_1.png"
          />
        </Box>
        <Box className="list-cources-detail flex-col full-height ">
          {ListCoursesDetail}
        </Box>
      </Box>
    );
  };

  const ListPosts = () => {
    const PostTitle = (props: any) => {
      return (
        <Box className="flex-row">
          <p style={{ fontSize: "20px" }} className="list-posts-title">
            <span>{props.name}</span>
          </p>
        </Box>
      );
    };

    const ListPostComponents = (props: any) => {
      const ListPostsContent = listPosts.map((post, index) => {
        if (post.type == props.type) {
          return (
            <Box
              key={index}
              className="list-posts-detail-element flex-row full-width one-third-col"
              sx={{ padding: "10px 0px 10px 0px", marginTop: "5px" }}
            >
              <Box className="full-height half-row">
                <Image
                  alt=""
                  id="image-post"
                  src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
                ></Image>
              </Box>
              <Box className="full-height half-row" sx={{ padding: "10px" }}>
                <h1 style={{ fontSize: "15px", color: "white" }}>
                  {post.title}
                </h1>
                <p
                  style={{ fontSize: "15px", color: "gray", marginTop: "5px" }}
                >
                  {post.createTime.toDateString()}
                </p>
              </Box>
            </Box>
          );
        }
      });
      return (
        <Box className="list-posts-detail flex-col  full-height">
          <PostTitle name={props.name}></PostTitle>
          {ListPostsContent}
        </Box>
      );
    };

    const ListPostsContainer = listPostType.map((posttype, index) => {
      return (
        <ListPostComponents
          key={index}
          type={posttype.id}
          name={posttype.name}
        ></ListPostComponents>
      );
    });

    return (
      <Box
        className="list-posts-content  full-width full-height"
        sx={{
          marginTop: "40px",
        }}
      >
        {ListPostsContainer}
      </Box>
    );
  };

  const SearchInput = () => {
    return (
      <Box
        className="search-input full-width center flex-row"
        sx={{
          height: "100px",
        }}
      >
        <Input sx={{}}></Input>
        <Button>Tìm kiếm</Button>
      </Box>
    );
  };
  const ListPaginatorPosts = () => {
    const listPostJSX = listPaginatorPosts.map((post, index) => (
      <Box
        key={index}
        className="list-paginator-posts full-width"
        sx={{
          height: "266px",
          border: "2px solid #8F0101",
          marginTop: "100px",
        }}
      >
        <p>{post}</p>
      </Box>
    ));
    return (
      <Box
        className="wrap-list-paginator-posts full-width flex-col"
        sx={{
          height: "auto",
          marginTop: "100px",
          borderTop: "2px solid #8F0101",
        }}
      >
        {listPostJSX}
      </Box>
    );
  };
  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={0}>
      <Box className="content full-width">
        <Box
          className=" header-content full-width "
          sx={{
            position: "relative",

            backgroundSize: "cover",
            backgroundImage:
              'url("http://hongkyfengshui.vn/vnt_upload/weblink/HomeSlide-1-1360x600_1.jpg")',
            justifyContent: "flex-end",
            zIndex: -1,
          }}
        >
          <Box
            className="banner-left flex-row half-col half-row"
            sx={{ alignItems: "flex-end", justifyContent: "flex-start" }}
          >
            <Image
              alt=""
              className="phong-thuy-image"
              src="https://top10tphcm.com/wp-content/uploads/2020/06/phong-thuy-la-gi-1.jpg"
            ></Image>
          </Box>
          <Box
            className="flex-col banner-right"
            sx={{
              alignItems: "flex-start",
              justifyContent: "flex-start",

              width: "50%",
              height: "50%",
            }}
          >
            <p
              className="phong-thuy-text"
              style={{ fontSize: "50px", color: "white", fontWeight: 1000 }}
            >
              <span>Phong thủy</span>
            </p>
            <p
              style={{
                marginTop: "20px",
                fontSize: "18px",
                color: "white",
                fontWeight: 300,
              }}
            >
              Là một môn học quan trọng trong cuộc sống của người Trung Hoa. Là
              một môn học quan trọng trong cuộc sống của người Trung Hoa. Là một
              môn học quan trọng trong cuộc sống của người Trung Hoa. Là một môn
              học quan trọng trong cuộc sống của người Trung Hoa
            </p>
          </Box>
        </Box>
        <Box
          className="body-content_home focus-content full-width flex-col"
          sx={{
            padding: "0px 300px 0px 300px",
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.7) 10%, rgba(0, 0, 0, 0.95) 45%, rgba(0, 0, 0, 0.95) 0%)",
            backgroundClip: "padding-box",
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
