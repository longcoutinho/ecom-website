import {PAGE_TITLE} from "@/constants";
import Page from "@/layouts";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box, Button, Fade, Alert} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare, faCartShopping  } from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import { useRouter } from "next/router";
import {Post, ItemToCart} from "@/interfaces/response";
import {addItemToCart, formatVND} from "@/constants/FnCommon";
import {useDispatch } from "react-redux";

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
  imageTitleUrlStreams: string[],
}

export default function PostDetail() {
  const [detailItem, setListItem] = useState<Item>({
    id: "string",
    title: "string",
    price: 1,
    introduction: null,
    content: null,
    status: 1,
    createAt: "string",
    updateAt: null,
    imageTitleUrlStreams: [],
  });
  const [amountCartItem, setAmountCartItem] = useState(0);
  const [displayAmount, setDisplayAmout] = useState("none");
  const [zoomImage, setZoomImage] = useState(detailItem?.imageTitleUrlStreams[0]);
  const [listMenuItem, setListMenuItem] = useState<TypePost[]>([]);
  const [listRelatedPost, setListRelatedPost] = useState<Post[]>([]);
  const [alertVisibility, setAlertVisibility] = useState(false);
  const route = useRouter();
  const dispatch = useDispatch();

  const assign = (number: any) => {
    return {
      type: "ASSIGN",
      payload: number,
    }
  }

  useEffect(() => {
    console.log("kkk");
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
        },
        (err) => {
          console.log(err);
        }
      );
    }

    axios({
      method: "get",
      url: "http://10.248.158.167:1112/item",
    }).then(
        (res) => {
          console.log(res.data);
          setListRelatedPost(res.data.content);
        },
        (err) => {
          console.log(err);
        }
    );
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

  const AlertComponent = () => {
    return(
        <Box sx={{position: "fixed", top: "0px", right: "0px"}}>
          <Fade
              in={alertVisibility} //Write the needed condition here to make it appear
              timeout={{ enter: 1000, exit: 1000 }} //Edit these two values to change the duration of transition when the element is getting appeared and disappeard
              addEndListener={() => {
                setTimeout(() => {
                  setAlertVisibility(false)
                }, 2000);
              }}
          >
            <Alert severity="success" variant="standard" className="alert">
              {/*<AlertTitle>Success</AlertTitle>*/}
              Đã thêm vật phẩm vào giỏ hàng
            </Alert>
          </Fade>
        </Box>
    )
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
                <p>{formatVND(item.price, false)}</p>
              </Box>
            </Box>
            )
          })
        }
      </Box>
    )
  }

  const ListMenuItemComponent = () => {
    const menu = listMenuItem.map((items, index) => {
      return (
          <Box className="list-items-search-container-elements" key={index}>{items.name}</Box>
      )
    });
    return (
        <Box className="list-items-search-container-content">
          {menu}
        </Box>
    )
  }

  const ListMenuItem = () => {
    return (<Box className="list-items-search-container">
      <Box className="list-items-search-container-title">
        <p>Vật phẩm phong thủy</p>
      </Box>
      <ListMenuItemComponent></ListMenuItemComponent>
    </Box>)
  }

  const RelatedPost = () => {
    return (
        <Box className="related-post-container">
          {
            listRelatedPost.slice(0, 15).map((relatedPost, index) => (
                <Box key={index} className="related-post-element">
                  <Box className="related-post-image">
                    <img src={relatedPost.titleImageUrlStream} />
                  </Box>
                  <Box className="related-post-content">
                    <p>{relatedPost.title}</p>
                    <p>5/9/2023</p>
                  </Box>
                </Box>
            ))
          }
        </Box>
    )
  }

  const AmountAndPrice = () => {
    const [amount, setAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = () => {
      let addItem: ItemToCart = {
        itemId: detailItem?.id,
        id: detailItem?.id,
        title: detailItem?.title,
        amount: amount,
        price: detailItem?.price,
        totalPrice: totalPrice,
        titleImageUrlStream: zoomImage,
      };
      let newCart = addItemToCart(addItem);
      dispatch(assign(newCart.length));
      window.localStorage.setItem('cart', JSON.stringify(newCart));
      if (newCart.length == 0) {
        setDisplayAmout("none");
      }
      else {
        setDisplayAmout("flex");
      }
      setAlertVisibility(true);
    }

    const changeAmount = (type: any) => {
      let number = amount;
      if (type) {
        if (number) number--;
      }
      else {
        number++;
      }
      setTotalPrice(number * detailItem?.price);
      setAmount(number);
    }

    useEffect(() => {
      setAmount(1);
      setTotalPrice(detailItem?.price);
    },[])

    return (
        <Box>
          <Box className="price-item">
            <p className="price-item-title">Giá bán:</p>
            <p className="price-item-content">{formatVND(totalPrice, false)}</p>
          </Box>
          <Box className="amount-item">
            <p className="amount-title">Số lượng:</p>
            <Box key={"longhvh"} className="amount-container">
              <FontAwesomeIcon className="amount-icon" onClick={() => changeAmount(1)} icon={faMinusSquare}></FontAwesomeIcon>
              <p className="amount-number">{amount}</p>
              <FontAwesomeIcon className="amount-icon" onClick={() => changeAmount(0)} icon={faPlusSquare}></FontAwesomeIcon>
            </Box>
          </Box>
          <Box className="buy-button-container">
            <Button className="buy-now-button">Đặt hàng</Button>
            <Button className="add-to-cart-button" onClick={() => addToCart()}>Thêm vào giỏ</Button>
          </Box>
        </Box>
    )
  }

  const ListItems = () => {
    return (
      <Box
          sx={{gap: "10px"}}
        className="list-items-content"
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
                <Box className="introduction-item">
                  <p className="introduction-item-title">Mô tả sản phẩm:</p>
                  <Box className="introduction-item-content">
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
                  <AmountAndPrice></AmountAndPrice>
                </Box>
              </Box>
        </Box>
        <Box className="post-page-ad-wrapper">
          <Box className="post-page-register-wrapper">
            <Box className="post-page-title">
              <p>Đăng ký xem tử vi</p>
            </Box>
            <Box className="post-page-register-content">
              <Box className="post-page-input-wrapper">
                <p>Họ và tên</p>
                <input type="text"></input>
              </Box>
              <Box className="post-page-input-wrapper">
                <p>Số điện thoại</p>
                <input type="text"></input>
              </Box>
              <button>Đăng ký</button></Box>
          </Box>
          <Box>
            <Box className="post-page-title">
              <p>Sản phẩm thường được mua cùng</p>
            </Box>
            <RelatedPost></RelatedPost>
          </Box>
        </Box>
      </Box>
    );
  };

  const ListBuyMost = () => {
    return (<Box className="buy-most-container">
      <Box className="buy-most-title">
        <p>Các sản phẩm mua nhiều</p>
      </Box>
      <ListItemBuyMost></ListItemBuyMost>
    </Box>);
  }

  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={0}>
      {/*<CartComponent></CartComponent>*/}
      <Box className="item-detail-content">
        <ListItems></ListItems>
        {/*<ListBuyMost></ListBuyMost>*/}
      </Box>
      <AlertComponent></AlertComponent>
    </Page>
  );
}
