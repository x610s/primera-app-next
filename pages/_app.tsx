import { ReactElement } from 'react'
import { AppPropsWithLayout } from '../props/MainLayout'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page:ReactElement) => page)
  return  getLayout(<Component {...pageProps} />)
}

export default MyApp
