import '../styles/globals.css';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }) {
  // ======= create a react-query client -->
  const client = new QueryClient();
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <QueryClientProvider client={client}>
      {getLayout(<Component {...pageProps} />)}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
