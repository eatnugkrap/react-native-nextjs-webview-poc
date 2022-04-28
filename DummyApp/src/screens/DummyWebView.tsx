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
    let message: string | object;

    try {
      message = JSON.parse(event.nativeEvent.data);
    } catch (error) {
      message = event.nativeEvent.data;
    }

    console.log(message);
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
        onMessage={messageHandler}
        ref={webViewRef}
        style={{flex: 1}}
        source={{uri: 'http://10.110.171.185:3000'}}
        onNavigationStateChange={(event) => {
          setWebViewCanGoBack(event.canGoBack);
        }}
        javaScriptEnabled
      />
    </View>
  );
};

export default WebViewScreen;
