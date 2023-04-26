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
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { type } from "os";
import zIndex from "@mui/material/styles/zIndex";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

<link rel="preconnect" href="https://fonts.gstatic.com"></link>;
interface TypePost {
  id: Number;
  name: string;
}

interface Item {
  title: string,
  price: Number,
}

export default function PostDetail() {
  const [detailItem, setListItem] = useState<Item>();
  const route = useRouter();
  useEffect(() => {
    if (route.query.id !== undefined) {
      const URL = "http://10.248.158.167:1112/item/" + route.query.id;
      console.log(route.query.id);
      axios({
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        method: "get",
        url: URL,
      }).then(
        (res) => {
          const newArr = res.data as Item;
          console.log(res.data);
          setListItem(newArr);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }, [route.query]);
  //datas
  //components

  const formatVND = (price: any) => {
    if (price === undefined) return "0 VNĐ"
    var len = price.length;
    var ind = len - 3;
    while(ind > 0) {
      price = price.substring(0, ind) + "." + price.substring(ind, len);
      len++;
      ind -= 3;
    }
    return price + " VNĐ";
  }

  const ListPosts = () => {

    return (
      <Box
        className="list-items-content flex-row full-width full-height"
      >
        <Box className="content-item">
              <Box className="image-item">
                <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"/>
              </Box>
              <Box className="info-item">
                <p>{detailItem?.title}</p>
                <p>{formatVND(detailItem?.price.toString())}</p>
              </Box>
        </Box>
        <Box className="intro-item">
        </Box>
      </Box>
    );
  };

  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={0}>
      <Box className="content full-width">
        <Box
          className="focus-content full-width flex-col"
          sx={{
            padding: "0px 300px 0px 300px",
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5) 0px, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 0%)",
            backgroundClip: "padding-box",
          }}
        >
          <ListPosts></ListPosts>
        </Box>
      </Box>
    </Page>
  );
}
