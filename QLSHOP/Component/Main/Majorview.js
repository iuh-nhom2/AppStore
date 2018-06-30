import React, {Component} from 'react';
import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Image,
	AsyncStorage

} from 'react-native';

export default class Major extends Component{
    static navigationOptions =()=>{
        title:'sadasda'
        headerStyle:{
            height:0
        }
    }
    render(){
        return(
            <View>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('ManHinh_Majorshow')}}>
                        <Text>asdasdasdasasda</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
