import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import { GlobalStyle, theme } from "@styles";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <GlobalStyle />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover
          />
          <Component {...pageProps} />
        </ChakraProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
