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

import Addicon from '../../media/iconadd.png';
import Menuicon from '../../media/menuicon.png';
import slogan1 from '../../media/slogan1.jpg';
import slogan2 from '../../media/slogan2.jpg';
import slogan3 from '../../media/slogan3.png';
import slogan4 from '../../media/slogan4.jpg';
import order from '../../media/order.png';
import customer from '../../media/customer2.png';
import Swiper from 'react-native-swiper';
const { height } = Dimensions.get('window');
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
    render() {
        return (
            <Drawer tapToClose={true}
                openDrawerOffset={0.3}
                ref={(ref) => this._drawer = ref}
                content={
                    <View style={{ flex: 1, backgroundColor: "#34B089", borderRightWidth: 3, alignItems: 'center', margin: 10 }}>

                        <Text>Menu form</Text>
                    </View>
                }
            >
                <Swiper autoplay={true} autoplayTimeout={5} >
                    <ImageBackground source={HeaderBackground} style={{ height: height / 3, justifyContent: 'space-between', paddingTop: 40 }}>
                        <TouchableOpacity onPress={() => { this.openControlPanel() }}>
                            <Image source={Menuicon} style={{ width: 60, height: 60 }} />
                        </TouchableOpacity>
                        <Swiper autoplay={true} autoplayTimeout={4}  >
                            <View>
                                <Text>Hãy đến với chúng tôi- GMTCO</Text>
                            </View>
                            <View>
                                <Text>Và chỉ cần nói vấn đề của bạn là gì ?</Text>
                            </View>
                            <View>
                                <Text>Chúng tôi sẽ giải quết tất cả</Text>
                            </View>
                            <View>
                                <Text>Vì... Ở đây cái gì chúng tôi cũng có!!! The GMTCO Welcome</Text>
                            </View>
                        </Swiper>

                    </ImageBackground>
                    {/* <ImageBackground source={slogan1} style={{ height: height / 3, justifyContent: 'space-between', paddingTop: 40 }}>
                        <TouchableOpacity onPress={() => { this.openControlPanel() }}>
                            <Image source={Menuicon} style={{ width: 60, height: 60 }} />
                        </TouchableOpacity>


                    </ImageBackground>
                    <ImageBackground source={slogan2} style={{ height: height / 3, justifyContent: 'space-between', paddingTop: 40 }}>
                        <TouchableOpacity onPress={() => { this.openControlPanel() }}>
                            <Image source={Menuicon} style={{ width: 60, height: 60 }} />
                        </TouchableOpacity>


                    </ImageBackground>
                    <ImageBackground source={slogan3} style={{ height: height / 3, justifyContent: 'space-between', paddingTop: 40 }}>
                        <TouchableOpacity onPress={() => { this.openControlPanel() }}>
                            <Image source={Menuicon} style={{ width: 60, height: 60 }} />
                        </TouchableOpacity>


                    </ImageBackground>
                    <ImageBackground source={slogan4} style={{ height: height / 3, justifyContent: 'space-between', paddingTop: 40 }}>
                        <TouchableOpacity onPress={() => { this.openControlPanel() }}>
                            <Image source={Menuicon} style={{ width: 60, height: 60 }} />
                        </TouchableOpacity>


                    </ImageBackground> */}
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
                                <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('ManHinh_ListReparation')}}>
                                    <Image source={order} style={{ width: 50, height: 50 }} />
                                    <Text style={{ fontFamily: 'arial', color: 'pink', fontWeight: 'bold' }}>Order</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.styleviewbutton} >
                                <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('ManHinh_ListReparation')}}>
                                    <Text>qweqwewq</Text>
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
        color: '#D2691E'
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