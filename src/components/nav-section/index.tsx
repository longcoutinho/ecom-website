export { default as NavSectionHorizontal } from './horizontal';

export function isExternalLink(path: any) {
  return path.includes('http');
}

export function getActive(path: any, pathname: any, asPath: any) {
  return pathname.includes(path) || asPath.includes(path);
}
