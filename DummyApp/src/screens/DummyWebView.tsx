import {useNavigation} from '@react-navigation/native';

import React, {useEffect, useState} from 'react';
import {Animated, BackHandler, View} from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';
import WebView, {WebViewMessageEvent} from 'react-native-webview';

const WebViewScreen = () => {
  const navigation = useNavigation();
  const webViewRef = React.useRef<WebView>(null);
  const [webViewCanGoBack, setWebViewCanGoBack] = useState(false);

  const handleBack = (event) => {
    if (webViewRef?.current && webViewCanGoBack) {
      event.preventDefault();
      webViewRef?.current.goBack();
      return true;
    }
    return false;
  };

  const messageHandler = (event: WebViewMessageEvent) => {
    let message: any;

    try {
      message = JSON.parse(event.nativeEvent.data);
    } catch (error) {
      message = event.nativeEvent.data;
    }

    if (message?.type === 'history') {
      setWebViewCanGoBack(message.idx > 0);
    }
  };

  useEffect(() => {
    navigation.addListener('beforeRemove', handleBack);
    return () => {
      navigation.removeListener('beforeRemove', handleBack);
    };
  }, [webViewCanGoBack]);

  return (
    <View style={{flex: 1}}>
      <WebView
        domStorageEnabled
        onMessage={messageHandler}
        ref={webViewRef}
        style={{flex: 1}}
        source={{uri: 'http://10.110.171.185:3000'}}
        onNavigationStateChange={(event) => {
          setWebViewCanGoBack(event.canGoBack);
        }}
        javaScriptEnabled
        injectedJavaScript={`
          function wrap(fn) { 
            return function wrapper() { 
                var res = fn.apply(this, arguments);
                window.ReactNativeWebView.postMessage(JSON.stringify({type:'history',idx:arguments[0].idx})); 
                return res; 
            }; 
          } 


          history.pushState = wrap(history.pushState);
          window.onpopstate = e => {
            window.ReactNativeWebView.postMessage(JSON.stringify({type:'history',idx:e.state.idx}));
          }
        `}
      />
    </View>
  );
};

export default WebViewScreen;
