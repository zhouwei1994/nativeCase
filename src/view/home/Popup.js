import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import Popup from '../../components/common/Popup';
class Home extends Component {
    static navigationOptions = {
        title: '弹窗',
    };
    constructor(props) {
        super(props);
    }
    open() {
        Popup.show({
            title: "请选择地址",
            content: (
                <Text style={{ fontSize: 30 }}>popup</Text>
            )
        }, (res) => {
                console.log(res);
                setTimeout(() => {
                    Popup.hide();
                },2000)
        });
    }
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>popup</Text>
                <Button title="打开弹窗" onPress={this.open.bind(this)} />
            </ScrollView>
        );
    }
}
export default Home;
const styles = StyleSheet.create({

});
