import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { GlobalStyles } from '@/styles'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
