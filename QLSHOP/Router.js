import React from 'react';
import{
	View,
	Text,
	Icon
}from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Login from './Component/Main/Login.js';
import Customer from './Component/Main/CustomerView.js';
import Welcome from './Component/welcome.js';
import Major from './Component/Main/Majorview.js';
import Majorshows from './Component/Main/Majorshows.js';
import User from './Component/Main/User.js';
import About from './Component/Main/About.js';
import Majoricon from './media/major.png';
import Homeicon from './media/inconhome.png';
export const HomeStack = StackNavigator({
	

	
	ManHinh_WelCome:{
		screen:Welcome,
		
	},
	ManHinh_Login:{
		screen: Login,
	},
	
	ManHinh_Majorview:{
		screen: Major,
		navigationOptions:{
			
			headerStyle:{
				height:0
			}
		}
	},
	
	
	
});
export const ShopStack = StackNavigator({
	
	ManHinh_Majorview:{
		screen: Major,
		navigationOptions:{
			
			headerStyle:{
				height:0,
				header: null,
				tabBarVisible: false,
			}
		}
	},
	ManHinh_Majorshow:{
		screen: Majorshows,
	
	},
	ManHinh_Customer:{
		screen:Customer,
	},
});
export const Tabbar = TabNavigator({
	  Home:{
			screen: HomeStack,
			navigationOptions: {
				
				header: null,
				tabBarVisible: false,
				
			}

	  },
	  Major:{
		screen:ShopStack,
		navigationOptions: {
				
			header: null,
			tabBarVisible: true,
			
		}
	  },
	  User:{
		screen:User
	  },
	  ABout:{
		  screen:About
	  }
},
{
	  swipeEnabled:true,
	  tabBarPosition:'bottom',

	  tabBarOptions:{
		
		  style:{
			  backgroundColor:'#dddddd'
		  },
		  labelStyle:{
			  fontSize:8,

		  },
		  inactiveTintColor:'green',
		  activeTintColor:'red'
	  }
});