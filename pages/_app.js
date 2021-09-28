import "../styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemsContext } from "../utils/itemsContext";
import { useEffect, useState } from "react";
import { UserContext } from "../utils/userContext";
import { Actions } from "../utils/actions";
import { useStore } from "../redux/store";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
