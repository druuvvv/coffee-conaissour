import '@/styles/globals.css'
import { LLProvider } from '../../context/store-context'
import { StoreProvider } from '../../context/store-context'

export default function App({ Component, pageProps }) {
  return <LLProvider><StoreProvider><Component {...pageProps} /></StoreProvider></LLProvider>
}
