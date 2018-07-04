import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet,
    Dimensions,
    Image,
    ListView,
    RefreshControl,
    TextInput
} from 'react-native';
import Backicon from '../../media/comebackicon.png';
import Backtopicon from '../../media/combacktop.png';
import AddPrara from '../../media/addReparation.png';
import EditPara from '../../media/edit.png';
import Checkoke from '../../media/checkoke.png';
import DeletePara from '../../media/delete.png';
import searchimage from '../../media/search.png';

const { height, width } = Dimensions.get('window');
export default class OrderReparation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            refreshing: false,
            dataSource: new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }),

            isfreshing: false,
            Status: "",
            ID: "",
            Result: "",
            Search: "",
            isSearch: false,
        }
    }

    searchOrder() {
        this.setState({
            isSearch: true
        })
        fetch("http://172.16.1.15/serverMobile/search.php", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "SEARCH": this.state.Search
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseJson),

                })
            })
            .catch((error) => {
                console.log(error);
            });
    }
    deleteOrder(id) {
        alert(id);
        fetch("http://172.16.1.15/serverMobile/deleteOrderRepara.php", {
            method: "POST",
            headers: {
                "Accept": "application/jsson",
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "ID": id,

            })

        })
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({
                    Result: responseJSON.tb
                });
                this.componentDidMount();
                alert(this.state.Result);
            })
            .catch((error) => { console.log(error) });
    }
    updatecheck(id, status) {
        status = "conmplete";
        // alert(id +status);

        fetch("http://172.16.1.15/serverMobile/updatecheckoke.php", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "ID": id,
                "COMMENTI": status
            })
        })
            .then((response) => response.json())
            .then((responseJSON) => {
                this.setState({
                    // dataSource: this.state.dataSource.cloneWithRows(responseJSON),
                    Result: responseJSON.tb
                });
                this.componentDidMount();
                alert(this.state.Result);

            })

            .catch((error) => {
                consoloe.log(error)
            });

    }
    loadnewdata() {
        this.setState({
            refreshing: true,
            isfreshing: true,

        });
        fetch("http://172.16.1.15/serverMobile/getOrderReparation.php?page=" + this.state.page)
            .then((response) => response.json())
            .then((responseJson) => {


                console.log(responseJson.Commenti);

                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseJson),
                    refreshing: false,
                    page: this.state.page + 1,

                });

            })
            .catch((error) => {
                console.log(error);
            });
    }
    backtop() {
        this.setState({
            refreshing: true,
            isfreshing: false,
            isSearch: false

        });
        fetch("http://172.16.1.15/serverMobile/getOrderReparation.php?page=" + 1)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(responseJson),
                    refreshing: false,
                    page: 1,
                    Status: responseJson.Commenti,
                    ID: responseJson.ID
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        const awaylist = (
            <View style={{alignItems:'center'}}>
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => { this.backtop() }}>
                    <Image source={Backtopicon} style={{ width: 30, height: 30 }} />
                    <Text style={{ fontSize: 10 }}>Back to List</Text>
                </TouchableOpacity>
            </View>
        );
        const comback = (
            <View>
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => { this.backtop() }}>
                    <Image source={Backtopicon} style={{ width: 30, height: 30 }} />
                    <Text style={{ fontSize: 10 }}>Back to TOP</Text>
                </TouchableOpacity>
            </View>
        );
        const mainview = this.state.isfreshing ? comback : null;
        const viewlist = this.state.isSearch ? awaylist : null;
        return (
            <View>
                <View style={styles.styleheader}>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Home') }} style={{ padding: 10 }} >

                        <Image source={Backicon} style={{ width: 40, height: 40 }} />

                    </TouchableOpacity>
                    <Text style={styles.textHeader}>Order Paration:</Text>
                    <View style={{
                        borderWidth: 0.5, width: width / 1.75, height: 30, margin: 5, borderRadius: 5,
                        alignItems: 'center', justifyContent: 'center', flexDirection: 'row'
                    }}>

                        <TextInput style={{ width: '90%', height: 40, fontSize: 15 }} keyboardType='email-address'
                            onChangeText={(Search) => this.setState({ Search })}
                            placeholder="Enter your code or your name" value={this.state.Search}
                        >
                        </TextInput>
                        <TouchableOpacity style={{ borderRadius: 0.15, borderWidth: 1 }} onPress={() => this.searchOrder()}  	>
                            <Image source={searchimage} style={{ width: 30, height: 30 }} />
                        </TouchableOpacity>
                    </View>
                </View>
               

                    {viewlist}
                
                <ListView style={{ height: height / 1.25 }}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.loadnewdata.bind(this)}
                        />

                    }
                    dataSource={this.state.dataSource}
                    renderRow={(row) =>
                        <View>

                            <View style={styles.container}>
                                <View style={{ height: 40, width: '100%', backgroundColor: '#333333', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>

                                    <Text style={styles.textBody}>{row.Nominativo}</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ padding: 5, margin: 5 }}>
                                        <Image source={{ uri: row.images }} style={{ width: 100, height: 200 }} />
                                    </View>
                                    <View style={{ padding: 5, margin: 5 }}>
                                        <Text style={styles.textlist}>ID: {row.ID}</Text>
                                        <Text style={styles.textlist}>Customer: {row.Nominativo}</Text>
                                        <Text style={styles.textlist}>Phone numeber:{row.Telefono}</Text>
                                        <Text style={styles.textlist}>Guasto: {row.Guasto}</Text>
                                        <Text style={styles.textlist}>Supplier: {row.Categoria}</Text>
                                        <Text style={styles.textlist}>Model: {row.Modello}</Text>
                                        <Text style={styles.textlist}>Date create: {row.dataApertura}</Text>
                                        <Text style={styles.textlist}>Email: {row.email}</Text>
                                        <Text style={styles.textlist}>Password: {row.password}</Text>
                                        <Text style={styles.textlist}>Seri: {row.serial}</Text>
                                        <Text style={styles.textlist}>Status: {row.Commenti}</Text>

                                        <View style={{ flexDirection: 'row' }}>
                                            <TouchableOpacity onPress={() => { this.updatecheck(row.ID, row.Commenti) }}>
                                                <Image source={Checkoke} style={{ width: 35, height: 35, margin: 10 }} />
                                            </TouchableOpacity>
                                            <TouchableOpacity >
                                                <Image source={AddPrara} style={{ width: 35, height: 35, margin: 10 }} />
                                            </TouchableOpacity>
                                            <TouchableOpacity >
                                                <Image source={EditPara} style={{ width: 35, height: 35, margin: 10 }} />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => this.deleteOrder(row.ID)}>
                                                <Image source={DeletePara} style={{ width: 35, height: 35, margin: 10 }} />
                                            </TouchableOpacity>

                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                    }


                />
                <View style={{ alignItems: 'center' }} >
                    {mainview}
                </View>
            </View>

        );
    }

    componentDidMount() {

        fetch("http://172.16.1.15/serverMobile/getOrderReparation.php?page=" + this.state.page)
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
        borderRadius: 10,
        color: '#fff'

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
