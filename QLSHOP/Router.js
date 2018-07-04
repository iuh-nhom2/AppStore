import React from 'react';
import {
	View,
	Text,
	Icon
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Login from './Component/Main/Login.js';
import Customer from './Component/Main/CustomerView.js';
import Welcome from './Component/welcome.js';
import Major from './Component/Main/Majorview.js';
import Majorshows from './Component/Main/Majorshows.js';
import User from './Component/Main/User.js';
import About from './Component/Main/About.js';
import AddReparation from './Component/Main/AddReparation.js';
import Search from './Component/Main/Search.js';

import CustomerView from './Component/Main/CustomerView';
import Majoricon from './media/major.png';
import Homeicon from './media/inconhome.png';
import OrderReparation from './Component/Main/OrderReparation.js';
export const HomeStack = StackNavigator({

	ManHinh_Majorview: {
		screen: Major,
		navigationOptions: {

			headerStyle: {
				height: 0
			}
		}
	},

	ManHinh_WelCome: {
		screen: Welcome,
		navigationOptions: {

			headerStyle: {
				height: 0
			}
		}
	},
	
	ManHinh_Login: {
		screen: Login,
	},






});
export const ShopStack = StackNavigator({
	ManHinh_Customer: {
		screen: Customer,
	},
	ManHinh_Majorview: {
		screen: Major,
		navigationOptions: {

			headerStyle: {
				height: 0,
				header: null,
				tabBarVisible: false,
			}
		}
	},


	ManHinh_Addrepair: {
		screen: AddReparation,
		navigationOptions: {

			headerStyle: {
				height: 0,
				header: null

			}
		}

	},
	ManHinh_ListReparation: {
		screen: OrderReparation,
		navigationOptions: {

			headerStyle: {
				height: 0,
				header: null

			}
		}

	},
	ManHinh_Search:{
		screen: Search,
		navigationOptions:{
			headerStyle:{
				height:0,
				header:null
			}
		}
	}


});
export const Tabbar = TabNavigator({
	Home: {
		screen: HomeStack,
		navigationOptions: {

			header: null,
			tabBarVisible: false,

		}

	},
	Major: {
		screen: ShopStack,
		navigationOptions: {

			header: null,


		}
	},
	User: {
		screen: User
	},
	ABout: {
		screen: About
	},
},
	{
		swipeEnabled: true,
		tabBarPosition: 'bottom',

		tabBarOptions: {

			style: {
				backgroundColor: '#dddddd'
			},
			labelStyle: {
				fontSize: 8,

			},
			inactiveTintColor: 'green',
			activeTintColor: 'red'
		}
	});