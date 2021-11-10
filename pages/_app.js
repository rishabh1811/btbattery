import { ChakraProvider } from '@chakra-ui/react'
import 'tailwindcss/tailwind.css'
import "../styles/myStyles.css"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
