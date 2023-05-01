import { PAGE_TITLE } from "@/constants";
import Page from "@/layouts";
import { Box, TextField, Button } from "@mui/material";
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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
  itemId: string,
  id: string,
  title: string,
  price: number,
  amount: number,
  totalPrice: number,
}

interface SendItem {
  itemId: string,
  amount: number,
}

export default function Cart() {
  const [cart, setCart] = useState<ItemToCart[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  useEffect(() => {
    var cart: any = window.localStorage.getItem('cart');
    console.log(cart);
    var newCart = [];
    if (cart != null) {
        newCart = JSON.parse(window.localStorage.getItem("cart") || "");
    } 
    var totalPrice = 0;
    for(var i = 0; i < newCart.length; i++)
        totalPrice += newCart[i].totalPrice;
    setCart(newCart);
    setTotalPrice(totalPrice);
  }, []);

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

  axios.defaults.baseURL = 'http://10.248.158.167:1112';
  const order = () => {
    console.log("cart")
    console.log(cart);
    var newCart:SendItem[] = [];
    for(var i = 0; i < cart.length; i++) {
      newCart[i] = Object.assign({}, cart[i]);
      newCart[i].itemId = cart[i].id;
      newCart[i] = (({ itemId, amount }) => ({ itemId, amount }))(newCart[i]);
    }
    console.log("send");
    console.log(newCart);
    axios({
      headers: {
        'Accept': '*/*',
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      method: 'post',
      url: '/order',
      data: {
        cart: newCart,
        name: fullName,
        address: address,
        phone: phoneNumber,
      }
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
  });
  }

  const CartTable = () => {
    return (
        <div>
    <p>Giỏ hàng của bạn</p>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="title-cart-table">
            <TableCell>STT</TableCell>
            <TableCell>Ảnh sản phẩm</TableCell>
            <TableCell>Tên sản phẩm</TableCell>
            <TableCell >Giá sản phẩm&nbsp;(g)</TableCell>
            <TableCell >Số lượng&nbsp;(g)</TableCell>
            <TableCell >Đơn giá&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item) => (
            <TableRow
              key={item.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{item.title}</TableCell>
              <TableCell >{item.price}</TableCell>
              <TableCell >{item.amount}</TableCell>
              <TableCell >{item.totalPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h1>Tổng số: {formatVND(totalPrice)}</h1>
    </div>
    )
  }

  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={0}>
      <Box className="item-detail-content full-width">
        <Box
          className="cart-content full-width flex-row"
          sx={{
            padding: "100px 300px 0px 300px",
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.5) 0px, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.7) 0%)",
            backgroundClip: "padding-box",
          }}
        >
          <CartTable></CartTable>
          <Box>
            <p>Thông tin đơn hàng</p>
            <Box>
              <TextField sx={{width: "100%"}}
                  id="title-post"
                  label="Họ và tên"
                  placeholder="Write here"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      console.log(event.target.value);
                      setFullName(event.target.value);
                  }}
                  />
              <TextField sx={{width: "100%"}}
                id="title-post"
                label="SỐ điện thoại liên hệ"
                placeholder="Write here"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  console.log(event.target.value);
                  setPhoneNumber(event.target.value);
                }}
              />
              <TextField sx={{width: "100%"}}
                id="title-post"
                label="Địa chỉ nhận hàng"
                placeholder="Write here"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  console.log(event.target.value);
                  setAddress(event.target.value);
                }}
              />
              <Button onClick={() => order()}>Đặt hàng</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}
