import type { AppProps } from "next/app";

// css
import "../styles/globals.css";

// redux
import { Provider } from "react-redux";
import { store } from "../redux/store/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
