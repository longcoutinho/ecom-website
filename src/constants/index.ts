import {Course} from "@/interfaces/response";

export enum PAGE_TITLE {
  PREFIX = "Phong Thuy | ",
  HOME = "Home",
  LAPLA = "Lap la so phong thuy",
}
export enum URL {
  BASE_URL = "http://10.248.158.167:1112",
  POSTS_SERVICE = "/posts",
  ITEM_SERVICE = "/item",
}
export enum POSTS_SERVICE {
  GET_ALL = "",
  SAVE = "",
  DETAIL = "/detail",
}
export enum ITEM_SERVICE {
  GET_ALL = "",
  DETAIL = "/detail",
}

export const HOME_PAGE_DISPLAY_ITEM = 3;

export const listItems = [
  {
    titleImageUrlStream:
      "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?cs=srgb&dl=pexels-engin-akyurt-1486861.jpg&fm=jpg",
    title: "Cá chép hóa rồng",
    id: 1,
    price: 3500000,
    introduction: "abc",
  },
  {
    titleImageUrlStream:
      "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?cs=srgb&dl=pexels-engin-akyurt-1486861.jpg&fm=jpg",
    title: "Bai viet 1",
    id: 1,
    price: 3500000,
    introduction: "abc",
  },
  {
    titleImageUrlStream:
      "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?cs=srgb&dl=pexels-engin-akyurt-1486861.jpg&fm=jpg",
    title: "Bai viet 1",
    id: 1,
    price: 3500000,
    introduction: "abc",
  },
  {
    titleImageUrlStream:
      "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?cs=srgb&dl=pexels-engin-akyurt-1486861.jpg&fm=jpg",
    title: "Bai viet 1",
    id: 1,
    price: 3500000,
    introduction: "abc",
  },
];

export const listCourse : Course[] = [
  {
    title: "Lớp 1",
    teacher: "Kim ca",
    titleImageUrlStream: "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?cs=srgb&dl=pexels-engin-akyurt-1486861.jpg&fm=jpg",
    videoTime: 20,
  },
  {
    title: "Lớp 1",
    teacher: "Kim ca",
    titleImageUrlStream: "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?cs=srgb&dl=pexels-engin-akyurt-1486861.jpg&fm=jpg",
    videoTime: 20,
  },
  {
    title: "Lớp 1",
    teacher: "Kim ca",
    titleImageUrlStream: "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?cs=srgb&dl=pexels-engin-akyurt-1486861.jpg&fm=jpg",
    videoTime: 20,
  },
  {
    title: "Lớp 1",
    teacher: "Kim ca",
    titleImageUrlStream: "https://images.pexels.com/photos/1486861/pexels-photo-1486861.jpeg?cs=srgb&dl=pexels-engin-akyurt-1486861.jpg&fm=jpg",
    videoTime: 20,
  },
];

export const listMenuItem = [
  "ĐỒ PHONG THỦY VIP",
  "TƯỢNG PHẬT",
  "LINH VẬT",
  "TRANG SỨC",
  "VẬT PHẨM",
];
export const listMenuCourse = [
  "KHÓA HỌC MIỄN PHÍ",
  "TỬ VI CƠ BẢN",
  "TỬ VI NÂNG CAO",
  "TỬ VI THỰC CHIẾN",
  "KHÓA HỌC KHÁC",
];
