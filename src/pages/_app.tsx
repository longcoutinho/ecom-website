import "@/styles/globals.css";
import "@/styles/components/header.scss";
import "@/styles/components/footer.scss";
import "@/styles/Home.css";
import "@/styles/Home.posts.css"
import "@/styles/pages/Home.scss"
import "@/styles/pages/cart.scss"
import "@/styles/pages/item.scss"
import "@/styles/pages/item-detail.scss"
import "@/styles/pages/course.scss"
import "@/styles/pages/posts.scss"
import "@/styles/pages/lapla.scss"
import "@/styles/pages/search.scss"
import "@/styles/pages/posts-detail.scss"
import "@/styles/responsive.scss"
import type { AppProps } from "next/app";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";



const counter = (state = 0, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "ASSIGN":
      return action.payload;
    default:
      return state;
  }
};

const allReducers = combineReducers({
  counter,
  // add more reducers here
});

const store = createStore(allReducers);

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>);
}
