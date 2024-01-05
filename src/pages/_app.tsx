import "@/styles/globals.css";
import "@/styles/components/header.scss";
import "@/styles/pages/Home.scss"
import "@/styles/pages/login.scss"
import "@/styles/pages/signup.scss"
import type { AppProps } from "next/app";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';


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

const menuIndex = (state = 0, action: any) => {
  switch (action.type) {
    case "MENU_INDEX":
      return action.payload;
    default:
      return state;
  }
};

const allReducers = combineReducers({
  counter,
  menuIndex,
  // add more reducers here
});

const store = createStore(allReducers);

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>);
}
