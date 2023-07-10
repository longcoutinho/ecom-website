import {Course} from "@/interfaces/response";

export enum Backend {
  // URL = 'https://fengshui.ntg55.click'
  URL = 'http://10.248.158.167:1112'
}
export enum PAGE_TITLE {
  PREFIX = "Phong Thuy | ",
  HOME = "Home",
  LAPLA = "Lap la so phong thuy",
}

export const HomePage = {
  numFeaturedPost: 5,
  numPost: 3,
}

export const ServiceType = {
  POSTS: 0,
  ITEM: 1,
}

export enum URL {
  BASE_URL = "",
  POSTS_SERVICE = "/posts",
  ITEM_SERVICE = "/item",
}
export enum PostsService {
  getPost = "/posts",
  SAVE = "",
  DETAIL = "/detail",
}

export enum TypeService {
  getType = "/type/",
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

export const listMenuCourse = [
  "KHÓA HỌC MIỄN PHÍ",
  "TỬ VI CƠ BẢN",
  "TỬ VI NÂNG CAO",
  "TỬ VI THỰC CHIẾN",
  "KHÓA HỌC KHÁC",
];

export const listServicesTitle = [
  {
    img: "https://www.kimca.net/wp-content/uploads/2022/02/163418138042938300_a640x364-1-364x363.jpg",
    title: "Làm viên chức",
    content: "Bạn muốn biết hôn nhân mình ra sao?"
  },
  {
    img: "https://www.kimca.net/wp-content/uploads/2022/02/163418138042938300_a640x364-1-364x363.jpg",
    title: "Tình duyên",
    content: "Bạn muốn biết hôn nhân mình ra sao?"
  },
  {
    img: "https://www.kimca.net/wp-content/uploads/2022/02/163418138042938300_a640x364-1-364x363.jpg",
    title: "Làm kinh doanh",
    content: "Bạn muốn biết hôn nhân mình ra sao?"
  },
  {
    img: "https://www.kimca.net/wp-content/uploads/2022/02/163418138042938300_a640x364-1-364x363.jpg",
    title: "Làm viên chức",
    content: "Bạn muốn xem thời vận sắp tới có thuận lợi để đầu tư không?"
  },
];
