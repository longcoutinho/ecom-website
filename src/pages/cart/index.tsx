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
import { faTrash } from "@fortawesome/free-solid-svg-icons";
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
import { DeleteOutline, DeleteForever } from "@mui/icons-material";

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
  titleImageUrlStream:string,
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
        <div className="cart-table">
    <h1 className="cart-title">Giỏ hàng của bạn</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="title-cart-table">
            <TableCell>Ảnh</TableCell>
            <TableCell>Tên sản phẩm</TableCell>
            <TableCell >Giá sản phẩm</TableCell>
            <TableCell >Số lượng</TableCell>
            <TableCell >Thành tiền</TableCell>
            <TableCell >Xóa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item, index) => (
            <TableRow
              key={item.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell><Box sx={{height: "100%", width: "100%"}}>
                <img style={{height: "50px", width: "80%"}} src={item.titleImageUrlStream} />
                </Box> 
                </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell sx={{color:'#eb1b24'}}>{item.price}</TableCell>
              <TableCell >{item.amount}</TableCell>
              <TableCell sx={{color:'#eb1b24'}}>{item.totalPrice}</TableCell>
              <TableCell ><FontAwesomeIcon style={{color: 'black'}} icon={faTrash} id="delete-cart-item"/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h1 className="cart-title" style={{marginTop:'20px'}}>Tổng giá trị đơn hàng:<span style={{color:'#eb1b24', fontSize:'20px'}}> {formatVND(totalPrice)}</span></h1>
    </div>
    )
  }

  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={0}>
      <Box className="cart-detail-content full-width">
        <Box
          className="cart-content full-width flex-row"
          sx={{
             padding: "100px 300px 0px 300px",

             backgroundClip: "padding-box",
          }}
        >
          <CartTable></CartTable>
          <Box className="cart-info">
            <h1 className="cart-title">Thông tin đơn hàng</h1>
            <Box className="cart-input">
              <Box className="cart-input_item">
                <p>Họ và tên</p>
              <TextField sx={{width: "100%", background:'white'}}
                  id="title-post"
                  placeholder="Write here"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      console.log(event.target.value);
                      setFullName(event.target.value);
                  }}
                  /></Box>
                  <Box className="cart-input_item">
                  <p>Số điện thoại</p>
              <TextField sx={{width: "100%", background:'white'}}
                id="title-post"
                placeholder="Write here"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  console.log(event.target.value);
                  setPhoneNumber(event.target.value);
                }}
              />
                  </Box>
               <Box className="cart-input_item">
               <p>Địa chỉ</p>
              <TextField sx={{width: "100%", background:'white'}}
                id="title-post"
                placeholder="Write here"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  console.log(event.target.value);
                  setAddress(event.target.value);
                }}
              /></Box>
              <Button onClick={() => order()} style={{background:'#eb1b24', color:'white', width:'90%'}}>Đặt hàng</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Page>
  );
}
