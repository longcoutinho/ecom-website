import "@/styles/globals.css";
import "@/styles/Home.css";
import "@/styles/Home.posts.css"
import "@/styles/pages/Home.scss"
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
