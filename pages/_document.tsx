import { Html, Head, Main, NextScript, DocumentInitialProps } from 'next/document';

export default function TempDocument(_: DocumentInitialProps) {
  return (
    <Html lang='ko'>
      <Head>
      <meta charSet='utf-8' />
        <meta name='description' content='!!으악새!!' />

        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
