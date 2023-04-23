export interface IHeader {
  menuIndex: number;
}
export interface IMenuItem {
  title: string;
  redirect_link: any;
}
export interface IPageProps {
  children: React.ReactNode;
  title?: string;
  admin?: boolean;
  menuIndex: number;
}
