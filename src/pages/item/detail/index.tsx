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
import { faPlusSquare, faMinusSquare, faCartShopping  } from "@fortawesome/free-solid-svg-icons";
import { type } from "os";
import zIndex from "@mui/material/styles/zIndex";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { number } from "yup";


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
  imageTitleUrlStreams: string,
}

interface ItemToCart {
  id?: string,
  titleImageUrlStream?:string[],
  title?: string,
  price?: number,
  amount: number,
  totalPrice?: number,
}

export default function PostDetail() {
  const [detailItem, setListItem] = useState<Item>();
  const [amount, setAmount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(detailItem?.price);
  const [amountCartItem, setAmountCartItem] = useState(0);
  const [displayAmount, setDisplayAmout] = useState("none");
  const [zoomImage, setZoomImage] = useState(detailItem?.imageTitleUrlStreams[0]);
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
          setZoomImage(newArr.imageTitleUrlStreams[0]);
          setTotalPrice(newArr.price);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }, [route.query]);
  //datas
  //components

  useEffect(() => {
    var cart: any = window.localStorage.getItem('cart');
    
    var newCart = [];
    if (cart != null) {
        newCart = JSON.parse(window.localStorage.getItem("cart") || "");
    } 
    console.log(newCart);
    var totalAmount = 0;
    for(var i = 0; i < newCart.length; i++)
      totalAmount += newCart[i].amount;
    setAmountCartItem(totalAmount);
    if (newCart.length == 0) {
      setDisplayAmout("none");
    }
    else {
      setDisplayAmout("flex");
    }
  }, [])

  const formatVND = (numPrice: number) => {
    if (numPrice != undefined) {
      var price = numPrice.toString();
      var len = price.length;
      var ind = len - 3;
      while(ind > 0) {
        price = price.substring(0, ind) + "." + price.substring(ind, len);
        len++;
        ind -= 3;
      }
      return price + "đ";
    }
    return "0đ";
  }

  const changeAmount = (type: any) => {
    var newAmount = amount; 
    if (type == 0) {
      newAmount++;
    }
    else if (newAmount) newAmount--;
    console.log(newAmount);
    setAmount(newAmount);
    if (detailItem?.price != undefined)
      setTotalPrice(newAmount * detailItem?.price);
  }

  const addtoCart = () => {
    console.log("kk");
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
      id: detailItem?.id,
      title: detailItem?.title,
      amount: amount,
      price: detailItem?.price,
      totalPrice: totalPrice,
      titleImageUrlStream: zoomImage,
    };
    var havedInCart = false;
    for(var i = 0; i < newCart.length; i++) {
      if (newCart[i].id == addItem.id) {
        newCart[i].amount += addItem.amount;
        newCart[i].totalPrice += addItem.totalPrice; 
        havedInCart = true;
      }
    }
    if (havedInCart == false) newCart[ind++] = addItem;
    window.localStorage.setItem('cart', JSON.stringify(newCart));
    var totalAmount = 0;
    for(var i = 0; i < newCart.length; i++)
      totalAmount += newCart[i].amount;
    setAmountCartItem(totalAmount);
    if (newCart.length == 0) {
      setDisplayAmout("none");
    }
    else {
      setDisplayAmout("flex");
    }
  }

  const gotoCart = () => {
    route.push({
      pathname: '/cart',
    }
    )
  }

  const CartComponent = () => {
    return (
      <Box className="cart-shopping" onClick={() => gotoCart()}>
        <FontAwesomeIcon id="cart-shopping-icon" icon={faCartShopping}></FontAwesomeIcon>
        <div className="cart-amount" style={{display: displayAmount}}>
          <p>{amountCartItem}</p>
        </div>
      </Box>
    )
  }

  const hoverImage = (image: any) => {
    setZoomImage(image.target.src);
  }

  const ListItemDemo = () => {
    return ( 
      <Box className="list-item-demo">
        {
          detailItem?.imageTitleUrlStreams.slice(0, 4).map((imageLink, index) => {
            return (
            <Box key={index} className="list-item-demo-elements">
              <img onMouseOver={(e) => hoverImage(e)} src={imageLink}/>
            </Box>
            )
          })
        }
      </Box>
    )
  }

  const listbuymost = [
    {
      title: "Vòng tay phong thủy",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRzeS4SuEA3KjjeGncXAPN9NO_dwcUJT9cvdcmtl6-yCtsaQD3FNztwsMfXf-7bydEGPJm0o5fzshSe6jI10instaoAowUq7n_kACUaT4RwYUnLUsLhgEYJFcTT0qwB5kkbpQ&usqp=CAc",
      price: 200000
    },
    {
      title: "Vòng tay phong thủy",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRzeS4SuEA3KjjeGncXAPN9NO_dwcUJT9cvdcmtl6-yCtsaQD3FNztwsMfXf-7bydEGPJm0o5fzshSe6jI10instaoAowUq7n_kACUaT4RwYUnLUsLhgEYJFcTT0qwB5kkbpQ&usqp=CAc",
      price: 200000
    },
    {
      title: "Vòng tay phong thủy",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRzeS4SuEA3KjjeGncXAPN9NO_dwcUJT9cvdcmtl6-yCtsaQD3FNztwsMfXf-7bydEGPJm0o5fzshSe6jI10instaoAowUq7n_kACUaT4RwYUnLUsLhgEYJFcTT0qwB5kkbpQ&usqp=CAc",
      price: 200000
    },
    {
      title: "Vòng tay phong thủy",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRzeS4SuEA3KjjeGncXAPN9NO_dwcUJT9cvdcmtl6-yCtsaQD3FNztwsMfXf-7bydEGPJm0o5fzshSe6jI10instaoAowUq7n_kACUaT4RwYUnLUsLhgEYJFcTT0qwB5kkbpQ&usqp=CAc",
      price: 200000
    },
]

  const ListItemBuyMost = () => {
    return ( 
      <Box className="list-item-buy-most">
        {
          listbuymost.slice(0, 4).map((item, index) => {
            return (
            <Box key={index} className="list-item-buy-most-elements">
              <Box className="item-buy-most-wrapper">
                <img id="image-buy-most" src={item.image} />
              </Box>
              <Box className="title-and-price-buy-most">
                <p>{item.title}</p>
                <p>{formatVND(item.price)}</p>
              </Box>
            </Box>
            )
          })
        }
      </Box>
    )
  }

  const ListPosts = () => {

    return (
      <Box
        className="list-items-content flex-row full-width full-height"
      >
        <Box className="content-item">
              <Box className="image-item">
                <Box className="image-zoom-detail">
                  <img id="image-item-detail" alt="" src={zoomImage} />
                </Box>
                <ListItemDemo></ListItemDemo>
              </Box>
              <Box className="info-item">
                <p className="title-item">{detailItem?.title}</p>
                <p className="price-item">{formatVND(totalPrice)}</p>
                <Box className="introduction-item">
                  <p>• Chất liệu vật phẩm: Pha Lê cao cấp luyện nhiệt độ cao<br/>
                      • Quy cách đóng gói & Thông số kỹ thuật: <br/>
                      - Đóng hộp gỗ đẹp<br/>
                      - Kích thước: (dài x rộng x cao): 12,5cm x 12,5cm x 18,5cm <br/>
                      • Công năng vật phẩm<br/>
                      - Tăng cường quan vận, quan trường<br/>
                      - Ngăn ngừa thị phi<br/>
                      - Tránh tiểu nhân hãm hại<br/>
                      • Vị trí đặt để: Đặt trên bàn làm việc</p>
                </Box>
                <Box className="amount-item">
                  <p className="amount-title">Số lượng</p>
                  <Box className="amount-container">
                    <FontAwesomeIcon className="amount-icon" onClick={() => changeAmount(1)} icon={faMinusSquare}></FontAwesomeIcon>
                    <p style={{marginLeft: "10px"}} className="amount-number">{amount}</p>
                    <FontAwesomeIcon style={{marginLeft: "10px"}} className="amount-icon" onClick={() => changeAmount(0)} icon={faPlusSquare}></FontAwesomeIcon>
                  </Box>
                </Box>
                <Box className="buy-button-container">
                  <Button className="buy-now-button">Mua ngay</Button>
                  <Button className="add-to-cart-button" onClick={() => addtoCart()}>Thêm vào cửa hàng</Button>
                </Box>
              </Box>
              <Box className="buy-most-container">
                <Box className="buy-most-title">
                  <p>Các sản phẩm mua nhiều</p>
                </Box>
                <ListItemBuyMost></ListItemBuyMost>
              </Box>
        </Box>
        <Box className="intro-item">
        </Box>
      </Box>
    );
  };

  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={0}>
      <CartComponent></CartComponent>
      <Box className="item-detail-content full-width">
        <Box
          className="focus-content full-width flex-col"
          sx={{
            padding: "100px 21% 0px 21%",
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5) 100px, rgba(0, 0, 0, 0.85) 50%)",
            backgroundClip: "padding-box",
          }}
        >
          <ListPosts></ListPosts>
        </Box>
      </Box>
    </Page>
  );
}
