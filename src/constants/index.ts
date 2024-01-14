import {Course} from "@/interfaces/response";
import {PATH_PAGE} from "@/routes/path";

export enum Backend {
  URL = 'https://fengshui.ntg55.click',
  USER_SERVICE = "http://localhost:8989/user"
  // URL = 'http://10.248.158.167:1112'
}

export enum HTTP_STATUS {
  OK = 200,
}
export enum PAGE_TITLE {
  PREFIX = "",
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
  LOGIN = "/login",
  SIGNUP = "/signup",
  ITEM = "/item",
  POST = "/post",
}

export const MenuTitle: any = [
  {
    title: "Home",
    redirect_link: PATH_PAGE.user.tab1,
    drop_down: false,
  },
  {
    title: "Blog",
    redirect_link: PATH_PAGE.user.tab2,
    drop_down: true,
  },
  {
    title: "Collection",
    redirect_link: PATH_PAGE.user.tab3,
    drop_down: false,
  },
  {
    title: "Contact",
    redirect_link: PATH_PAGE.user.tab4,
    drop_down: false,
  },
  {
    title: "About Us",
    redirect_link: PATH_PAGE.user.tab5,
    drop_down: false,
  }
];