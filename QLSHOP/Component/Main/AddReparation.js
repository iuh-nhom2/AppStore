import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Dimensions,
    TextInput,
    ScrollView

} from 'react-native';
const { height } = Dimensions.get('window');
import RNFetchBlob from 'react-native-fetch-blob';
import Backicon from '../../media/comebackicon.png';
import imageicon from '../../media/imageicon.png';
import takephoto from '../../media/takephoto.png';
export default class AddReparation extends Component {
    constructor(props){
        super(props);
        this.state={
            customername:"",
            Faulty:"",
            Repairprice:"",
            Licence:"",
            IMEI:"",
            TypeProduct:"",
            Orderpiece:"",
            Password:"",
            Bywhom:"",
            Custom:"",
            Model:"",
            Extracharge:"",
            Serial:"",
            Tel:"",
            TXT:"",
            email:""

        }
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.styleheader}>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Home') }} style={{ padding: 10 }} >

                        <Image source={Backicon} style={{ width: 40, height: 40 }} />

                    </TouchableOpacity>
                    <Text style={styles.textHeader}>Add Reparation</Text>
                </View>
                <View style={styles.stylebody}>
                     <View style={{backgroundColor:'#FFCC66', height:40}}>
                         <Text style={styles.textHeaderBody}>Modify</Text>
                     </View>
                     <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <Text style={styles.textBody}>Customer:</Text>
                        </View>
                        <View style={{ flex:2, alignItems:'center'}} >
                        <TextInput style={styles.styleinput}  keyboardType='default'
						        onChangeText={(customername)=>this.setState({customername})}
						        placeholder="Name of Customer" placeholderTextColor='white' value={this.state.customername}	
					        />
                        </View>
                     </View>
                     <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <Text style={styles.textBody}>Faulty:</Text>
                        </View>
                        <View style={{ flex:2, alignItems:'center'}} >
                        <TextInput style={styles.styleinput}  keyboardType='default'
						        onChangeText={(Faulty)=>this.setState({Faulty})}
						        placeholder="Faulty" placeholderTextColor='white' value={this.state.Faulty}	
					        />
                        </View>
                     </View>
                     <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <Text style={styles.textBody}>Repair price:</Text>
                        </View>
                        <View style={{ flex:2, alignItems:'center'}} >
                        <TextInput style={styles.styleinput}  keyboardType='default'
						        onChangeText={(Repairprice)=>this.setState({Repairprice})}
						        placeholder="Repair price" placeholderTextColor='white' value={this.state.Repairprice}	
					        />
                        </View>
                     </View>
                     <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <Text style={styles.textBody}>Licence:</Text>
                        </View>
                        <View style={{ flex:2, alignItems:'center'}} >
                        <TextInput style={styles.styleinput}  keyboardType='default'
						        onChangeText={(Licence)=>this.setState({Licence})}
						        placeholder="Licence" placeholderTextColor='white' value={this.state.Licence}	
					        />
                        </View>
                     </View>
                     <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <Text style={styles.textBody}>IMEI:</Text>
                        </View>
                        <View style={{ flex:2, alignItems:'center'}} >
                        <TextInput style={styles.styleinput}  keyboardType='default'
						        onChangeText={(IMEI)=>this.setState({IMEI})}
						        placeholder="IMEI" placeholderTextColor='white' value={this.state.IMEI}	
					        />
                        </View>
                     </View>
                     <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <Text style={styles.textBody}>Phone/Lap:</Text>
                        </View>
                        <View style={{ flex:2, alignItems:'center'}} >
                        <TextInput style={styles.styleinput}  keyboardType='default'
						        onChangeText={(TypeProduct)=>this.setState({TypeProduct})}
						        placeholder="TypeProduct" placeholderTextColor='white' value={this.state.TypeProduct}	
					        />
                        </View>
                     </View>
                     <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <Text style={styles.textBody}>Orderpiece:</Text>
                        </View>
                        <View style={{ flex:2, alignItems:'center'}} >
                        <TextInput style={styles.styleinput}  keyboardType='default'
						        onChangeText={(Orderpiece)=>this.setState({Orderpiece})}
						        placeholder="Order piece" placeholderTextColor='white' value={this.state.Orderpiece}	
					        />
                        </View>
                     </View>
                     <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <Text style={styles.textBody}>Password:</Text>
                        </View>
                        <View style={{ flex:2, alignItems:'center'}} >
                        <TextInput style={styles.styleinput}  keyboardType='default'
						        onChangeText={(Password)=>this.setState({Password})}
						        placeholder="Password" placeholderTextColor='white' value={this.state.Password}	
					        />
                        </View>
                     </View>
                     <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <Text style={styles.textBody}>Bywhom:</Text>
                        </View>
                        <View style={{ flex:2, alignItems:'center'}} >
                        <TextInput style={styles.styleinput}  keyboardType='default'
						        onChangeText={(Bywhom)=>this.setState({Bywhom})}
						        placeholder="Repair price" placeholderTextColor='white' value={this.state.Bywhom}	
					        />
                        </View>
                     </View>
                     <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <Text style={styles.textBody}>Custom:</Text>
                        </View>
                        <View style={{ flex:2, alignItems:'center'}} >
                        <TextInput style={styles.styleinput}  keyboardType='default'
						        onChangeText={(Custom)=>this.setState({Custom})}
						        placeholder="Custom " placeholderTextColor='white' value={this.state.Custom}	
					        />
                        </View>
                     </View>
                     <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <Text style={styles.textBody}>Model:</Text>
                        </View>
                        <View style={{ flex:2, alignItems:'center'}} >
                        <TextInput style={styles.styleinput}  keyboardType='default'
						        onChangeText={(Model)=>this.setState({Model})}
						        placeholder="Model" placeholderTextColor='white' value={this.state.Model}	
					        />
                        </View>
                     </View>
                     <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <Text style={styles.textBody}>Extracharge:</Text>
                        </View>
                        <View style={{ flex:2, alignItems:'center'}} >
                        <TextInput style={styles.styleinput}  keyboardType='default'
						        onChangeText={(Extracharge)=>this.setState({Extracharge})}
						        placeholder="Extracharge" placeholderTextColor='white' value={this.state.Extracharge}	
					        />
                        </View>
                     </View>
                     <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <Text style={styles.textBody}>Serial:</Text>
                        </View>
                        <View style={{ flex:2, alignItems:'center'}} >
                        <TextInput style={styles.styleinput}  keyboardType='default'
						        onChangeText={(Serial)=>this.setState({Serial})}
						        placeholder="Serial" placeholderTextColor='white' value={this.state.Serial}	
					        />
                        </View>
                     </View>
                     <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <Text style={styles.textBody}>Tel:</Text>
                        </View>
                        <View style={{ flex:2, alignItems:'center'}} >
                        <TextInput style={styles.styleinput}  keyboardType='default'
						        onChangeText={(Tel)=>this.setState({Tel})}
						        placeholder="Tel" placeholderTextColor='white' value={this.state.Tel}	
					        />
                        </View>
                     </View>
                     <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <Text style={styles.textBody}>TXT:</Text>
                        </View>
                        <View style={{ flex:2, alignItems:'center'}} >
                        <TextInput style={styles.styleinput}  keyboardType='default'
						        onChangeText={(TXT)=>this.setState({TXT})}
						        placeholder="TXT" placeholderTextColor='white' value={this.state.TXT}	
					        />
                        </View>
                     </View>
                     <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{ flex:1, alignItems:'flex-end'}}>
                            <Text style={styles.textBody}>email:</Text>
                        </View>
                        <View style={{ flex:2, alignItems:'center'}} >
                        <TextInput style={styles.styleinput}  keyboardType='default'
						        onChangeText={(email)=>this.setState({email})}
						        placeholder="email" placeholderTextColor='white' value={this.state.email}	
					        />
                        </View>
                     </View>
                     <View style={{ flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{ flex:1, alignItems:'flex-end',padding: 15, margin: 15}}>
                            <Text style={styles.textBody}>Image:</Text>
                        </View>
                        <View style={{ flex:2, alignItems:'center', flexDirection:'row'}} >
                            <TouchableOpacity style={{padding:5, margin: 5}}>
                                <Image source={imageicon} style={{width:40, height:40}}/>
                                
                            </TouchableOpacity>
                            <TouchableOpacity style={{padding: 5, margin: 5}}>
                                
                                <Image source={takephoto} style={{width:40, height:40}}/>
                            </TouchableOpacity>
                        </View>
                     </View>
                     
                     
                     
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    styleheader: {
        height: height / 13,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DDDDDD'


    },
    textHeader: {
        color: '#336633',
        fontFamily: 'arial'
    },
    stylebody:{
        
        backgroundColor:'#336633'
    },
    textHeaderBody: {
        color: '#fff',
        fontFamily: 'arial',
        fontSize:25,
        justifyContent:'center'
    },
    textBody: {
        color:'#fff',
        fontFamily: 'arial',
        fontSize:15,
        justifyContent:'center'
    },
    styleinput:{
        width:"80%",
        height:40,
        borderRadius:10,
        color:'#fff'

    }
    
});