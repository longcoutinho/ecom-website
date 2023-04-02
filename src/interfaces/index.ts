export interface IHeader {
  menuIndex: number;
  admin?: boolean;
}
export interface IMenuItem {
  title: String;
  redirect_link: string;
}
export interface IPageProps {
  children: React.ReactNode;
  title?: string;
  admin?: boolean;
}
