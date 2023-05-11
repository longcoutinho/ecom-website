import { PAGE_TITLE } from "@/constants";
import Page from "@/layouts";
import { Box, Button, Divider } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar, A11y } from "swiper";
import Image from "@/components/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { Post, Item } from "../interfaces/response";
import { useEffect, useState } from "react";
import { URL, POSTS_SERVICE, ITEM_SERVICE } from "../constants";
import axios from "axios";
import { useRouter } from "next/router";

<link rel="preconnect" href="https://fonts.gstatic.com"></link>;

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
  const [listPosts, setListPosts] = useState<Post[]>([]);
  const [listItems, setListItems] = useState<Item[]>([]);
  const route = useRouter();
  const listServices: Service[] = [
    {
      name: "dịch vụ tư vấn",
      image: "http://hongkyfengshui.vn/vnt_upload/weblink/Slide2aa_1.png",
    },
    {
      name: "chia sẻ kinh nghiệm",
      image: "http://hongkyfengshui.vn/vnt_upload/weblink/HomeSlide-2-380x230-Chiase_1.jpg",
    },
    {
      name: "hệ thống đào tạo",
      image: "http://hongkyfengshui.vn/vnt_upload/weblink/HomeSlide-2-380x230-DaoTao.jpg",
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

  useEffect(() => {
    //get all posts
    axios({
      method: "get",
      url: URL.BASE_URL + URL.POSTS_SERVICE + POSTS_SERVICE.GET_ALL,
    }).then(
      (res) => {
        setListPosts(res.data.content.slice(0, 3));
      },
      (err) => {
        console.log(err);
      }
    );

    //get all items
    axios({
      method: "get",
      url: URL.BASE_URL + URL.ITEM_SERVICE + ITEM_SERVICE.GET_ALL,
    }).then(
      (res) => {
        setListItems(res.data.content.slice(0, 3));
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  /************************************* FUNCTIONS *******************************/

  const redirect = (path: any) => {
    route.push(path);
  };

  const goToDetailPost = (id: any) => {
    route.push({
      pathname: URL.POSTS_SERVICE + POSTS_SERVICE.DETAIL,
      search: "?" + new URLSearchParams({ id: id }),
    });
  };

  const goToDetailItem = (id: any) => {
    route.push({
      pathname: URL.ITEM_SERVICE + ITEM_SERVICE.DETAIL,
      search: "?" + new URLSearchParams({ id: id }),
    });
  };

  //components
  // const ListServices = () => {
    
    
  //   return (
  //     <Box
  //       className="list-services-content flex-col"
  //       sx={{
  //         width: "100%",
  //         height: "300px",
  //         paddingTop: "40px",
  //       }}
  //     >
  //       <Swiper
  //         className="swiper-featured-news"
  //         // install Swiper modules
  //         modules={[Navigation, Scrollbar, A11y]}
  //         {...options}
  //         navigation
  //         pagination={{ clickable: true }}
  //         scrollbar={{ draggable: true }}
  //         onSwiper={(swiper: any) => console.log(swiper)}
  //         onSlideChange={() => console.log("slide change")}
  //       >
  //         {arr}
  //         ...
  //       </Swiper>
  //     </Box>
  //   );
  // };

  const timeStampToDate = (timestamp: any) => {
    var dateFormat = new Date(timestamp);
    var res = "";
    res += dateFormat.getDate() + "/";
    res += dateFormat.getMonth() + 1 + "/";
    res += dateFormat.getFullYear();
    return res;
  }

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
              className="full-height "
              src="http://hongkyfengshui.vn/modules/main/images/main/icon.png"
            />
            <h1
              style={{
                textTransform: "uppercase",
                fontSize: "17px",
                marginLeft: "15px",
                cursor:'pointer'
              }}
              className="title-post-home"
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
          margin: "20px 0",
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
      const ListPostsContent = listPosts.slice(0,4).map((post, index) => {
        return (
          <Box
            onClick={() => goToDetailPost(post.id)}
            key={index}
            className="list-posts-detail-element flex-row full-width one-third-col"
          >
            <Box className="full-height half-row image-home-page-container">
              <img
                alt=""
                id="image-home-page"
                src={post.titleImageUrlStream}
                className="image-home-page"
              />
            </Box>
            <Box className="full-height half-row" sx={{ padding: "0px 15px 0px 15px"}}>
              <h1 style={{ fontSize: "15px" }} className="title-post-home">{post.title}</h1>
              <p style={{ fontSize: "15px", color: "gray", marginTop: "5px" }}>
                {timeStampToDate(Date.parse(post.createAt))}
              </p>
            </Box>
          </Box>
        );
      });

      return (
        <Box className="list-posts-detail">
          <PostTitle name={props.name}></PostTitle>
          {ListPostsContent}
        </Box>
      );
    };

    const ListItemComponents = (props: any) => {
      const ListItemsContent = listItems.slice(0,4).map((post, index) => {
        return (
          <>
          <Box
            onClick={() => goToDetailItem(post.id)}
            key={index}
            className="list-posts-detail-element"
          >
            <Box className="full-height half-row image-home-page-container">
              <img
                alt=""
                id="image-home-page-item"
                className="image-home-page"
                src={post.titleImageUrlStream}
              />
            </Box>
            <Box className="full-height half-row" sx={{ padding: "10px" }}>
              <h1 style={{ fontSize: "15px" }} className="title-post-home">{post.title}</h1>
              <p style={{ fontSize: "15px", color: "gray", marginTop: "5px" }}>
                Ngay gio bai viet
              </p>
            </Box>
          </Box>
          <Divider/>
          </>
        );
      });
      return (
        <Box className="list-posts-detail flex-col  full-height">
          <PostTitle name={props.name}></PostTitle>
          {ListItemsContent}
        </Box>
      );
    };
    return (
      <>
        {listPosts.length > 0 && (
          <Box
            className="list-posts-content-home-page full-width full-height"
            sx={{
              marginTop: "40px",
            }}
          >
            <ListPostComponents name={"Tin tức"}></ListPostComponents>
            <ListItemComponents name={"Sản phẩm"}></ListItemComponents>
            <ListPostComponents name={"Lập lá"}></ListPostComponents>
          </Box>
        )}
      </>
    );
  };

  const Intro = () => {
    return (
      <Box className="intro-container">
        <Box className="intro-content-container">
          <p className="intro-content-title">
            Giới thiệu
          </p>
          <p className="intro-content-para">
            Xin chào! Tôi là Kim Ca, tên thật là Lê Thanh Cần, một Phật tử theo Kim Cương Thừa. Một người chuyên nghiên cứu mệnh lý và ứng dụng tiềm năng con người. Tôi đam mê với những bộ môn nghiên cứu Số Mệnh, vậy bản chất Số Mệnh là gì?
            Số Mệnh chính là sự định vị của con người về giàu nghèo, sang hèn, thọ yểu,  hạnh phúc hay đau khổ. Tại sao có người cuộc đời của họ rất may mắn, tại sao có người cuộc đời của họ dù rất có năng lực và tài trí mà lại chẳng thể có được địa vị cao? Tại sao có người sinh ra đã ngậm “thìa vàng”, còn có người sinh ra đã có nhiều bất hạnh? đó là Số Mệnh vậy.
          </p>
          <Button className="intro-content-button">Xem thêm</Button>
        </Box>
        <Box className="intro-image-container">
        </Box>
      </Box>
    )
  }

  const ListServices = () => {
    const options = {
      slidesPerView: 1,
      spaceBetween: 50,
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
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
          slidesPerView: 3,
        },
        1900: {
          slidesPerView: 3,
        },
      },
    };

    const ListServicesSlide = listServices.map((service, index) => (
      <Box key={index}>
        <SwiperSlide key={index} className="swiper-slide-featured-news">
          
        </SwiperSlide>
      </Box>
    ));

    return (
      <Box className="list-services-container">
        <Box className="list-services-title-container">
          <p>Dịch vụ tư vấn</p>
          <p>Khai phá tiềm năng con người</p>
        </Box>
        <Box className="list-services-content-container">
          <Swiper
            className="list-services-content-swiper"
            // install Swiper modules
            modules={[Navigation, Scrollbar, A11y]}
            {...options}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper: any) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {ListServicesSlide}
            ...
          </Swiper>
        </Box>
      </Box>
    )
  }

  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={0}>
      <Box className="home-page-content " sx={{ width: "100vw" }}>
        <Intro></Intro>
        <ListServices></ListServices>
      </Box>
    </Page>
  );
}
