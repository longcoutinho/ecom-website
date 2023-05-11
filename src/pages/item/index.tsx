import { PAGE_TITLE } from "@/constants";
import Page from "@/layouts";
import { Box, Button, Input, Paper } from "@mui/material";
import PaginationMui from '@mui/material/Pagination';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "@/components/Image";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
<link rel="preconnect" href="https://fonts.gstatic.com"></link>;
import {Item} from "../../interfaces/response"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Pagination, Autoplay } from "swiper";


export default function ItemComponent() {
  const [listPosts, setListPost] = useState<Item[]>([]);
  const [listFeaturedPosts, setListFeaturedPosts] = useState<Item[]>([]);
  const [pageDefault, setPageDefault] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [title, setTitle] = useState("");
  const router = useRouter();
  const textInput = useRef<any>();

  const focusInput = () => {
    textInput.current.focus();
  }

  useEffect(() => {
    if (router.query.page !== undefined && router.query.pageSize !== undefined) {
      axios({
        method: "get",
        url: "http://10.248.158.167:1112/item",
        params: {
          page: router.query.page,
          pageSize: router.query.pageSize,
          title: router.query.title,
        },
      }).then(
        (res) => {
          setListPost(res.data.content);
          setPageDefault(res.data.pageable.pageNumber + 1);
          setPageCount(res.data.totalPages);
        },
        (err) => {
          console.log(err);
        }
      );
      axios({
        method: "get",
        url: "http://10.248.158.167:1112/item",
      }).then(
        (res) => {
          setListFeaturedPosts(res.data.content);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }, [router.query]);

  //datas
  
  const redirectPagination = (page: string, pageSize: any) => {
    var pageNumber = parseInt(page);
    pageNumber--;
    router.push({
      pathname: "/item",
      search: "?" + new URLSearchParams({ 
        page: pageNumber.toString(),
        pageSize: pageSize,
        title: title
       }),
    });
  };

  const redirectSearchInput = (page: string, pageSize: any, title: any) => {
    var pageNumber = parseInt(page);
    pageNumber--;
    router.push({
      pathname: "/item",
      search: "?" + new URLSearchParams({ 
        page: pageNumber.toString(),
        pageSize: pageSize,
        title: title,
       }),
    });
  }

  const paginationChange = (e: any) => {
    redirectPagination(e, 9);
  }

  const searchPosts = (event: any) => {
    if (event.key == 'Enter') {
      console.log(event.key);
      console.log(event.target.value);
      
        setTitle(event.target.value);
        redirectSearchInput("1", 9, event.target.value)
    }
  }

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

  const handleChangeInput = (e: any) => {
    setTitle(e.target.value);
  }

  const SearchInput = () => {
    return (
      <Box
        className="search-input full-width center flex-row"
      >
        <input autoFocus value={title} onChange={handleChangeInput} className="list-posts-input-content" onKeyDown={searchPosts} placeholder="Nội dung tìm kiếm" ref={textInput}/>
      </Box>
    );
  };

  const redirect = (id: any) => {
    router.push({
      pathname: "/item/detail",
      search: "?" + new URLSearchParams({ id: id }),
    });
  };


  const ListPosts = () => {
    

    const ListPostComponents = (props: any) => {
      return (
        <Box
          className="list-posts-container"
        >
          {listPosts.map((item, index) => {
            return (
              <Box
                onClick={() => redirect(item.id)}
                key={index}
                className="list-items-element"
              >
                <Box className="image-and-content-element-item">
                  <Box className="list-items-image">
                    <img
                      alt=""
                      id="image-post_item"
                      src={item.titleImageUrlStream}
                    />
                  </Box>
                  <Box
                    className="list-posts-content"
                  >
                    <h1 style={{ fontSize: "20px", fontWeight: "700px"}} className="title-list-item-home">
                      {item.title}
                    </h1>
                    <p
                      className="content-post"
                      style={{ fontSize: "17px", color: "#777777", marginTop: "0px"}}
                    >
                      {formatVND(item.price)}
                    </p>
                  </Box>
                </Box>
                <Button className="btn-details-post">Xem chi tiết</Button>
              </Box>
            );
          })}
        </Box>
      );
    };

    return (
      <Box className="list-item-content">
        <Box className="list-item-search-container">
          <SearchInput></SearchInput>
        </Box>
        <Box
        className="list-items-wrapper"
        sx={{
          padding: "0",
          flexGrow: 1,
        }}
      >
        <ListPostComponents />
        <PaginationMui count={pageCount} defaultPage={pageDefault} variant="outlined" onChange={(e: any, value) => paginationChange(value)} sx={{color:'white'}}/>
      </Box>
      </Box>
      
    );
  };

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
        <Box key={index} sx={{ marginLeft: "20px" }}>
          <p style={{ color: "gray", textTransform: "uppercase" }}>{item}</p>
        </Box>
      );
    });
    return (
      <Box sx={{ height: "50px", paddingTop:'30px' }} className="flex-row full-width center">
        {ListMenuPostComponent}
      </Box>
    );
  };
  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={0}>
      <Box className="content full-width">
        <Box
          className="header-content full-width flex-row"
          sx={{
            position: "relative",
            padding: "0px 200px 70px 200px",
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
                  fontSize: "30px",
                  padding: "10px 30px 10px 30px",
                  border: "2px solid white",
                }}
              >
                Sản phẩm
              </span>
            </p>
          </Box>
        </Box>
        <div className="width-full" style={{backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.1) , rgba(0, 0, 0, 0.7) 60px, rgba(0, 0, 0, 0.99) 107px)  ",
            backgroundClip: "padding-box",}}>
        <Box
          className="body-content_home"
          
        >
          <MenuPostComponent></MenuPostComponent>
          <ListPosts></ListPosts>
        </Box>
        </div>
      </Box>
    </Page>
  );
}
