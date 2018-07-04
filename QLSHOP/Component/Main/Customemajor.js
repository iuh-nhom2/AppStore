import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
const { height } = Dimensions.get('window');
export default class Customer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Customer Major</Text>
                <View style={{
                    flexDirection: 'row', flex: 3, shadowColor: '#2E272B',
                    shadowOpacity: { width: 0, height: 5 },
                    shadowOpacity: 0.05,
                }}>
                    <View style={styles.styleviewbutton}>
                    <TouchableOpacity style={styles.styletouch} onPress={() => { this.props.navigation.navigate('User') }}  >
                               
                                <Text>Add Reparation</Text>
                            </TouchableOpacity>
                    </View>
                    <View style={styles.styleviewbutton}>
                        <Text>Order Repair</Text>
                    </View>
                    <View style={styles.styleviewbutton}>
                        <Text>Order Repair</Text>
                    </View>

                </View>


            </View>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: height / 4,
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
        backgroundColor: 'red',
        flex: 1,
        margin: 5,
        shadowColor: '#2E272B',
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 6 },
        alignItems: 'center',
        justifyContent: 'center'
    }
});