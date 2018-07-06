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
    ScrollView,
    Keyboard,
    TouchableWithoutFeedback,
    ListView,
    RefreshControl

} from 'react-native';
const { height, width } = Dimensions.get('window');
import CheckBox from 'react-native-check-box';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import RNFetchBlob from 'react-native-fetch-blob';
import Backicon from '../../media/comebackicon.png';
import imageicon from '../../media/imageicon.png';
import takephoto from '../../media/takephoto.png';
import customer from '../../media/customer1.png';
import picture from '../Function/image.js';
import Backtopicon from '../../media/combacktop.png';
import deviceerror from '../../media/deviceerror.png';
import category from '../../media/category.png';
import modell from '../../media/modell.png';
import phone from '../../media/phone.png';
import phonetel from '../../media/phonetell.png';
import deposits from '../../media/deposits.png';
import cash from '../../media/cash.png';
import date from '../../media/date.png';
import comment from '../../media/comment.png';
import code from '../../media/code.png';
import email from '../../media/email.png';
import serial from '../../media/serial.png';
import address from '../../media/address.png';
import status from '../../media/status.png';
import ShowError from './showerrodevice.js';
var smsradio = [
    { label: "Yes", value: 0 },
    { label: "No", value: 1 }
];
var emailradio = [
    { label: "Yes", value: 0 },
    { label: "No", value: 1 }
];
export default class AddReparation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customername: "",
            phone: "",
            sms: 0,
            send_mail: 0,
            Guasto: "",
            Categoria: "",
            Modello: "",
            Anticipo: "",
            Prezzo: "",
            dataApertura: "",
            dataChiusura: "",
            status: "0",
            Commenti: "",
            codice: "",
            email: "",
            image: "",
            password: "",
            serial: "",
            licence: "",
            whom: "",
            tel: "",


            avatarSource: takephoto,
            imagefront: takephoto,
            imageinside: takephoto,
            Image: "",
            data: null,
            ischeck: false,
            ischeckerrorde: false,
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        }
    }
    checksms(value) {
        this.setState({
            sms: value
        });
        alert(this.state.sms);
    }
    checkemail(value) {
        this.setState({
            send_mail: value
        });
        alert(this.state.send_mail);
    }
    render() {

        const loaderror=(
            
                <ShowError checklist={(a)=>{this.checkerror(a)}}/>
           
        );
        const comback = (

            <View>
                <ListView

                    dataSource={this.state.dataSource}

                    renderRow={(row) =>


                        <View >
                            <TouchableOpacity style={{ height: 30, width: '80%', alignItems: 'center', justifyContent: 'center', borderBottomColor: '#33CCFF', borderBottomWidth: 1 }}
                                onPress={() => this.checknamecus(row.hoten)}
                            >

                                <Text style={{ fontFamily: 'arial' }}>{row.hoten}</Text>
                            </TouchableOpacity>

                        </View>




                    }
                />

            </View>



        );
        const mainerror = this.state.ischeckerrorde ? loaderror :null
        const mainview = this.state.ischeck ? comback : null;
        let img = this.state.avatarSource == null ? null :
            <View style={{ marginTop: 10 }}>
                <Image
                    source={this.state.avatarSource}
                    style={{ height: 75, width: 75 }}
                />

            </View>
        return (
            <ScrollView>



                <View style={styles.styleheader}>
                    <View>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Home') }} style={{ padding: 10 }} >

                        <Image source={Backicon} style={{ width: 40, height: 40 }} />

                    </TouchableOpacity>
                    </View>
                    <Text style={styles.textHeader}>Add Reparation</Text>
                    <View style={{alignItems:'center', width:"100%", justifyContent:'flex-end'}}>
                        <TouchableOpacity style={{backgroundColor:'#555555', width:40, height:30, alignItems:'center', justifyContent:'center', margin:5}}>
                            <Text style={{fontSize:15, fontFamily:'arial', color:'#fff',textAlign:'center'}}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ alignItems: 'center', width: '100%', backgroundColor: '#EEEEEE', flexDirection: 'row', justifyContent: 'space-around', margin:5 }}>
                    <TouchableOpacity onPress={this.showimagetruoc.bind(this)} style={{ alignItems: 'center' }}>
                        <Image source={this.state.imagefront} style={{ width: 90, height: 75, marginTop: 5 }} />
                        <Text style={{ fontSize: 10, fontFamily: 'arial', fontWeight: 'bold' }}>Chose image</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={this.show.bind(this)} style={{ alignItems: 'center' }}>
                        <Image source={this.state.avatarSource} style={{ width: 90, height: 75, marginTop: 5 }} />
                        <Text style={{ fontSize: 10, fontFamily: 'arial', fontWeight: 'bold' }}>Image 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.showimageinside.bind(this)} style={{ alignItems: 'center' }}>
                        <Image source={this.state.imageinside} style={{ width: 90, height: 75, marginTop: 5 }} />
                        <Text style={{ fontSize: 10, fontFamily: 'arial', fontWeight: 'bold' }}>Image 3 </Text>
                    </TouchableOpacity> */}

                </View>
                <View style={{backgroundColor:'#888888', alignItems:'center'}} >


                    <View style={{ width: '90%', backgroundColor: '#eeeeee', marginTop: 10, marginLeft: 10 }}>
                        <View style={{}}>
                            <TouchableOpacity onPress={() => this.loadViewcus()} style={{ flexDirection: 'row' }}>
                                <TextInput style={styles.styleinput} keyboardType='default'
                                    onChangeText={(customername) => this.setState({ customername })}
                                    value={this.state.customername} placeholder="Customer's name"
                                >
                                </TextInput>
                                <Image source={customer} style={{ width: 40, height: 40 }} />
                            </TouchableOpacity>
                            {mainview}
                        </View>
                        <View style={{ flexDirection: 'row' }}>

                            <TextInput style={styles.styleinput} keyboardType='default'
                                onChangeText={(phone) => this.setState({ phone })}
                                value={this.state.phone} placeholder="Number phone off devices"
                            />

                            <Image source={deviceerror} style={{ width: 40, height: 40 }} />

                        </View>
                        <View style={{ margin: 5, borderWidth: 0.25, width: "80%" }}>
                            <Text style={{ fontFamily: 'arial' }}>Notification service:</Text>
                            <View style={{ flexDirection: 'row', height: 40, justifyContent: 'space-between', margin: 5 }}>
                                <Text style={{ fontFamily: 'arial', fontSize: 15, width: '50%' }}> Use SMS to Report:</Text>
                                <RadioForm style={{ flexDirection: 'row', width: '50%' }}
                                    radio_props={smsradio}
                                    onPress={(value) => { this.checksms(value) }}
                                    initial={0}
                                    formHorizontal={false}
                                    labelHorizontal={true}
                                    buttonColor={'#2196f3'}
                                    animation={true}
                                    buttonSize={20}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', height: 40, justifyContent: 'space-between', margin: 5 }}>
                                <Text style={{ fontFamily: 'arial', fontSize: 15, width: '50%' }}> Use Email to Report:</Text>
                                <RadioForm style={{ flexDirection: 'row', width: '50%' }}
                                    radio_props={smsradio}
                                    onPress={(value) => { this.checkemail(value) }}
                                    initial={0}
                                    formHorizontal={false}
                                    labelHorizontal={true}
                                    buttonColor={'#2196f3'}
                                    animation={true}
                                    buttonSize={20}
                                />
                            </View>
                        </View>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.loadViewerrorde()}>
                                <TextInput style={styles.styleinput} keyboardType='default'
                                    onChangeText={(Guasto) => this.setState({ Guasto })}
                                    value={this.state.Guasto} placeholder="Device Error"
                                />
                                <Image source={deviceerror} style={{ width: 40, height: 40 }} />
                            </TouchableOpacity>
                            {mainerror}
                               
                        </View>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <TextInput style={styles.styleinput} keyboardType='default'
                                    onChangeText={(Categoria) => this.setState({ Categoria })}
                                    value={this.state.Categoria} placeholder="Category"
                                />
                                <Image source={category} style={{ width: 40, height: 40 }} />
                            </TouchableOpacity>

                        </View>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <TextInput style={styles.styleinput} keyboardType='default'
                                    onChangeText={(Modello) => this.setState({ Modello })}
                                    value={this.state.Modello} placeholder="Modell"
                                />
                                <Image source={modell} style={{ width: 40, height: 40 }} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <TextInput style={styles.styleinput} keyboardType='default'
                                    onChangeText={(Anticipo) => this.setState({ Anticipo })}
                                    value={this.state.Anticipo} placeholder="Deposits"
                                />
                                <Image source={deposits} style={{ width: 40, height: 40 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>

                            <TextInput style={styles.styleinput} keyboardType='default'
                                onChangeText={(Prezzo) => this.setState({ Prezzo })}
                                value={this.state.Prezzo} placeholder="Total Money"
                            />
                            <Image source={cash} style={{ width: 40, height: 40 }} />

                        </View>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <TextInput style={styles.styleinput} keyboardType='default'
                                    onChangeText={(dataApertura) => this.setState({ dataApertura })}
                                    value={this.state.dataApertura} placeholder="Date created:"
                                />
                                <Image source={date} style={{ width: 40, height: 40 }} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <TextInput style={styles.styleinput} keyboardType='default'
                                    onChangeText={(status) => this.setState({ status })}
                                    value={this.state.status} placeholder="Status"
                                />
                                <Image source={status} style={{ width: 40, height: 40 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>

                            <TextInput style={styles.styleinput} keyboardType='default'
                                onChangeText={(Commenti) => this.setState({ Commenti })}
                                value={this.state.Commenti} placeholder="Comment"
                            />
                            <Image source={comment} style={{ width: 40, height: 40 }} />

                        </View>
                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <TextInput style={styles.styleinput} keyboardType='default'
                                    onChangeText={(codice) => this.setState({ codice })}
                                    value={this.state.codice} placeholder="Code to give device"
                                />
                                <Image source={code} style={{ width: 40, height: 40 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>

                            <TextInput style={styles.styleinput} keyboardType='default'
                                onChangeText={(email) => this.setState({ email })}
                                value={this.state.email} placeholder="Email"
                            />
                            <Image source={email} style={{ width: 40, height: 40 }} />

                        </View>
                        <View style={{ flexDirection: 'row' }}>

                            <TextInput style={styles.styleinput} keyboardType='default'
                                onChangeText={(password) => this.setState({ password })}
                                value={this.state.password} placeholder="Password of Device"
                            />
                            <Image source={email} style={{ width: 40, height: 40 }} />

                        </View>
                        <View style={{ flexDirection: 'row' }}>

                            <TextInput style={styles.styleinput} keyboardType='default'
                                onChangeText={(serial) => this.setState({ serial })}
                                value={this.state.serial} placeholder="Seri off Device"
                            />
                            <Image source={serial} style={{ width: 40, height: 40 }} />

                        </View>


                        <TextInput style={styles.styleinput} keyboardType='default'
                            onChangeText={(licence) => this.setState({ licence })}
                            value={this.state.licence} placeholder="licence"
                        />



                        <View>
                            <TouchableOpacity style={{ flexDirection: 'row' }}>
                                <TextInput style={styles.styleinput} keyboardType='default'
                                    onChangeText={(whom) => this.setState({ whom })}
                                    value={this.state.whom} placeholder="Address"
                                />
                                <Image source={address} style={{ width: 40, height: 40 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>

                            <TextInput style={styles.styleinput} keyboardType='default'
                                onChangeText={(tel) => this.setState({ tel })}
                                value={this.state.tel} placeholder="Number phone to tell "
                            />
                            <Image source={phonetel} style={{ width: 40, height: 40 }} />
                        </View>


                    </View>

                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity style={{backgroundColor:'green', width:80, height:40, alignItems:'center', justifyContent:'center', margin:5}}>
                            <Text style={{fontSize:15, fontFamily:'arial', color:'#fff',textAlign:'center'}}>Save</Text>
                        </TouchableOpacity>
                    </View>




                </View>

            </ScrollView>
        );
    }

    componentDidMount() {

        fetch("http://172.16.1.15/serverMobile/getnamecustomer.php")
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.Commenti);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseJson),

                })
            })
            .catch((error) => {
                console.log(error);
            });
    }
    upload() {

        alert(this.state.avatarSource, this.state.imagefront);

    }
    show() {
        picture((source) => this.setState({ avatarSource: source }));

    }
    showimagetruoc() {
        picture((source) => this.setState({
            imagefront: source
        }));
    }
    showimageinside() {
        picture((source) => this.setState({
            imageinside: source
        }));
    }
    loadViewcus() {
        this.setState({
            ischeck: true
        });
    }
    loadViewerrorde() {
        this.setState({
            ischeckerrorde: true,
            

        });
    }
    checknamecus(name) {
        this.setState({
            ischeck: false,
            customername: name
        });

    }
    checkerror(er) {
        this.setState({
            ischeckerrorde: false,
            Guasto:er
        });

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
    stylebody: {

        backgroundColor: '#336633'
    },
    textHeaderBody: {
        color: '#fff',
        fontFamily: 'arial',
        fontSize: 25,
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    textBody: {
        color: '#fff',
        fontFamily: 'arial',
        fontSize: 15,
        justifyContent: 'center'
    },
    styleinput: {
        width: "80%",
        height: 40,
        borderRadius: 10


    },
    container: {
        backgroundColor: '#fff',
        height: height / 2,
        margin: 10,

        shadowColor: '#2E272B',
        shadowOpacity: { width: 0, height: 5 },
        shadowOpacity: 0.05,
        padding: 10,
        paddingTop: 5,
        borderRadius: 10,


    },
    textlist: {

        fontFamily: 'arial',
        fontSize: 12,
        justifyContent: 'center'
    }

});
