import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import Popup from '../../components/common/Popup';
class PopupPage extends Component {
    static navigationOptions = {
        title: '弹窗',
    };
    constructor(props) {
        super(props);
    }
    open() {
        Popup.show({
            title: "请选择",
            content: (
                <Text style={{ fontSize: 30 }}>我是类容</Text>
            )
        }, (res) => {
            //点击确认后执行此回调
            console.log(res);
            //关闭Popup
            Popup.hide();
        });
    }
    render() {
        return (
            <ScrollView style={styles.pageStyle}>
                <Text style={{ fontSize: 30 }}>popup</Text>
                <Button title="打开弹窗" onPress={this.open.bind(this)} />
            </ScrollView>
        );
    }
}
export default PopupPage;
const styles = StyleSheet.create({
    pageStyle: {
        backgroundColor: '#f5f5f5',
    },
});
