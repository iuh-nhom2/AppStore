/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

StatusBar.setHidden(true);
import Drawer from 'react-native-drawer';
import { createStackNavigator } from 'react-navigation';
import Swiper from 'react-native-swiper';
var ImagePicker = require('react-native-image-picker');
import RNFetchBlob from 'react-native-fetch-blob';

import Welcome from './Component/welcome.js';
import Major from './Component/Main/Majorview.js';
import {HomeStack,Tabbar}  from './Router.js';
import {ShopStack} from './RouterShop.js';
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      
        <Tabbar/>

      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
