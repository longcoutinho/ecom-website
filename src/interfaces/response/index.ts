export interface ITest {
  test: string;
}
export interface Post {
  titleImageUrlStream: string;
  title: string;
  author: string;
  type: Number;
  content: String;
  id: Number;
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
