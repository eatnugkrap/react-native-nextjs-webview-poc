import React, {useEffect, useState} from 'react';
import {BackHandler} from 'react-native';
import WebView from 'react-native-webview';

const SSG = () => {
  const webViewRef = React.useRef<WebView>(null);
  const [webViewCanGoBack, setWebViewCanGoBack] = useState(false);

  const handleBack = () => {
    if (webViewRef?.current && webViewCanGoBack) {
      webViewRef?.current.goBack();
      return true;
    }
    return false;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBack);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBack);
    };
  }, [webViewCanGoBack]);

  return (
    <WebView
      onError={console.log}
      ref={webViewRef}
      allowsBackForwardNavigationGestures
      style={{flex: 1}}
      source={{uri: 'http://10.110.171.185:3000/ssg'}}
      onNavigationStateChange={(event) => {
        setWebViewCanGoBack(event.canGoBack);
      }}
    />
  );
};

export default SSG;
