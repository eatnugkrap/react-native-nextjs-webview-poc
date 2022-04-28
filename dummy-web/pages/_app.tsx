import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.ReactNativeWebView?.postMessage("addHistory");
    };

    router.events.on("beforeHistoryChange", handleRouteChange);

    return () => {
      router.events.off("beforeHistoryChange", handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    window.addEventListener("message", (e) => {
      console.log(e);
    });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
