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
    Dimensions

} from 'react-native';

import Drawer from 'react-native-drawer';
import HeaderBackground from '../../media/bgrheader.jpg';
import Majorshows from './Majorshows.js';
import Customer from './Customemajor.js';
import Background3 from '../../media/gmtbg.hpg.jpg';
import Addicon from '../../media/iconadd.png';
import Menuicon from '../../media/menuicon.png';
import gmtlogo from '../../media/gmtlogo.png';
import slogan1 from '../../media/slogan1.jpg';
import slogan2 from '../../media/slogan2.jpg';
import slogan3 from '../../media/slogan3.png';
import slogan4 from '../../media/slogan4.jpg';
import reporticon from '../../media/report.png';
import huongdanicon from '../../media/huongdan.png';
import abouticon from '../../media/about.png';
import settingicon from '../../media/settings.png';
import logouticon from '../../media/logout.png';
import bodymenu from '../../media/bodymenu.jpg';
import user from '../../media/usericon.png';
import order from '../../media/order.png';
import customer from '../../media/customer2.png';
import loggmt from '../../media/gmtlogo.png'
import Swiper from 'react-native-swiper';
const { height, width } = Dimensions.get('window');
export default class Major extends Component {
    static navigationOptions = () => {
        title: 'Danh Mục'
        headerStyle: {
            height: 0
        }
    }
    coloseControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    }
    logout(){
        AsyncStorage.clear();
        this.props.navigation.navigate('ManHinh_WelCome');
    }
    render() {
        return (
            <Drawer tapToClose={true}
                openDrawerOffset={0.3}
                ref={(ref) => this._drawer = ref}
                content={
                    <View style={{ flex: 1 }}>

                        {/* <Swiper autoplay={true} autoplayTimeout={5} style={{ flex: 2 }}>

                            <ImageBackground source={Background3} style={{
                                width: '100%', height: '100%', backgroundColor:'#EEEEEE', opacity:0.5
                            }}>

                            </ImageBackground>
                          
                            {/* <ImageBackground source={slogan2} style={{ height: '100%', justifyContent: 'space-between', paddingTop: 40 }}>



                            </ImageBackground>
                            
                            <ImageBackground source={slogan4} style={{ height: '100%', justifyContent: 'space-between', paddingTop: 40 }}>



                            </ImageBackground> */}

                        {/* </Swiper> */}
                        <ImageBackground source={bodymenu} style={{ flex: 3, backgroundColor: '#000000', opacity: 0.5, justifyContent: 'center' }}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={loggmt} style={{ width: 150, height: 150 }} />
                            </View>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                                <Image source={user} style={{ width: 50, height: 50 }} />
                                <Text style={{ fontFamily: 'arial', color: '#fff', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Information off user</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                                <Image source={reporticon} style={{ width: 50, height: 50 }} />
                                <Text style={{ fontFamily: 'arial', color: '#fff', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Report</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                                <Image source={huongdanicon} style={{ width: 50, height: 50 }} />
                                <Text style={{ fontFamily: 'arial', color: '#fff', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Guide</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 5 }}>
                                <Image source={abouticon} style={{ width: 50, height: 50 }} />
                                <Text style={{ fontFamily: 'arial', color: '#fff', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>About</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginTop: 100, padding: 10, borderTopWidth: 1 }}
                                onPress={() => { this.logout() }}
                            >
                                <Image source={logouticon} style={{ width: 50, height: 50 }} />
                                <Text style={{ fontFamily: 'arial', color: '#fff', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Log out</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                }
            >
                <Swiper autoplay={true} autoplayTimeout={8} >
                    <ImageBackground source={HeaderBackground} style={{ height: height / 3, justifyContent: 'space-between', paddingTop: 40 }}>
                        <TouchableOpacity onPress={() => { this.openControlPanel() }}>
                            <Image source={Menuicon} style={{ width: 50, height: 50 }} />
                        </TouchableOpacity>
                        <Swiper autoplay={true} autoplayTimeout={4}  >
                            <View>
                                <Text style={{ fontFamily: 'arial' }}>Hãy đến với chúng tôi- GMTCO</Text>
                            </View>
                            <View>
                                <Text style={{ fontFamily: 'arial' }}>Và chỉ cần nói vấn đề của bạn là gì ?</Text>
                            </View>
                            <View>
                                <Text style={{ fontFamily: 'arial' }}>Chúng tôi sẽ giải quết tất cả</Text>
                            </View>
                            <View>
                                <Text style={{ fontFamily: 'arial' }}>Vì... Ở đây cái gì chúng tôi cũng có!!! The GMTCO Welcome</Text>
                            </View>
                        </Swiper>

                    </ImageBackground>

                </Swiper>
                <View style={styles.container}>

                    <Text style={{
                        shadowColor: '#2E272B',
                        shadowOpacity: { width: 0, height: 5 },
                        shadowOpacity: 0.05, color: 'green', fontWeight: 'bold'
                    }}>Order & Repairing</Text>
                    <View style={{
                        flexDirection: 'row', flex: 3, shadowColor: '#2E272B',
                        shadowOpacity: { width: 0, height: 5 },
                        shadowOpacity: 0.05,
                    }}>
                        <Swiper autoplay={true} autoplayTimeout={3} showsButtons={false} style={{ backgroundColor: '#fff', padding: 10, margin: 5 }}>
                            <View style={styles.styleviewbutton}>
                                <TouchableOpacity>
                                    <Image source={customer} style={{ width: 50, height: 50 }} />
                                    <Text style={{ fontFamily: 'arial', color: 'pink', fontWeight: 'bold' }}>Customer</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.styleviewbutton}>
                                <TouchableOpacity>
                                    <Text style={styles.textStyle}>4 customer on this month</Text>
                                </TouchableOpacity>
                            </View>
                        </Swiper>
                        <Swiper autoplay={true} autoplayTimeout={5} style={{ backgroundColor: '#fff', padding: 10, margin: 5 }}>
                            <View style={styles.styleviewbutton} >
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ListReparation') }}>
                                    <Image source={order} style={{ width: 50, height: 50 }} />
                                    <Text style={{ fontFamily: 'arial', color: 'pink', fontWeight: 'bold' }}>Order</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.styleviewbutton} >
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('ManHinh_ListReparation') }}>
                                    <Text style={{ fontFamily: 'arial' }}>One new Order</Text>
                                </TouchableOpacity>
                            </View>
                        </Swiper>
                        <View style={styles.styleviewbutton}>
                            <Text>Order Repair</Text>
                        </View>
                        <View style={styles.styleviewbutton}>
                            <Text>Order Repair</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 3 }}>
                        <View style={styles.styleviewbutton}>
                            <TouchableOpacity style={styles.styletouch} onPress={() => { this.props.navigation.navigate('ManHinh_Addrepair') }} >
                                <Image source={Addicon} style={styles.styleImage} />
                                <Text>Add Reparation</Text>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.styleviewbutton}>
                            <Text>Order Repair</Text>
                        </View>
                    </View>

                </View>
                <Customer />
            </Drawer>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: height / 3,
        margin: 10,

        shadowColor: '#2E272B',
        shadowOpacity: { width: 0, height: 5 },
        shadowOpacity: 0.05,
        padding: 10,
        paddingTop: 5,
        borderRadius: 10,


    },
    textStyle: {
        fontSize: 12,
        color: '#D2691E',
        fontFamily: 'arial'
    },
    imagestyle: {
        width: 340,
        height: 150,
        borderRadius: 10,

    },
    styleviewbutton: {

        flex: 1,
        margin: 5,
        shadowColor: '#2E272B',
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 6 },
        alignItems: 'center',
        justifyContent: 'center'
    },
    styleImage: {
        flex: 1,
        width: 60,
        height: 60
    },
    styletouch: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});