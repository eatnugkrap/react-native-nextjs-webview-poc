import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

type Props = PropsWithChildren<{title: string}>;

const DummyScreen = (props: Props) => {
  const {navigate} = useNavigation();

  const nav = (name: string) => () => {
    navigate(name);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>{props.title}</Text>
      <TouchableOpacity
        onPress={nav('HomeScreen')}
        style={{
          width: 100,
          height: 30,
          marginVertical: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
        }}>
        <Text>ssss</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={nav('MyPageScreen')}
        style={{
          width: 100,
          height: 30,
          marginVertical: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
        }}>
        <Text>toMyPage</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={nav('ListScreen')}
        style={{
          width: 100,
          height: 30,
          marginVertical: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
        }}>
        <Text>toList</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={nav('DetailScreen')}
        style={{
          width: 100,
          height: 30,
          marginVertical: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
        }}>
        <Text>toDetail</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={nav('WebViewScreen')}
        style={{
          width: 100,
          height: 30,
          marginVertical: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
        }}>
        <Text>toWebView</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={nav('SSG')}
        style={{
          width: 100,
          height: 30,
          marginVertical: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
        }}>
        <Text>toSSG</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={nav('SSR')}
        style={{
          width: 100,
          height: 30,
          marginVertical: 10,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
        }}>
        <Text>toSSR</Text>
      </TouchableOpacity>
      {props.children}
    </View>
  );
};

export default DummyScreen;
