import { PAGE_TITLE } from "@/constants";
import Page from "@/layouts";
import { Box, Button, Grid, Paper } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "@/components/Image";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { PostData } from "@/_mock/post";
import { experimentalStyled as styled } from "@mui/material/styles";
<link rel="preconnect" href="https://fonts.gstatic.com"></link>;
interface TypePost {
  id: Number;
  name: string;
}

interface Post {
  image: string;
  title: string;
  author: string;
  type: Number;
  content: String;
  id: Number;
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

export default function Post() {
  const [listPosts, setListPost] = useState<Post[]>([]);
  const router = useRouter();
  useEffect(() => {
    axios({
      method: "get",
      url: "http://10.248.158.167:1112/posts",
    }).then(
      (res) => {
        setListPost(res.data.content);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);
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

  const ListPosts = () => {
    const redirect = (id: any) => {
      router.push({
        pathname: "/posts/detail",
        search: "?" + new URLSearchParams({ id: id }),
      });
    };

    const ListPostComponents = (props: any) => {
      return (
        <Grid
          container
          spacing={4}
          columns={{ xs: 4, sm: 8, md: 12 }}
          className="list-posts-detail "
        >
          {listPosts.map((post, index) => {
            return (
              <Grid
                key={index}
                item
                className="list-posts-detail-element flex-col"
                sx={{ padding: "10px 0px ", marginTop: "10px 0" }}
              >
                <Box className="full-width half-col">
                  <Image
                    alt=""
                    id="image-post_tintuc"
                    src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
                  ></Image>
                </Box>
                <Box
                  className="full-width half-col flex-col"
                  sx={{ justifyContent: "space-between" }}
                >
                  <h1 style={{ fontSize: "15px", color: "white" }}>
                    {post.title}
                  </h1>
                  <p
                    className="content-post"
                    style={{ fontSize: "15px", color: "gray", margin: "6px 0" }}
                  >
                    {post.content}
                  </p>
                  <Button
                    onClick={() => redirect(post.id)}
                    sx={{
                      color: "white",
                      backgroundColor: "red",
                      borderRadius: "3px",
                    }}
                  >
                    Xem chi tiết
                  </Button>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      );
    };

    return (
      <Box
        className="list-posts-content full-width full-height"
        sx={{
          padding: "40px 0",
          flexGrow: 1,
        }}
      >
        <ListPostComponents />
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
      <Box sx={{ height: "50px" }} className="flex-row full-width center">
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
                  padding: "10px 30px 10px 30px",
                  border: "2px solid white",
                }}
              >
                Tin tức
              </span>
            </p>
          </Box>
        </Box>
        <Box
          className="tintuc-content"
          sx={{
            padding: "0px 300px 0px 300px",
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.7) 50px, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.95) 0%)",
            backgroundClip: "padding-box",
          }}
        >
          <MenuPostComponent></MenuPostComponent>
          <ListPosts></ListPosts>
        </Box>
      </Box>
    </Page>
  );
}
