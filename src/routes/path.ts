function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_PAGE = "/";

export const PATH_PAGE = {
  root: ROOTS_PAGE,
  login: path(ROOTS_PAGE, "/login"),
  user: {
    tab1: ROOTS_PAGE,
    tab2: path(ROOTS_PAGE, "posts?page=0&pageSize=9"),
    tab3: path(ROOTS_PAGE, "item?page=0&pageSize=9"),
    tab4: path(ROOTS_PAGE, "lapla"),
    tab5: path(ROOTS_PAGE, "course"),
    tab6: path(ROOTS_PAGE, "lapla"),
    tab7: path(ROOTS_PAGE, "lapla"),
  },
  tintuc: {
    root: path(ROOTS_PAGE, "posts?page=0&pageSize=9"),
    detail: path(ROOTS_PAGE, "posts/detail"),
  },
  lapla: {
    root: path(ROOTS_PAGE, "lapla"),
    tuvi: path(ROOTS_PAGE, "lapla/tuvi"),
    luchao: path(ROOTS_PAGE, "lapla/luchao"),
    tutru: path(ROOTS_PAGE, "lapla/tutru"),
    thansohoc: path(ROOTS_PAGE, "lapla/thansohoc"),
  },
};
