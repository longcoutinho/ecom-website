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
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          className="detail-posts-focus-content"
        >
          <Box 
          className="detail-posts-focus"
          dangerouslySetInnerHTML={{ __html: detailPost?.content }}></Box>
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
      <Box className="post-detail-content-wrapper">
        <Box
            className="posts-detail-title"
        >
          <p style={{fontSize:'30px'}}>{detailPost?.title}</p>
          <Box className="detail-posts-focus-title-container">
            <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>
            <p className="detail-posts-focus-title">23:00 15-9-2022</p>
          </Box>
        </Box>
        <Box className="post-detail-content">
          <DetailPost></DetailPost>
        </Box>
      </Box>
    </Page>
  );
}
