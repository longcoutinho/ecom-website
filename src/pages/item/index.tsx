import { PAGE_TITLE, listItems, listMenuItem } from "@/constants";
import Page from "@/layouts";
import { Box, Button, Divider, Tab, Tabs } from "@mui/material";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
<link rel="preconnect" href="https://fonts.gstatic.com"></link>;
import { Item } from "../../interfaces/response";
import React from "react";
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
  const textInput = useRef<any>();

  const focusInput = () => {
    textInput.current.focus();
  };

  useEffect(() => {
    if (
      router.query.page !== undefined &&
      router.query.pageSize !== undefined
    ) {
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
          pageSize: pageSize,
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

  const formatVND = (numPrice: number) => {
    if (numPrice != undefined) {
      var price = numPrice.toString();
      var len = price.length;
      var ind = len - 3;
      while (ind > 0) {
        price = price.substring(0, ind) + "." + price.substring(ind, len);
        len++;
        ind -= 3;
      }
      return price + " VND";
    }
    return "0đ";
  };

  const handleChangeInput = (e: any) => {
    setTitle(e.target.value);
  };

  const SearchInput = () => {
    return (
      <Box className="search-input full-width center flex-row">
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

  const redirect = (id: any) => {
    router.push({
      pathname: "/item/detail",
      search: "?" + new URLSearchParams({ id: id }),
    });
  };
  const ListPosts = () => {
    const ListPostComponents = (props: any) => {
      return (
        <Box className="list-posts-container">
          {listItems.map((item, index) => {
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
                  <Box className="list-posts-content">
                    <h1
                      style={{
                        fontSize: "20px",
                        fontWeight: "700px",
                        color: "blue",
                      }}
                      className="title-list-item-home"
                    >
                      {item.title}
                    </h1>
                    <Divider />
                    <p
                      className="content-post"
                      style={{
                        fontSize: "18px",
                        color: "#f70d28",
                        margin: "8px 0",
                        width: "100%",
                      }}
                    >
                      {formatVND(item.price)}
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
    return (
      <Box className="list-item-content">
        <Box className="list-item-search-container">
          <Tabs
            orientation="vertical"
            variant="scrollable"
            visibleScrollbar={false}
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: "divider" }}
          >
            {listMenuItem.map((item, index) => (
              <Tab key={index} label={item} {...a11yProps(index)} />
            ))}
          </Tabs>
        </Box>
        <Box
          className="list-items-wrapper"
          sx={{
            padding: "0",
            flexGrow: 1,
          }}
        >
          <TabPanel value={value} index={0}>
            <ListPostComponents />
          </TabPanel>
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
      <Box className="home-page-content " sx={{ width: "100vw" }}>
        <Box className="body-content_home">
          <ListPosts></ListPosts>
        </Box>
      </Box>
    </Page>
  );
}
