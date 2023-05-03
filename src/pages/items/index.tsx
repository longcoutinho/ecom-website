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
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { type } from "os";
import zIndex from "@mui/material/styles/zIndex";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Item } from "../../interfaces/response";

<link rel="preconnect" href="https://fonts.gstatic.com"></link>;
interface TypePost {
  id: Number;
  name: string;
}

export default function ItemComponent() {
  const [listItems, setListItem] = useState<Item[]>([]);
  const [amountCartItem, setAmountCartItem] = useState(0);
  const [displayAmount, setDisplayAmout] = useState("none");
  const router = useRouter();
  useEffect(() => {
    var cart: any = window.localStorage.getItem("cart");

    var newCart = [];
    if (cart != null) {
      newCart = JSON.parse(window.localStorage.getItem("cart") || "");
    }
    console.log(newCart);
    var totalAmount = 0;
    for (var i = 0; i < newCart.length; i++) totalAmount += newCart[i].amount;
    setAmountCartItem(totalAmount);
    if (newCart.length == 0) {
      setDisplayAmout("none");
    } else {
      setDisplayAmout("flex");
    }

    axios({
      method: "get",
      url: "http://10.248.158.167:1112/item",
    }).then(
      (res) => {
        setListItem(res.data.content);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);
  //datas

  const gotoCart = () => {
    router.push({
      pathname: "/cart",
    });
  };

  const CartComponent = () => {
    return (
      <Box className="cart-shopping" onClick={() => gotoCart()}>
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
        <div className="cart-amount" style={{ display: displayAmount }}>
          <p>{amountCartItem}</p>
        </div>
      </Box>
    );
  };

  const formatVND = (price: string) => {
    if (price == undefined) return "0 VNĐ";
    var len = price.length;
    var ind = len - 3;
    while (ind > 0) {
      price = price.substring(0, ind) + "." + price.substring(ind, len);
      len++;
      ind -= 3;
    }
    return price + " VNĐ";
  };

  const ListItems = () => {
    const redirect = (id: any) => {
      router.push({
        pathname: "/items/detail",
        search: "?" + new URLSearchParams({ id: id }),
      });
    };

    const ListItemComponents = (props: any) => {
      const ListItemContent = listItems.map((item, index) => {
        return (
          <Box
            key={index}
            onClick={() => redirect(item.id)}
            className="list-items-detail-element flex-col"
            sx={{
              padding: "10px 0px 10px 0px",
              width: "200px",
              height: "300px",
              margin: "10px",
              backgroundColor: "gray",
              flexDirection: "space-between",
            }}
          >
            <Box
              className="full-width half-col flex-col center"
              sx={{ objectFit: "cover" }}
            >
              <Image
                alt=""
                id="image-post"
                src={item.titleImageUrlStream}
              ></Image>
            </Box>
            <Box
              className="full-width half-col flex-col center"
              sx={{ padding: "10px" }}
            >
              <h1 style={{ fontSize: "15px", color: "white" }}>{item.title}</h1>
              <h1 style={{ fontSize: "15px", color: "red" }}>
                {formatVND(item.price?.toString())}
              </h1>
            </Box>
          </Box>
        );
      });
      return (
        <Box className="list-posts-detail flex-row full-height">
          {ListItemContent}
        </Box>
      );
    };

    return <ListItemComponents></ListItemComponents>;
  };

  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={0}>
      <CartComponent></CartComponent>
      <Box className="content full-width">
        <Box
          className="header-content full-width flex-row"
          sx={{
            position: "relative",
            padding: "0px 100px 70px 100px",
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
                Sản phẩm
              </span>
            </p>
          </Box>
        </Box>
        <Box
          className="focus-content full-width flex-col"
          sx={{
            padding: "0px 100px 0px 100px",
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.7) 0px, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.95) 0%)",
            backgroundClip: "padding-box",
          }}
        >
          <ListItems></ListItems>
        </Box>
      </Box>
    </Page>
  );
}
