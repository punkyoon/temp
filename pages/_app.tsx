import type { AppProps } from 'next/app';
import Head from 'next/head';

import 'the-new-css-reset/css/reset.css';
import '../public/styles/global.css';

export default function TempApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, user-scalable=no, initial-scale=1, viewport-fit=cover' />
        <meta name='description' content='으악새~' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
