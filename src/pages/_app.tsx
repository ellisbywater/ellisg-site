import "normalize.css";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react"
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
import "../../public/styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <ChakraProvider>
      <Component {...pageProps} />
  </ChakraProvider>
  )
}
