export interface IHeader {
  menuIndex: number;
}
export interface IMenuItem {
  title: String;
  redirect_link: any;
}
export interface IPageProps {
  children: React.ReactNode;
  title?: string;
  admin?: boolean;
  menuIndex: number;
}
