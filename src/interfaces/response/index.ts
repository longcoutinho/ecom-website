export interface ITest {
  test: string;
}
export interface Post {
  titleImageUrlStream: string;
  title: string;
  author: string;
  typeId: string;
  content: string;
  id: string;
  createAt: string;
  introduction: string;
}
export interface Item {
  id: number,
  title: string,
  price: number,
  titleImageUrlStream: string,
  introduction: string,
}

export interface Course {
  title: string,
  teacher: string,
  titleImageUrlStream: string,
  videoTime: number,
}

export interface TypePost {
  id: string,
  name: string,
}

export interface Comment {
  email: string,
  name: string,
  content: string,
}

export interface Service {
  title: string;
  content: string;
  titleImageUrlStream: string;
  id: string;
}

export interface ItemToCart {
  titleImageUrlStream:string,
  id: string,
  title: string,
  price: number,
  amount: number,
  totalPrice: number,
  itemId: string,
}