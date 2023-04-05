function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_PAGE = "/";

export const PATH_PAGE = {
  root: ROOTS_PAGE,
  login: path(ROOTS_PAGE, "/login"),
  user: {
    tab1: ROOTS_PAGE,
    tab2: path(ROOTS_PAGE, "/user/sanpham"),
    tab3: path(ROOTS_PAGE, "/user/lapla"),
    tab4: path(ROOTS_PAGE, "/user/datlich"),
  },
  admin:{
    newPost: path(ROOTS_PAGE, "/admin/create-post")
  }
};
