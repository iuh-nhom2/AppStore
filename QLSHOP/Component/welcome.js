import React, {Component} from 'react';
import{
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
	ImageBackground,
	Dimensions
} from 'react-native';

import Swiper from 'react-native-swiper';

import Background1 from '../media/brgmt2.jpg';
import Background2 from '../media/backgoundgmt.png';
import Background3 from '../media/gmtbg.hpg.jpg';
import Background4 from '../media/br4.jpg';
import Background5 from '../media/br5.jpg';
import Background6 from '../media/br8.jpg';

const {height,width} = Dimensions.get('window');

export default class Welcome extends Component{
	constructor(props){
		super(props);
	}
	
	render(){

		return (
			
			

				<Swiper autoplay={true} autoplayTimeout={5} style={{flex:1}}>
						
					<View >
					 <ImageBackground source={Background3} style={{width:'100%' , height: '50%', justifyContent:'center', alignItems:'center'}}/>
					
						 <View style={{justifyContent:'center', alignItems:'center'}}>
					 			<TouchableOpacity style={styles.stylebutton} 
					 			onPress={() => {this.props.navigation.navigate('ManHinh_Login')}}
					 			>
					 				<Text style={styles.textButton}>YOU ARE SHOPER</Text>
					 			</TouchableOpacity>
					 			<TouchableOpacity style={styles.stylebutton}>
					 				<Text style={styles.textButton}>YOU AER CUSTOMER</Text>
					 			</TouchableOpacity>
						 </View>
						 <View style={{marginTop:50, alignItems:'center'}}>
						 	<Text style={{color:'#888888', fontWeight:'bold'}}>The GMTCO Welcome!</Text>
					 	</View>
					 </View>

					 <View >
					 <ImageBackground source={Background4} style={{width:'100%' , height: '100%', justifyContent:'center', alignItems:'center'}}>
					
					 
					 <TouchableOpacity style={styles.stylebutton} onPress={() => {this.props.navigation.navigate('ManHinh_Login')}}>
					 			<Text style={styles.textButton}>YOU ARE SHOPER</Text>
					 		</TouchableOpacity>
					 		<TouchableOpacity style={styles.stylebutton}>
					 			<Text style={styles.textButton}>YOU AER CUSTOMER</Text>
					 		</TouchableOpacity>
					 	</ImageBackground>
					 </View>
					<View >

					 <ImageBackground source={Background5} style={{width:'100%' , height: '100%', justifyContent:'center', alignItems:'center'}}>
					
					 
					 <TouchableOpacity style={styles.stylebutton} onPress={() => {this.props.navigation.navigate('ManHinh_Login')}}>
					 			<Text style={styles.textButton}>YOU ARE SHOPER</Text>
					 		</TouchableOpacity>
					 		<TouchableOpacity style={styles.stylebutton}>
					 			<Text style={styles.textButton}>YOU AER CUSTOMER</Text>
					 		</TouchableOpacity>
					 	</ImageBackground>
					 </View>
					 <View >
					 <ImageBackground source={Background6} style={{width:'100%' , height: '100%', justifyContent:'center', alignItems:'center'}}>
					
					 
					 <TouchableOpacity style={styles.stylebutton} onPress={() => {this.props.navigation.navigate('ManHinh_Login')}}>
					 			<Text style={styles.textButton}>YOU ARE SHOPER</Text>
					 		</TouchableOpacity>
					 		<TouchableOpacity style={styles.stylebutton}>
					 			<Text style={styles.textButton}>YOU AER CUSTOMER</Text>
					 		</TouchableOpacity>
					 	</ImageBackground>
					 </View>
				</Swiper>

			
		);
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
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
  stylebutton:{
  	backgroundColor:'green',
  	borderRadius:10,
  	width:200,
  	height:40,
  	alignItems:'center',
  	justifyContent:'center',
  	margin:10

  },
  textButton:{
  	color:'#fff',
  	  fontFamily: 'Cochin',
  	  textAlign:'center'
  }
});