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
  const [listPosts, setListPosts] = useState<Post[]>([{
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
    introduction: "abc",
  },
  {
    titleImageUrlStream: "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?cs=srgb&dl=pexels-engin-akyurt-1486861.jpg&fm=jpg",
    title: "Bai viet 1",
    author: "Kim Ca",
    type: 1,
    content: "abc",
    id: 1,
    createAt: "abc",
    introduction: "abc",
  },{
    titleImageUrlStream: "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?cs=srgb&dl=pexels-engin-akyurt-1486861.jpg&fm=jpg",
    title: "Bai viet 1",
    author: "Kim Ca",
    type: 1,
    content: "abc",
    id: 1,
    createAt: new Date().toDateString(),
    introduction: "abc",
  }]);
  const [listPriorityPosts, setListPriorityPosts] = useState<Post[]>([
    {
      titleImageUrlStream: "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?cs=srgb&dl=pexels-engin-akyurt-1486861.jpg&fm=jpg",
      title: "Bai viet 1",
      author: "Kim Ca",
      type: 1,
      content: "abc",
      id: 1,
      createAt: new Date().toDateString(),
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
      introduction: "abc",
    },
    {
      titleImageUrlStream: "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?cs=srgb&dl=pexels-engin-akyurt-1486861.jpg&fm=jpg",
      title: "Bai viet 1",
      author: "Kim Ca",
      type: 1,
      content: "abc",
      id: 1,
      createAt: "abc",
      introduction: "abc",
    }
  ]);
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
    //get all priority posts
    axios({
      method: "get",
      url: URL.BASE_URL + URL.POSTS_SERVICE + POSTS_SERVICE.GET_ALL,
      params: {
        priority: 1,
      }
    }).then(
      (res) => {
        setListPriorityPosts(res.data.content);
      },
      (err) => {
        console.log(err);
      }
    );

    //get all posts
    axios({
      method: "get",
      url: URL.BASE_URL + URL.POSTS_SERVICE + POSTS_SERVICE.GET_ALL,
    }).then(
      (res) => {
        setListPosts(res.data.content);
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
        return (
          <Box className="list-posts-detail">
              <Box className="first-posts-home-page">
                <Box className="first-posts-home-page-image-wrapper">
                  <img
                    alt=""
                    id="image-home-page"
                    src={listPriorityPosts[0].titleImageUrlStream}
                    className="image-home-page" />
                </Box>
                  <Box className="list-post-detail-element-para">
                    <Box className="title-post-home-wrapper">
                      <h1 className="title-post-home">{listPriorityPosts[0].title}</h1>
                    </Box>
                    <Box className="content-post-home-wrapper">
                      <p>{listPriorityPosts[0].introduction}</p>
                      <p style={{ fontSize: "13px", color: "white", marginTop: "5px", marginBottom: "30px" }}>
                        {timeStampToDate(Date.parse(listPriorityPosts[0].createAt))}
                      </p>
                    </Box>
                  </Box>
              </Box>
              <Box className="second-and-third-posts-home-page">
                <Box sx={{display: "flex", flexDirection: "column", width: "100%", height: "100%"}}>
                  <Box className="mini-first-posts-home-page">
                    <img
                        alt=""
                        id="image-home-page"
                        src={listPriorityPosts[1]?.titleImageUrlStream}
                        className="image-home-page" />
                  </Box>
                  <Box sx={{border: "1px solid rgba(0, 0, 0, 0.12)", borderTop: "none", width: "100%", height: "30%", padding: "20px"}
                  }>
                    <p style={{fontSize: "20px", fontWeight: "700"}}>{listPriorityPosts[1]?.title}</p>
                    <p style={{marginTop: "20px"}}>Ngay gio bai viet</p>
                  </Box>
                </Box>
                <Box sx={{display: "flex", flexDirection: "column", width: "100%", height: "100%", marginLeft: "25px"}}>
                  <Box className="mini-first-posts-home-page">
                    <img
                      alt=""
                      id="image-home-page"
                      src={listPriorityPosts[2]?.titleImageUrlStream}
                      className="image-home-page" />
                  </Box>
                  <Box sx={{border: "1px solid rgba(0, 0, 0, 0.12)", borderTop: "none", width: "100%", height: "30%", padding: "20px"}
                  }>
                  <p style={{fontSize: "20px", fontWeight: "700"}}>{listPriorityPosts[2]?.title}</p>
                  <p style={{marginTop: "20px"}}>Ngay gio bai viet</p>
                </Box>
                </Box>
              </Box>
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
            <Box className="full-height half-row flex-col" sx={{ padding: "10px", justifyContent: "center"}}>
              <h1 style={{ fontSize: "15px" }} className="title-post-home">{post.title}</h1>
              <p style={{ fontSize: "15px", color: "gray", marginTop: "5px" }}>
                Ngay gio bai viet
              </p>
            </Box>
            <Box className="full-height" sx={{width: "30%", borderRadius: "50%", overflow: "hidden"}}>
              <img
                alt=""
                id="image-home-page-item"
                className="image-home-page"
                src={post.titleImageUrlStream}
              />
            </Box>
          </Box>
          <Divider/>
          </>
        );
      });
      return (
        <Box className="list-posts-detail-2">
          <Box sx={{height: "10%", width: "100%"}}>
            <p>Bài viết nổi bật</p>
            <Box sx={{borderTop: "2px solid black", marginTop: "10px"}} className="underline-title"></Box>
          </Box>
          <Box sx={{height: "90%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
            {ListItemsContent}
          </Box>
          
        </Box>
      );
    };

    return (
      <>
        {listPosts.length > 0 && (
          
          <Box className="list-posts-home-page-container"
          >
            <Box className="list-posts-home-page-content-container">
              <ListPostComponents name={"Tin tức"}></ListPostComponents>
              <ListItemComponents name={"Sản phẩm"}></ListItemComponents>
            </Box>
          </Box>
        )}
      </>
    );
  };

  const Intro = () => {
    return (
      <Box className="intro-home-page-wrapper">
        <Box className="intro-container">
          <Box className="intro-image-container">
            <img src="https://www.kimca.net/wp-content/uploads/2021/07/vanmenh-500x300.jpg"/>
          </Box>
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
          
        </Box>
        <ListServices></ListServices>
      </Box>
      
    )
  }

  const IntroCourses = () => {
    return (
      <Box className="intro-courses-wrapper">
        <Box className="intro-courses-container">
          <Box className="intro-content-container">
            <p className="intro-content-title">
              KHÓA HỌC: TỬ VI CHÂN NGUYÊN
            </p>
            <p className="intro-content-para">
            Không cần học an sao, lịch pháp, Can Chi, Nạp Âm vì những thứ này đã có các App lập lá số rồi.<br></br>
            Không cần học lý thuyết dài dòng, rườm rà, phức tạp, xa rời thực tế cuộc sống vì không có tác dụng gì trong
            luận đoán.<br></br>
            Kiến thức được hệ thống dễ học, dễ nhớ dựa trên nền tảng Âm Dương Ngũ Hành và các đồ hình theo thế
            đứng Tử Vi.<br></br>
            Bài giảng bám sát việc luận đoán thực tế dựa trên chính kinh nghiệm nhiều năm xem Tử Vi của thầy Kim Ca.<br></br>
            Tài liệu học Tử Vi đầy đủ có file do chính Kim Ca biên soạn dựa trên các sách gốc Tử Vi bằng tiếng Trung
            thời xưa.
            </p>
            <Button className="intro-content-button">Xem thêm</Button>
          </Box>
          <Box className="intro-image-container">
            <img src="https://www.kimca.net/wp-content/uploads/2021/07/vanmenh-500x300.jpg"/>
          </Box>
        </Box>
        <ListCourses></ListCourses>
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
          slidesPerView: 4,
        },
        1600: {
          slidesPerView: 4,
        },
        1900: {
          slidesPerView: 4,
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
            <Button>Tư Vấn Ngay</Button>
          </Box>  
          
        </SwiperSlide>
    ));

    return (
      <Box className="list-services-container">
        <Box className="list-services-title-container">
          <p className="title-top-home-page">DỊCH VỤ TƯ VẤN:</p>
          <p style={{marginLeft: '10px'}}>Luận Mệnh Lý Và Khám Phá Tiềm Năng Con Người</p>
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

  const ListCourses = () => {
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
          slidesPerView: 4,
        },
        1600: {
          slidesPerView: 4,
        },
        1900: {
          slidesPerView: 4,
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
            <Button>Xem Ngay</Button>
          </Box>  
          
        </SwiperSlide>
    ));

    return (
      <Box className="list-services-container">
        <Box className="list-services-title-container">
          <p className="title-top-home-page">HÌNH ẢNH CÂU LẠC BỘ/ KHÓA HỌC TỬ VI CHÂN NGUYÊN</p>
          <p style={{marginLeft: '10px'}}></p>
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

  const ListItems = () => {
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
          slidesPerView: 4,
        },
        1600: {
          slidesPerView: 4,
        },
        1900: {
          slidesPerView: 4,
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
            <Button>Xem Ngay</Button>
          </Box>  
          
        </SwiperSlide>
    ));

    return (
      <Box className="list-services-container">
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

  const IntroItems = () => {
    return (
      <Box className="list-items-wrapper">
        <Box className="list-items-title-container">
          <p>Vật phẩm &quot;Hot&quot; chiêu tài</p>
        </Box>
        <Box className="list-items-content-container">
          <ListItems></ListItems>
        </Box>
      </Box>  
    )
  }

  const Register = () => {
    return (
      <Box>
        <Box>
          <p>Đăng ký tư vấn</p>
          <input type="text" placeholder="Họ và tên"></input>
          <input type="text" placeholder="Số điện thoại"></input>
          <input type="text" placeholder="Địa chỉ"></input>
          <Button>Đăng ký</Button>
        </Box>
      </Box>
    )
  }

  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={0}>
      <Box className="home-page-content " sx={{ width: "100vw" }}>
        <ListPosts></ListPosts>
        <Intro></Intro>
        <IntroCourses></IntroCourses>
        <IntroItems></IntroItems>
        <Register></Register>
      </Box>
    </Page>
  );
}
