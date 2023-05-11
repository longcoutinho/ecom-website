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
        className="detail-posts-container flex-col"
      >
        <Box 
          className="detail-posts-focus-content"
        >
          <Box className="detail-posts-focus-title-container">
            <FontAwesomeIcon icon={faCalendarDays}></FontAwesomeIcon>
            <p className="detail-posts-focus-title">23:00 15-9-2022</p>
          </Box>
          <Box 
          className="detail-posts-focus"
          dangerouslySetInnerHTML={{ __html: detailPost?.content }}></Box>
        </Box>
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
          className="detail-posts-header-content full-width flex-row center"
          sx={{
            position: "relative",
            padding: "0px 300px 70px 300px",
            height: "250px",
            backgroundSize: "cover",
            backgroundImage: "url(http://hongkyfengshui.vn/vnt_upload/weblink/slide-small.jpg)",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            zIndex: -1,
          }}
        >
          <Box
            className="posts-focus-title"
            sx={{ color: "white" }}
          >
            <p style={{fontSize:'30px'}}>{detailPost?.title}</p>
          </Box>
        </Box>
        <div className="width-full" style={{background:'#333333'}} >
        <Box
          className=" footer-container focus-content  flex-col"
          // sx={{
          //   backgroundImage:
          //     "linear-gradient(rgba(0, 0, 0, 0.7) 50px, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.95) 0%)",
          //   backgroundClip: "padding-box",
          // }}
        >
          <DetailPost></DetailPost>
        </Box>
        </div>
      </Box>
    </Page>
  );
}
