function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_PAGE = "/";

export const PATH_PAGE = {
  root: ROOTS_PAGE,
  login: path(ROOTS_PAGE, "/login"),
  user: {
    tab1: ROOTS_PAGE,
    tab2: path(ROOTS_PAGE, "posts"),
    tab3: path(ROOTS_PAGE, "items"),
    tab4: path(ROOTS_PAGE, "lapla"),
  },
  tintuc: {
    root: path(ROOTS_PAGE, "posts"),
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
