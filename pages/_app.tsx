import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../common/Layot'
import 'bootstrap/dist/css/bootstrap.css'
import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css'; //importing font awesome css
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above



// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }


function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
    <script defer src="/your-path-to-fontawesome/js/brands.js"></script>
    <script defer src="/your-path-to-fontawesome/js/solid.js"></script>
    <script defer src="/your-path-to-fontawesome/js/fontawesome.js"></script>
    </Head>
    <Layout footerstatus={pageProps.footerstatus}>
      <Component {...pageProps} />
    </Layout>
    </>
  )
}

export default App