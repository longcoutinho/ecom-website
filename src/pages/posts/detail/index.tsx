import { PAGE_TITLE } from "@/constants";
import Page from "@/layouts";
import { Box, Button, Input, List } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

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
  content: any;
}

export default function PostDetail() {
  const [detailPost, setListPost] = useState<Post>();
  const route = useRouter();
  useEffect(() => {
    if (route.query.id !== undefined) {
      const URL = "http://10.248.158.167:1112/posts/" + route.query.id;
      console.log(route.query.id);
      axios({
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        method: "get",
        url: URL,
      }).then(
        (res) => {
          const newArr = res.data as Post;
          console.log(res.data);
          setListPost(newArr);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }, [route.query]);
  //datas
  //components

  const DetailPost = () => {
    return (
      <Box
        className="detail-posts-container flex-col"
      >
        <Box
          dangerouslySetInnerHTML={{ __html: detailPost?.content }}
        ></Box>
      </Box>
    );
  }


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
        <Box sx={{ marginLeft: "20px" }} key={index}>
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
            padding: "0px 300px 70px 300px",
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
          className="focus-content full-width flex-col"
          sx={{
            padding: "0px 300px 0px 300px",
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.7) 50px, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.95) 0%)",
            backgroundClip: "padding-box",
          }}
        >
          <MenuPostComponent></MenuPostComponent>
          <DetailPost></DetailPost>
        </Box>
      </Box>
    </Page>
  );
}
