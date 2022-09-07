import Head from "next/head"
import "../styles/globals.css"

function MyApp ({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <Head>
        <title>Fancy Wallet - The best wallet of the market</title>
        <meta
          name="description"
          content="Fancy Wallet - The best wallet of the market! evelopment by Sebastián Urbano"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
