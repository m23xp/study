import '../styles/globals.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    if (router.pathname !== '/login' && !localStorage.getItem('username')) {
      router.push('/login');
    }
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;