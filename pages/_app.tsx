import '../styles/globals.css';
import type { AppProps } from 'next/app';
import SSRProvider from 'react-bootstrap/SSRProvider';
import {wrapper} from "../store/store";

 function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default wrapper.withRedux(App);