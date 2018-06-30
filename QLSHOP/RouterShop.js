import React from 'react';
import{
	View,
	Text,
	Icon
}from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Majorshows from './Component/Main/Majorshows.js';
import Majoricon from './media/major.png';
import Homeicon from './media/inconhome.png';
export const ShopStack = StackNavigator({
	
		ManHinh_Major:{
			screen:Majorshows
		}
	

	
});
