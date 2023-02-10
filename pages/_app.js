import '@/styles/globals.css'
import Head from 'next/head'
import icon from "../public/Icon.svg";
import Script from 'next/script';
import { SessionProvider } from 'next-auth/react';
export default function App({ Component, pageProps:{session, ...pageProps} }) {
  return (
    <>
      <Head>
        <title>Dead By Daylight Tracker</title>
        <link precedence="default" rel="icon" src={icon} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
        <Script defer src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossOrigin="anonymous" />
        <Script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossOrigin="anonymous" />
    </>
  )
}
