import {Course} from "@/interfaces/response";
import {PATH_PAGE} from "@/routes/path";

export enum Backend {
  URL = 'https://fengshui.ntg55.click'
  // URL = 'http://10.248.158.167:1112'
}
export enum PAGE_TITLE {
  PREFIX = "Phong Thuy | ",
  HOME = "Home",
  LAPLA = "Lap la so phong thuy",
}

export const HomePage = {
  numTopPosts: 5,
  numBotPosts: 5,
  numHotPosts: 5,
  numItem: 4,
  optionTopPosts:  {
    slidesPerView: 1,
    spaceBetween: 50,
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      690: {
        slidesPerView: 1,
      },
      1100: {
        slidesPerView: 1,
      },
      1300: {
        slidesPerView: 1,
      },
      1600: {
        slidesPerView: 1,
      },
      1900: {
        slidesPerView: 1,
      },
    },
  }
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
  getPostDetail = "/posts/detail",
}

export enum TypeService {
  getType = "/type/",
  SAVE = "",
  DETAIL = "/detail",
}

export enum ItemService {
  getItems = "/item",
  DETAIL = "/detail",
  getItemDetail = "/item/detail"
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

export enum PageURL {
  HOME = "/home",
}

export const MenuTitle: any = [
  {
    title: "Trang chủ",
    redirect_link: PATH_PAGE.user.tab1,
    drop_down: false,
  },
  {
    title: "Kho tàng tri thức",
    redirect_link: PATH_PAGE.user.tab2,
    drop_down: true,
  },
  {
    title: "Vật phẩm",
    redirect_link: PATH_PAGE.user.tab3,
    drop_down: false,
  },
  {
    title: "Lập lá số",
    redirect_link: PATH_PAGE.user.tab4,
    drop_down: false,
  },
  {
    title: "Khóa học",
    redirect_link: PATH_PAGE.user.tab5,
    drop_down: false,
  },
  {
    title: "Dịch vụ",
    redirect_link: PATH_PAGE.user.tab6,
    drop_down: false,
  },
  {
    title: "Liên hệ",
    redirect_link: PATH_PAGE.user.tab7,
    drop_down: false,
  },
];