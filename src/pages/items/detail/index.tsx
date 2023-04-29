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
import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { type } from "os";
import zIndex from "@mui/material/styles/zIndex";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

<link rel="preconnect" href="https://fonts.gstatic.com"></link>;
interface TypePost {
  id: number;
  name: string;
}

interface Item {
  id: string,
  title: string,
  price: number,
  introduction: null,
  content: null,
  status: number,
  createAt: string,
  updateAt: null,
}

interface ItemToCart {
  id: string,
  title: string,
  price: number,
  amount: number,
  totalPrice: number,
}

export default function PostDetail() {
  const [detailItem, setListItem] = useState<Item>({
    "id": "52e01873-0137-4917-ace8-1e9bfab2ba0d",
    "title": "Vòng tay phong thủy 2",
    "introduction": null,
    "content": null,
    "status": 1,
    "price": 20000,
    "createAt": "2023-04-26T08:10:49.000+00:00",
    "updateAt": null
  });
  const [amount, setAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
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
    var len = price.length;
    var ind = len - 3;
    while(ind > 0) {
      price = price.substring(0, ind) + "." + price.substring(ind, len);
      len++;
      ind -= 3;
    }
    return price + " VNĐ";
  }

  const changeAmount = (type: any) => {
    var newAmount = amount; 
    if (type == 0) {
      newAmount++;
    }
    else if (newAmount) newAmount--;
    console.log(newAmount);
    setAmount(newAmount);
    setTotalPrice(newAmount * detailItem.price);
  }

  const addtoCart = () => {
    var cart: any = window.localStorage.getItem('cart');
    var newCart = [];
    if (cart != null) {
      newCart = JSON.parse(window.localStorage.getItem("cart") || "");
      //console.log(cart[0]);
      //console.log(JSON.parse(cart));
      //newCart = JSON.parse(cart);
    } 
    
    var ind = newCart.length;
    var addItem: ItemToCart = {
      id: detailItem.id,
      title: detailItem.title,
      amount: amount,
      price: detailItem.price,
      totalPrice: totalPrice
    };
    newCart[ind++] = addItem;
    window.localStorage.setItem('cart', JSON.stringify(newCart));
  }

  const ListPosts = () => {

    return (
      <Box
        className="list-items-content flex-row full-width full-height"
      >
        <Box className="content-item">
              <Box className="image-item">
                <Image src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"></Image>
              </Box>
              <Box className="info-item">
                <p>{detailItem?.title}</p>
                <p>{formatVND(totalPrice)}</p>
                <Box className="amount-item">
                  <FontAwesomeIcon className="amount-icon" onClick={() => changeAmount(1)} icon={faMinusSquare}></FontAwesomeIcon>
                  <p>{amount}</p>
                  <FontAwesomeIcon className="amount-icon" onClick={() => changeAmount(0)} icon={faPlusSquare}></FontAwesomeIcon>
                </Box>
                <Box>
                  <Button>Mua ngay</Button>
                  <Button onClick={() => addtoCart()}>Thêm vào cửa hàng</Button>
                </Box>
              </Box>
        </Box>
        <Box className="intro-item">
        </Box>
      </Box>
    );
  };

  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={0}>
      <Box className="item-detail-content full-width">
        <Box
          className="focus-content full-width flex-col"
          sx={{
            padding: "100px 300px 0px 300px",
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
