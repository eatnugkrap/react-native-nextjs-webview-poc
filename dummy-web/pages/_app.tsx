import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";

const messageHandler = (event: MessageEvent) => {
  console.log(event);
};

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.addEventListener("message", messageHandler);
    return () => {
      window.removeEventListener("message", messageHandler);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
