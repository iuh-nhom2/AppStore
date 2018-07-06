import React, {Component} from 'react';
import {
    View,
    Text,
    ListView,
    TouchableOpacity

} from 'react-native';

export default class ShowError extends Component{
    constructor(props){
        super(props);
        this.state={
        dataSource: new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2}),
        checkerror:false,
        nerror:""
        }
    }
    render(){
        return(
            <View>
                <ListView 
                    dataSource={this.state.dataSource}
                    renderRow={(row)=>
                        <View>
                                <TouchableOpacity onPress={()=>{this.props.checklist(row.Guasto)}}
                                 style={{ height: 30, width: '80%', alignItems: 'center', justifyContent: 'center', borderBottomColor: '#33CCFF', borderBottomWidth: 1}} >
                                    <Text style={{fontFamily:'arial'}}>{row.Guasto}</Text>
                                </TouchableOpacity>
                        </View>
                    }
                />
            </View>
        );
    }
    
    componentDidMount(){
        fetch("http://172.16.1.15/serverMobile/geterroofdevice.php")
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