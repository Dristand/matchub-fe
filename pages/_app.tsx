// pages/_app.js

import { ChakraProvider } from "@chakra-ui/react"
import WithSubnavigation from "../public/components/NavigationBar";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ChakraProvider>
                <WithSubnavigation/>
                <Component {...pageProps} />
            </ChakraProvider>
        </>
    )
}

export default MyApp