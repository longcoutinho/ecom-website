import "@/styles/globals.css";
import "@/styles/components/header.scss";
import "@/styles/components/footer.scss";
import "@/styles/Home.css";
import "@/styles/Home.posts.css"
import "@/styles/pages/Home.scss"
import "@/styles/pages/item.scss"
import "@/styles/pages/course.scss"
import "@/styles/responsive.scss"
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
