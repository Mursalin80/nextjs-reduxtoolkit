import '../styles/globals.css';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { wrapper } from '../store/store';

function App({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default wrapper.withRedux(App);
