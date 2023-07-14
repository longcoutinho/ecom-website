import {PAGE} from "@/constants/message";
import {listServicesTitle, HomePage, PostsService, ItemService} from "@/constants";
import {formatVND} from "@/constants/FnCommon";
import {getAllPosts, getServicePosts} from "@/services/postsService"
import {getTypeofPosts} from "@/services/typeService";
import {getAllItems} from "@/services/itemService";
import Page from "@/layouts";
import { Box, Button} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {Navigation, Scrollbar, Pagination, A11y, Autoplay} from "swiper";
import {Post, Item, Service, TypePost} from "@/interfaces/response";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
<link rel="preconnect" href="https://fonts.gstatic.com"></link>;

export default function Home() {
    const route = useRouter();
  const [listServices, setListServices] = useState<Service[]>([]);

  useEffect(() => {
      getServicePosts().then(
          (res) => {
              let serArr:Service[] = [];
              for(let i = 0; i < res.data.content.length; i++) {
                  serArr.push({
                      titleImageUrlStream: res.data.content[i].titleImageUrlStream,
                      id: res.data.content[i].id,
                      title: listServicesTitle[i].title,
                      content: listServicesTitle[i].content,
                  })
              }
              setListServices(serArr);
          },
          (err) => {
          }
      );
  }, []);

  const redirect = (path: any, params: any) => {
    route.push({
        pathname: path,
        search: params ? "?" + new URLSearchParams(params) : null,
    });
  };

    const goToDetailPost = (id: any) => {
        const params = {
            id: id,
        }
        redirect(PostsService.getPostDetail, params);
    };

  const ListPosts = () => {
      const [listPosts, setListPosts] = useState<Post[]>([]);
      const [listTypePost, setListTypePost] = useState<TypePost[]>([])

      useEffect(() => {
          // Get data all posts
          getAllPosts().then(
              (res) => {
                  setListPosts(res.data.content);
              },
              (err) => {
              });
              getTypeofPosts().then(
                  (res) => {
                      setListTypePost(res.data);
                  },
                  (err) => {
                  });
      }, []);

      const ListPostComponents = (props: any) => {

        const ListFeaturedPosts = () => {

            const ListFeaturedPostsComponent = listPosts.slice(0,5).map((featuredPost, index) => (
                <Box key={index}>
                    <SwiperSlide onClick={() => goToDetailPost(featuredPost.id)} key={index} className="swiper-slide-featured-posts">
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

            return (
                <Box className="list-posts-page-featured-container">
                    <Box className="list-posts-page-featured-wrapper">
                        <Swiper
                            className="list-posts-featured-swiper"
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            {...HomePage.optionTopPosts}
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

        const ListPostss = () => {
            const ListPostComponents = (props: any) => {
                return (
                    <Box
                        className="list-posts-container"
                    >
                        {listPosts.slice(0,3).map((post, index) => {
                            return (
                                <Box
                                    onClick={() => goToDetailPost(post.id)}
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
                                            <h1 style={{ fontSize: "15px", fontWeight: "800", color: "rgb(0,32,96)", textTransform: "uppercase"}} className="title-list-posts-element">
                                                {post.title}
                                            </h1>
                                            <p
                                                className="introduction-list-posts-element"
                                            >
                                                {post.introduction}
                                            </p>
                                            <Box className="list-posts-content-create-at">
                                                <p>{post.createAt}</p>
                                            </Box>
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
                    {/*{<PaginationMui count={pageCount} defaultPage={pageDefault} variant="outlined" onChange={(e: any, value) => paginationChange(value)} sx={{color:'white'}}/>}*/}
                </Box>
            );
        };

        return (
          <Box className="list-posts-detail">
            <ListFeaturedPosts></ListFeaturedPosts>
            <ListPostss></ListPostss>
          </Box> 
        );
    };

    const ListItemComponents = (props: any) => {

        const findTypeName = (id: string) => {
                for(let i = 0; i < listTypePost.length; i++) {
                    if (listTypePost[i].id === id) {
                        return listTypePost[i].name;
                    }
                }
        }

      const ListItemsContent = listPosts.map((post, index) => {
              return (
                      <Box
                          key={index}
                          className="list-posts-detail-element-2"
                      >
                          <Box className="type-and-content">
                              <Box className="list-posts-detail-type">
                                  <p>{findTypeName(post.typeId)}</p>
                              </Box>
                              <Box onClick={() => goToDetailPost(post.id)} className="list-posts-detail-content">
                                  <Box className="list-posts-para">
                                      <h1 style={{ fontSize: "20px", textTransform: "uppercase"}} className="title-post-home-1">{post.title}</h1>
                                      <p className="list-posts-para-content">{post.introduction}</p>
                                      <p className="list-posts-para-content">
                                          {post.createAt}
                                      </p>
                                  </Box>
                                  <Box className="list-posts-img">
                                      <img
                                          alt=""
                                          id="image-home-page-item"
                                          className="image-home-page"
                                          src={post.titleImageUrlStream}
                                      />
                                  </Box>
                              </Box>
                          </Box>
                      </Box>
              )
      });
      return (
        <Box className="list-posts-detail-2">
          <Box sx={{height: "10%", width: "100%"}}>
            <p style={{fontSize: "30px", color: "rgb(0,32,96)", textTransform: "uppercase", fontWeight: "900"}}>Bài viết nổi bật</p>
            <Box sx={{borderTop: "5px solid black", marginTop: "10px"}} className="underline-title"></Box>
          </Box>
          <Box className="list-posts-detail-2-content">
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
            <img src="https://www.kimca.net/wp-content/uploads/2021/12/Screenshot-2022-10-27-094629-600x601.png"/>
          </Box>
          <Box className="intro-content-container">
            <p className="intro-content-title">
              Giới thiệu
            </p>
            <p className="intro-content-para">
              Xin chào! Tôi là Kim Ca, tên thật là Lê Thanh Cần, một Phật tử theo Kim Cương Thừa. Một người chuyên nghiên cứu mệnh lý và ứng dụng tiềm năng con người. Tôi đam mê với những bộ môn nghiên cứu Số Mệnh, vậy bản chất Số Mệnh là gì?<br></br><br></br>
              Số Mệnh chính là sự định vị của con người về giàu nghèo, sang hèn, thọ yểu,  hạnh phúc hay đau khổ. Tại sao có người cuộc đời của họ rất may mắn, tại sao có người cuộc đời của họ dù rất có năng lực và tài trí mà lại chẳng thể có được địa vị cao? Tại sao có người sinh ra đã ngậm “thìa vàng”, còn có người sinh ra đã có nhiều bất hạnh? đó là Số Mệnh vậy.
            </p>
            <Button onClick={() => redirect("/posts/detail", {id: "f700e67a-ec43-4fc6-a34c-fc697421e240"})} className="intro-content-button">Xem thêm</Button>
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
            <Button onClick={() => redirect("/course", null)} className="intro-content-button">Xem thêm</Button>
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
              <img id="swiper-slide-image" src={service.titleImageUrlStream}/>
            </Box>
            <p style={{fontWeight: 700, marginTop: "0px", fontSize: "1.563em"}}>{service.title}</p>
            <p style={{marginTop: "0px", fontWeight: "normal", lineHeight: "1.5", textAlign: "center"}}>{service.content}</p>
            <button onClick={() => goToDetailPost(service.id)} >Tư Vấn Ngay</button>
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
              <img id="swiper-slide-image" src={service.titleImageUrlStream}/>
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
          >
            {ListServicesSlide}
            
          </Swiper>
        </Box>
      </Box>
    )
  }

  const ListItems = () => {
      const [listItems, setListItems] = useState<Item[]>([]);

      useEffect(() => {
          //Get data all items
          getAllItems().then(
              (res) => {
                  setListItems(res.data.content);
              },
              (err) => {
              });
      }, []);

      const goToDetailItem = (id: any) => {
          const params = {
              id: id,
          }
          redirect(ItemService.getItemDetail, params);
      };
    const options = {
      slidesPerView: 1,
      spaceBetween: 20,
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

    const ListItemsSlide = listItems.map((item, index) => (
        <SwiperSlide key={index} className="swiper-slide-featured-news">
          <Box className="swiper-slide-featured-news-content-items">
            <Box className="swiper-slide-featured-news-image">
              <img id="swiper-slide-image" src={item.titleImageUrlStream}/>
            </Box>
            <p className="swiper-slide-items-name">{item.title}</p>
            <Box className="swiper-slide-items-price-wrapper">
              <p>{formatVND(item.price, false)}</p>
            </Box>
            <Box className="swiper-slide-items-introduction-wrapper">
              <p>Mô tả:<br></br> {item.introduction}</p>
            </Box>
            <Button onClick={() => goToDetailItem(item.id)} >Đặt mua</Button>
          </Box>  
          
        </SwiperSlide>
    ));

    return (
      <Box className="list-items-container">
        <Box className="list-items-content-swiper-container">
          <Swiper
            className="list-items-content-swiper"
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            {...options}
            navigation
            pagination={{ clickable: true }}
          >
            {ListItemsSlide}
            
          </Swiper>
        </Box>
      </Box>
    )
  }

  const IntroItems = () => {
    return (
      <Box className="intro-items-wrapper">
        <Box className="intro-items-container">
          <Box className="list-items-title-container">
            <p>Vật phẩm &quot;Hot&quot; chiêu tài</p>
          </Box>
          <Box className="list-items-content-container">
            <ListItems></ListItems>
          </Box>
        </Box>
      </Box>  
    )
  }

  const Register = () => {
    return (
      <Box className="register-home-page-wrapper">
        <Box className="form-register-wrapper">
          <Box className="form-register-title-container">
            <p>Đăng ký tư vấn</p>
          </Box>
          <Box className="form-register-content-container">
            <input type="text" placeholder="Họ và tên"></input>
            <input type="text" placeholder="Số điện thoại"></input>
            <input type="text" placeholder="Địa chỉ"></input>
            <button>Đăng ký</button>
          </Box>
        </Box>
      </Box>
    )
  }

  return (
    <Page title={PAGE.TITLE} menuIndex={0}>
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
