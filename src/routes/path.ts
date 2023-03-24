function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_PAGE = "/";

export const PATH_PAGE = {
  root: ROOTS_PAGE,
  login: path(ROOTS_PAGE, "/login"),
};
