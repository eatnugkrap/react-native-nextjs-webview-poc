import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListScreen from '../screens/ListScreen';
import MyPageScreen from '../screens/MyPageScreen';
import DetailScreen from '../screens/DetailScreen';
import WebViewScreen from '../screens/DummyWebView';
import SSG from '../screens/SSG';
import SSR from '../screens/SSR';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const DataStack = createStackNavigator();

const What = createStackNavigator();

const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
    <HomeStack.Screen name="MyPageScreen" component={MyPageScreen} />
    <HomeStack.Screen name="WebViewScreen" component={WebViewScreen} />
    <HomeStack.Screen name="SSG" component={SSG} />
    <HomeStack.Screen name="SSR" component={SSR} />
  </HomeStack.Navigator>
);

const DataStackNavigator = () => (
  <DataStack.Navigator>
    <DataStack.Screen name="ListScreen" component={ListScreen} />
    <DataStack.Screen name="DetailScreen" component={DetailScreen} />
  </DataStack.Navigator>
);

const RootNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Data" component={DataStackNavigator} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default RootNavigation;
