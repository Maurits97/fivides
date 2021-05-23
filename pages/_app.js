import Head from 'next/head'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  
  function getTitle()  {
    const router = useRouter();
    const pathname = router.pathname;

    if(pathname === '/') {
      return 'Fivides - Home';
    } else {
      const newName = pathname.substring(1);
      return 'Fivides - ' + newName.charAt(0).toUpperCase() + newName.slice(1);
    }
  }

  return (
    <>
      <Head>
        <title>{getTitle()}</title>
        <meta name="description" content="Description Fivides."/>
        <meta name="keywords" content="trefwoord 1, trefwoord 2, trefwoord 3"/>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
        <link rel="alternate icon" href="/favicon.ico"></link>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
