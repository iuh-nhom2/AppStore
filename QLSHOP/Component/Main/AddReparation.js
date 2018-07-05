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
const { height } = Dimensions.get('window');
import RNFetchBlob from 'react-native-fetch-blob';
import Backicon from '../../media/comebackicon.png';
import imageicon from '../../media/imageicon.png';
import takephoto from '../../media/takephoto.png';
import customer from '../../media/customer1.png';
import picture from '../Function/image.js';
import Backtopicon from '../../media/combacktop.png';
export default class AddReparation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customername: "",
            Faulty: "",
            Repairprice: "",
            Licence: "",
            IMEI: "",
            TypeProduct: "",
            Orderpiece: "",
            Password: "",
            Bywhom: "",
            Custom: "",
            Model: "",
            Extracharge: "",
            Serial: "",
            Tel: "",
            TXT: "",
            email: "",
            avatarSource: takephoto,
            imagefront: takephoto,
            imageinside: takephoto,
            Image: "",
            data: null,
            ischeck: false,
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
        }
    }

    render() {


        const comback = (

            <View>
                <ListView
                    dataSource={this.state.dataSource}

                    renderRow={(row) =>


                        <View >
                            <TouchableOpacity style={{ height: 30, width: '80%', alignItems: 'center', justifyContent: 'center', borderBottomColor:'#33CCFF', borderBottomWidth:1 }}
                               onPress={()=>this.checknamecus(row.hoten)}
                            >

                                <Text style={{ fontFamily: 'arial' }}>{row.hoten}</Text>
                            </TouchableOpacity>
                            
                        </View>




                    }
                />

            </View>



        );
        const mainview = this.state.ischeck ? comback : null;
        let img = this.state.avatarSource == null ? null :
            <View style={{ marginTop: 10 }}>
                <Image
                    source={this.state.avatarSource}
                    style={{ height: 75, width: 75 }}
                />

            </View>
        return (
            <View>



                <View style={styles.styleheader}>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Home') }} style={{ padding: 10 }} >

                        <Image source={Backicon} style={{ width: 50, height: 50 }} />

                    </TouchableOpacity>
                    <Text style={styles.textHeader}>Add Reparation</Text>
                </View>


                <ScrollView >
                    <View style={{ alignItems: 'center', width: '100%', backgroundColor: '#EEEEEE', flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity onPress={this.showimagetruoc.bind(this)} style={{ alignItems: 'center' }}>
                            <Image source={this.state.imagefront} style={{ width: 90, height: 75, marginTop: 5 }} />
                            <Text style={{ fontSize: 10, fontFamily: 'arial', fontWeight: 'bold' }}>Image 1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.show.bind(this)} style={{ alignItems: 'center' }}>
                            <Image source={this.state.avatarSource} style={{ width: 90, height: 75, marginTop: 5 }} />
                            <Text style={{ fontSize: 10, fontFamily: 'arial', fontWeight: 'bold' }}>Image 2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.showimageinside.bind(this)} style={{ alignItems: 'center' }}>
                            <Image source={this.state.imageinside} style={{ width: 90, height: 75, marginTop: 5 }} />
                            <Text style={{ fontSize: 10, fontFamily: 'arial', fontWeight: 'bold' }}>Image 3 </Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ width: '100%', backgroundColor: '#eeeeee', marginTop: 10, marginLeft: 10 }}>
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
                        <TextInput style={styles.styleinput} keyboardType='default'
                            onChangeText={(Faulty) => this.setState({ Faulty })}
                            value={this.state.Faulty} placeholder="Faulty"
                        />
                        <TextInput style={styles.styleinput} keyboardType='default'
                            onChangeText={(customername) => this.setState({ customername })}
                            value={this.state.customername} placeholder="Customer's name"
                        />
                        <TextInput style={styles.styleinput} keyboardType='default'
                            onChangeText={(customername) => this.setState({ customername })}
                            value={this.state.customername} placeholder="Customer's name"
                        />

                    </View>

                    <View style={{ alignItems: 'center', width: '100%', backgroundColor: '#EEEEEE' }}>


                    </View>




                </ScrollView>
            </View>
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
    checknamecus(name) {
        this.setState({
            ischeck: false ,
            customername:name 
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
