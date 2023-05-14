import { PAGE_TITLE } from "@/constants";
import Page from "@/layouts";
import { Box, Button, Divider } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Scrollbar, Pagination, A11y } from "swiper";
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
  img: string;
  title: string;
  content: string;
}

export default function Home() {
  //datas
  const [listPosts, setListPosts] = useState<Post[]>([]);
  const [listItems, setListItems] = useState<Item[]>([]);
  const route = useRouter();
  const listServices: Service[] = [
    {
      img: "https://www.kimca.net/wp-content/uploads/2022/02/163418138042938300_a640x364-1-364x363.jpg",
      title: "Làm viên chức",
      content: "Bạn muốn xem thời vận sắp tới có thuận lợi để đầu tư không?"
    },
    {
      img: "https://www.kimca.net/wp-content/uploads/2022/02/163418138042938300_a640x364-1-364x363.jpg",
      title: "Làm viên chức",
      content: "Bạn muốn xem thời vận sắp tới có thuận lợi để đầu tư không?"
    },
    {
      img: "https://www.kimca.net/wp-content/uploads/2022/02/163418138042938300_a640x364-1-364x363.jpg",
      title: "Làm viên chức",
      content: "Bạn muốn xem thời vận sắp tới có thuận lợi để đầu tư không?"
    },
    {
      img: "https://www.kimca.net/wp-content/uploads/2022/02/163418138042938300_a640x364-1-364x363.jpg",
      title: "Làm viên chức",
      content: "Bạn muốn xem thời vận sắp tới có thuận lợi để đầu tư không?"
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

  const timeStampToDate = (timestamp: any) => {
    var dateFormat = new Date(timestamp);
    var res = "";
    res += dateFormat.getDate() + "/";
    res += dateFormat.getMonth() + 1 + "/";
    res += dateFormat.getFullYear();
    return res;
  }

  const ListCourses = () => {
    return (
      <Box className="list-courses-container">
        <Box className="list-courses-image-container">
          <img src="https://www.kimca.net/wp-content/uploads/2022/03/Five-Elements.png"/>
        </Box>
        <Box className="list-courses-content-container">
          <p className="title-top-home-page">Khóa Học</p>
          <p className="title-bottom-home-page">Tử Vi Chân Nguyên</p>
          <p style={{marginTop: "30px", textRendering: "optimizeLegibility", color: "#211d1d"}}>Không cần học an sao, lịch pháp, Can Chi, Nạp Âm vì những thứ này đã có các App lập lá số rồi.<br></br>
            Không cần học lý thuyết dài dòng, rườm rà, phức tạp, xa rời thực tế cuộc sống vì không có tác dụng gì trong luận đoán.<br></br>
            Kiến thức được hệ thống dễ học, dễ nhớ dựa trên nền tảng Âm Dương Ngũ Hành và các đồ hình theo thế đứng Tử Vi.<br></br>
            Bài giảng bám sát việc luận đoán thực tế dựa trên chính kinh nghiệm nhiều năm xem Tử Vi của thầy Kim Ca.<br></br>
            Tài liệu học Tử Vi đầy đủ có file do chính Kim Ca biên soạn dựa trên các sách gốc Tử Vi bằng tiếng Trung thời xưa.<br></br><br></br>
            Mục tiêu khóa học: Không phân biệt người mới học hay học lâu năm đều có thể theo học. Không phân biệt cơ bản hay nâng cao vì quan trọng nhất vẫn là kết quả luận đoán chính xác.</p>
          <Button className="intro-content-button">Xem thêm</Button>
        </Box>
      </Box>
    )
  };

  const ListPosts = () => {
    const PostTitle = (props: any) => {
      return (
        <Box className="list-services-title-container flex-col center">
          <p className="title-top-home-page">Tin Tức</p>
          <p className="title-bottom-home-page">Bài Viết Nổi Bật</p>
        </Box>
      );
    };

    const ListPostComponents = (props: any) => {
      const ListPostsContent = listPosts.slice(0,1).map((post, index) => {
        return (
          <Box
            onClick={() => goToDetailPost(post.id)}
            key={index}
            className="list-posts-detail-element full-width one-third-col"
          >
            <Box className="full-width image-home-page-container">
              <img
                alt=""
                id="image-home-page"
                src={post.titleImageUrlStream}
                className="image-home-page"
              />
            </Box>
            <Box className="list-post-detail-element-para full-height half-row">
              <h1 style={{ fontSize: "15px" }} className="title-post-home">{post.title}</h1>
              <p style={{ fontSize: "15px", color: "gray", marginTop: "5px" }}>
                {timeStampToDate(Date.parse(post.createAt))}
              </p>
              <p style={{ fontSize: "15px", color: "gray", marginTop: "5px" }}>{post.introduction}</p>
            </Box>
          </Box>
        );
      });

      return (
        <Box className="list-posts-detail">
          {ListPostsContent}
        </Box>
      );
    };

    const ListItemComponents = (props: any) => {
      const ListItemsContent = listPosts.map((post, index) => {
        return (
          <>
          <Box
            onClick={() => goToDetailItem(post.id)}
            key={index}
            className="list-posts-detail-element-2"
          >
            <Box className="full-height" sx={{width: "30%"}}>
              <img
                alt=""
                id="image-home-page-item"
                className="image-home-page"
                src={post.titleImageUrlStream}
              />
            </Box>
            <Box className="full-height half-row" sx={{ padding: "10px"}}>
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
        <Box className="list-posts-detail flex-col full-height">
          {ListItemsContent}
        </Box>
      );
    };

    const ListDetailPostComponents = (props: any) => {
      const ListPostsContent = listPosts.map((post, index) => {
        return (
          <Box
            onClick={() => goToDetailPost(post.id)}
            key={index}
            className="list-posts-detail-element-3 full-width one-third-col"
          >
            <Box className="">
              <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>
            </Box>
            <Box className="full-height half-row" sx={{ padding: "0px 15px 0px 15px"}}>
              <h1 style={{ fontSize: "15px" }} className="title-post-home">{post.title}</h1>
              <p style={{ fontSize: "15px", color: "gray", marginTop: "5px" }}>
                {timeStampToDate(Date.parse(post.createAt))}
              </p>
              <p style={{ fontSize: "15px", color: "gray", marginTop: "5px" }}>{post.introduction}</p>
            </Box>
          </Box>
        );
      });

      return (
        <Box className="list-posts-detail">
          {ListPostsContent}
        </Box>
      );
    };

    return (
      <>
        {listPosts.length > 0 && (
          
          <Box className="list-posts-home-page-container"
          >
            <PostTitle></PostTitle>
            <Box className="list-posts-home-page-content-container">
              <ListPostComponents name={"Tin tức"}></ListPostComponents>
              <ListItemComponents name={"Sản phẩm"}></ListItemComponents>
              <ListDetailPostComponents name={"Lập lá"}></ListDetailPostComponents>
            </Box>
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
            Xin chào! Tôi là Kim Ca, tên thật là Lê Thanh Cần, một Phật tử theo Kim Cương Thừa. Một người chuyên nghiên cứu mệnh lý và ứng dụng tiềm năng con người. Tôi đam mê với những bộ môn nghiên cứu Số Mệnh, vậy bản chất Số Mệnh là gì?<br></br><br></br>
            Số Mệnh chính là sự định vị của con người về giàu nghèo, sang hèn, thọ yểu,  hạnh phúc hay đau khổ. Tại sao có người cuộc đời của họ rất may mắn, tại sao có người cuộc đời của họ dù rất có năng lực và tài trí mà lại chẳng thể có được địa vị cao? Tại sao có người sinh ra đã ngậm “thìa vàng”, còn có người sinh ra đã có nhiều bất hạnh? đó là Số Mệnh vậy.
          </p>
          <Button className="intro-content-button">Xem thêm</Button>
        </Box>
        <Box className="intro-image-container">
          <img src="https://www.kimca.net/wp-content/uploads/2021/07/vanmenh-500x300.jpg"/>
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
        <SwiperSlide key={index} className="swiper-slide-featured-news">
          <Box className="swiper-slide-featured-news-content">
            <Box className="swiper-slide-featured-news-image">
              <img id="swiper-slide-image" src={service.img}/>
            </Box>
            <p style={{marginTop: "1em", fontWeight: "normal", fontSize: "1.563em"}}>{service.title}</p>
            <p style={{marginTop: "1em", fontWeight: "normal", lineHeight: "1.5", textAlign: "center"}}>{service.content}</p>
          </Box>  
          <Button>Tư Vấn Ngay</Button>
        </SwiperSlide>
    ));

    return (
      <Box className="list-services-container">
        <Box className="list-services-title-container">
          <p className="title-top-home-page">Dịch Vụ Tư Vấn</p>
          <p className="title-bottom-home-page">Luận Mệnh Lý Và Khám Phá Tiềm Năng Con Người</p>
        </Box>
        <Box className="list-services-content-container">
          <Swiper
            className="list-services-content-swiper"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            {...options}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper: any) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {ListServicesSlide}
            
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
        <ListCourses></ListCourses>
        <ListPosts></ListPosts>
      </Box>
    </Page>
  );
}
