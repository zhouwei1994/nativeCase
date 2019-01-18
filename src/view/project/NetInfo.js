import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, NetInfo } from 'react-native';

class NetInfoPage extends Component {
    static navigationOptions = {
        title: '获取设备的联网状态',
    };
    constructor(props) {
        super(props);
        this.state = {
            theInternet: false
        };
    }
    componentDidMount() {
        NetInfo.getConnectionInfo().then((connectionInfo) => {
            this.setState({
                theInternet: connectionInfo.type
            });
        });
        NetInfo.addEventListener(
            'connectionChange',
            (connectionInfo) => {
                this.setState({
                    theInternet: connectionInfo.type
                });
            }
        );
    }
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>NetInfo</Text>
                <Text style={{ fontSize: 20 }}>当前网络：{this.state.theInternet}</Text>
                <Text>要在Android上获取联网状态，还需要在AndroidManifest.xml中添加如下权限请求：</Text>
                <Text>android.permission.ACCESS_NETWORK_STATE</Text>
            </ScrollView>
        );
    }
}
export default NetInfoPage;
const styles = StyleSheet.create({

});
