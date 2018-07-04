import React, { Component } from 'react';
import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	Image,
	AsyncStorage,
	Keyboard

} from 'react-native';
import loginicon from '../../media/loginicon.png';
import background from '../../media/br7.jpg';
export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			result: "",
			token: ""
		}
	}



	static navigationOptions = {
		title: 'SHOPPER LOGIN',
		headerStyle: {
			backgroundColor: '#EEEEEE'
		}
	}
	login() {
		fetch("http://172.16.1.15/serverMobile/logintoken.php", {
			method: "POST",
			headers: {
				"Accetp": "application/json",
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				"USERNAME": this.state.username,
				"PASSWORD": this.state.password
			})
		})
			.then((response) => response.json())
			.then((responseJSON) => {
				console.log(responseJSON);
				this.setState({
					token: responseJSON.token
				});


				if (this.state.token != "Error") {
					this.save();
					this.props.navigation.navigate('ManHinh_Majorview');
					this.setState({
						username: "",
						passwordL: ""
					});
				} else {
					alert(responseJSON.token);
				}
			})
			.catch((error) => { console.log(error) });
		if (this.state.token = "Error") {

			this.setState({
				result: "Login Failed"

			});

		}


	}

	save = async () => {
		try {
			await AsyncStorage.setItem("@token:key", this.state.token);

		} catch (e) {
			console.log(e)
		}

	}
	get = async () => {
		try {
			var v = await AsyncStorage.getItem("@token:key")
			console.log(v);
		} catch (e) {
			console.log(e)
		}
		console.log("GET token");
	}
	render() {
		return (
			<ImageBackground source={background} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
				<TextInput style={styles.styleinput} keyboardType='email-address'
					onChangeText={(username) => this.setState({ username })}
					placeholder="User name" value={this.state.username}
				>
				</TextInput>
				<TextInput style={styles.styleinput}
					onChangeText={(password) => this.setState({ password })}
					placeholder="password" value={this.state.password}
					secureTextEntry={true}
				>
				</TextInput>

				<TouchableOpacity style={{
					backgroundColor: '#888888', alignItems: 'center', justifyContent: 'center',
					width: '60%', height: 35, borderRadius: 15, flexDirection: 'row', padding: 10,

					shadowOffset: { width: 10, height: 10, },
					shadowColor: '#2E272B',
					shadowOpacity: 2.0,
				}}
					onPress={() => { this.login() }}
				>

					<Image source={loginicon} style={{ width: 24, height: 24, marginRight: 10 }} />
					<Text style={styles.Ttext}>LOGIN</Text>
				</TouchableOpacity>




				<Text style={{ margin: 10, color: '#EEEEEE' }}>Login to perform the transaction!!!</Text>
				<Text style={{ margin: 10, color: '#777777' }}>Make in GMTCO </Text>

			</ImageBackground>
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
	Ttext: {
		textAlign: 'center',
		color: '#fff',
		marginBottom: 5,
		fontWeight: 'bold'
	},
	styleinput: {
		borderColor: 'gray',
		height: 40,
		width: '90%',
		borderRadius: 1,
		color: "#880000",
		backgroundColor: '#fff',
		borderRadius: 5,
		margin: 5
	}
});