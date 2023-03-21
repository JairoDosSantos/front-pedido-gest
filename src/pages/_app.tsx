import type { AppProps } from 'next/app'
import "../../styles/globals.css"
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <title>Sistema de controle de solicitação de pedidos e compras</title>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
