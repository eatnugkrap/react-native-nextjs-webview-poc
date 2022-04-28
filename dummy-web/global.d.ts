export global {
  interface Window {
    ReactNativeWebView: {
      postMessage: (data: any) => void;
    };
  }
}


