import {Backend, PAGE_TITLE} from "@/constants";
import Page from "@/layouts";
import {Box, TextField, Button, Fade, Alert} from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {deleteItemByIndex, formatVND} from "@/constants/FnCommon";
import {ItemToCart} from "@/interfaces/response";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";

<link rel="preconnect" href="https://fonts.gstatic.com"></link>;

interface SendItem {
  itemId: string,
  amount: number,
}

export default function Cart() {
  const [cart, setCart] = useState<ItemToCart[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();
  const assign = (number: any) => {
    return {
      type: "ASSIGN",
      payload: number,
    }
  }
  const dispatch = useDispatch();
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

  const deleteItem = (ind: number) => {
    let newCart: ItemToCart[] = deleteItemByIndex(ind);
    setCart(newCart);
    setTotalPrice(0);
    dispatch(assign(newCart.length));
    window.localStorage.setItem('cart', JSON.stringify(newCart));
  }

  const deleteAllItems = () => {
      window.localStorage.setItem('cart', JSON.stringify([]));
  }

  const CartTable = () => {
    return (
        <div className="cart-table">
    <h1 className="cart-title">Giỏ hàng của bạn</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="title-cart-table">
            <TableCell>STT</TableCell>
            <TableCell>Tên sản phẩm</TableCell>
            <TableCell >Đơn giá (VNĐ)</TableCell>
            <TableCell >Số lượng</TableCell>
            <TableCell >Thành tiền (VNĐ)</TableCell>
            <TableCell >Xóa</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item, index) => (
            <TableRow
              key={item.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className="content-cart-table"
            >
              <TableCell>
                {index + 1}
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell sx={{color:'#eb1b24'}}>{formatVND(item.price, true)}</TableCell>
              <TableCell >{item.amount}</TableCell>
              <TableCell sx={{color:'#eb1b24'}}>{formatVND(item.totalPrice, true)}</TableCell>
              <TableCell ><FontAwesomeIcon onClick={() => deleteItem(index)} style={{color: 'black'}} icon={faTrash} id="delete-cart-item"/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <h1 className="cart-title" style={{marginTop:'20px'}}>Tổng giá trị đơn hàng:<span style={{color:'#eb1b24', fontSize:'20px'}}> {formatVND(totalPrice, false)}</span></h1>
    </div>
    )
  }

  const OrderInfo = () => {
    // order info
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    // alert status
    const [alertVisibility, setAlertVisibility] = useState(false);
    const [alertContent, setAlertContent] = useState("");
    const [alertType, setAlertType] = useState<any>(""); // 0: success, 1: error

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
              <Alert severity={alertType} variant="standard" className="alert">
                {/*<AlertTitle>Success</AlertTitle>*/}
                {alertContent}
              </Alert>
            </Fade>
          </Box>
      )
    }

    const order = () => {
      let newCart:SendItem[] = [];
      for(let i = 0; i < cart.length; i++) {
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
        url: Backend.URL + '/order',
        data: {
          cart: newCart,
          name: fullName,
          address: address,
          phone: phoneNumber,
        }
      })
          .then((response) => {
            setAlertVisibility(true);
            setAlertType("success");
            setAlertContent("Đặt hàng thành công!");
            deleteAllItems();
            router.push("/item?page=0&pageSize=9")
          }, (error) => {
            setAlertVisibility(true);
            setAlertType("error");
            setAlertContent(error.response.data);
          });
    }

    return (
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
            <Button onClick={() => order()} style={{background:'#eb1b24', color:'white', width:'90%', padding: "7px 0", borderRadius: "20px", fontSize: "18px", fontWeight: "700"}}>Đặt hàng</Button>
          </Box>
          <AlertComponent></AlertComponent>
        </Box>
    )
  }


  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={0}>
      <Box className="cart-detail-content">
        <Box
          className="cart-content"
        >
          <CartTable></CartTable>
          <OrderInfo></OrderInfo>
        </Box>
      </Box>
    </Page>
  );
}
