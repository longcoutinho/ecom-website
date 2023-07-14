import {PAGE_TITLE, listItems, Backend} from "@/constants";
import Page from "@/layouts";
import { Box, Button, Divider, Tab, Tabs } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "@/constants/FnCommon"
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import {TypePost} from "@/interfaces/response";
<link rel="preconnect" href="https://fonts.gstatic.com"></link>;
import { Item } from "../../interfaces/response";
import React from "react";
import {formatVND} from "@/constants/FnCommon";
import Link from "next/link";
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
export default function ItemComponent() {
  const [listPosts, setListPost] = useState<Item[]>([]);
  const [listFeaturedPosts, setListFeaturedPosts] = useState<Item[]>([]);
  const [pageDefault, setPageDefault] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [title, setTitle] = useState("");
  const router = useRouter();
  const {push, query} = useRouter();
  const textInput = useRef<any>();
  const [listMenuItem, setListMenuItem] = useState<TypePost[]>([]);
  const [itemsType, setItemsType] = useState("");

  useEffect(() => {
    if (router.query.type !== undefined) setItemsType(router?.query?.type[0]);
    if (
      router.query.page !== undefined &&
      router.query.pageSize !== undefined
    ) {
      axios({
        method: "get",
        url: Backend.URL + "/item",
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
        url: Backend.URL + "/item",
      }).then(
        (res) => {
          setListFeaturedPosts(res.data.content);
        },
        (err) => {
          console.log(err);
        }
      );
      axios({
        method: "get",
        url: Backend.URL + "/type/1",
      }).then(
          (res) => {
            setListMenuItem(res.data);
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
      search:
        "?" +
        new URLSearchParams({
          page: pageNumber.toString(),
          pageSize: pageSize,
          title: title,
        }),
    });
  };

  const redirectSearchInput = (page: string, pageSize: any, title: any) => {
    var pageNumber = parseInt(page);
    pageNumber--;
    router.push({
      pathname: "/item",
      search:
        "?" +
        new URLSearchParams({
          page: pageNumber.toString(),
          pageSize: "9",
          title: title,
        }),
    });
  };

  const paginationChange = (e: any) => {
    redirectPagination(e, 9);
  };

  const searchPosts = (event: any) => {
    if (event.key == "Enter") {
      console.log(event.key);
      console.log(event.target.value);

      setTitle(event.target.value);
      redirectSearchInput("1", 9, event.target.value);
    }
  };

  const handleChangeInput = (e: any) => {
    setTitle(e.target.value);
  };

  const SearchInput = () => {
    return (
      <Box className="posts-search-input full-width center flex-row">
        <input
          autoFocus
          value={title}
          onChange={handleChangeInput}
          className="list-posts-input-content"
          onKeyDown={searchPosts}
          placeholder="Nội dung tìm kiếm"
          ref={textInput}
        />
      </Box>
    );
  };

  const Directory = () => {
    const PostTypeDirectory = () => {
      if (itemsType === undefined) {
        return (<Box></Box>)
      }
      else {
        return (
            <Box sx={{display: "flex", flexDirection: "row"}}>
              <p className="directiory-icon"> {' >> '} </p>
              <a style={{textTransform: "capitalize"}} href="#">{itemsType}</a>
            </Box>
        )
      }
    }

    const SearchDirectiory = () => {
      if (query.title == undefined) {
        return (<Box></Box>)
      }
      else {
        return (
            <Box sx={{display: "flex", flexDirection: "row"}}>
              <p className="directiory-icon"> {' >> '} </p>
              <a href="#">Tìm kiếm với từ khóa `&apos;`{query.title}`&apos;`</a>
            </Box>
        )
      }
    }

    return (<Box className="directory-wrapper">
      <a href="./">Trang chủ</a>
      <p className="directiory-icon"> {'>>'} </p>
      <Link href="/posts?page=0&pageSize=9">Vật phẩm</Link>
      <PostTypeDirectory></PostTypeDirectory>
      <SearchDirectiory></SearchDirectiory>

    </Box>)
  }

  const redirect = (id: any) => {
    router.push({
      pathname: "/item/detail",
      search: "?" + new URLSearchParams({ id: id }),
    });
  };

  const redirectSearchItem = (page: string, pageSize: any, type: any) => {
    let num = Number(page);
    num--;
    let builder = new URLSearchParams();
    builder.set('pageSize', num.toString());
    builder.set('type', type);
    builder.set('page', page);
    router.push({
      pathname: "/item",
      search: "?" + builder,
    });
  }

  const ListItems = () => {
    const ListItemComponents = (props: any) => {
      return (
        <Box className="list-items-item-page-container">
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
                  <Box className="list-element-items-content">
                    <h1
                      className="title-element-list-item-home"
                    >
                      {item.title}
                    </h1>
                    <Divider />
                    <p
                      className="content-post"
                    >
                      {formatVND(item.price, false)}
                    </p>
                    <div className="item-desciption">
                      <p>Mô tả:</p>
                      <p>{item.introduction}</p>
                    </div>
                  </Box>
                </Box>
                <Button className="btn-details-post">Đặt mua</Button>
              </Box>
            );
          })}
        </Box>
      );
    };
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    const ListMenuItemComponent = () => {
      const menu = listMenuItem.map((items, index) => {
        return (
            <Box onClick={() => redirectSearchItem("1", 9, items.name)} className="list-items-search-container-elements" key={index}>{items.name}</Box>
        )
      });
      return (
          <Box className="list-items-search-container-content">
            {menu}
          </Box>
      )
    }
    return (
      <Box className="list-items-content">
        <Directory></Directory>
        <Box sx={{display: "flex", flexDirection: "row", gap: "20px"}}>
          <Box sx={{display: "flex", flexDirection: "column", width: "25%"}}>
            <SearchInput></SearchInput>
            <Box sx={{marginTop: "10px"}} className="list-items-search-container">
              <Box className="list-items-search-container-title">
                <p>Vật phẩm phong thủy</p>
              </Box>
              <ListMenuItemComponent></ListMenuItemComponent>
            </Box>
          </Box>
          <Box
              className="list-items-item-page-wrapper"
          >
            <ListItemComponents />
          </Box>
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
      <Box
        sx={{ height: "50px", paddingTop: "30px" }}
        className="flex-row full-width center"
      >
        {ListMenuPostComponent}
      </Box>
    );
  };
  return (
    <Page title={PAGE_TITLE.HOME} menuIndex={1}>
      <Box className="home-page-content" sx={{ width: "100vw" }}>
        <Box className="body-content_home">
          <ListItems></ListItems>
        </Box>
      </Box>
    </Page>
  );
}
