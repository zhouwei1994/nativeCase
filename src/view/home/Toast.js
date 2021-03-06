import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import Toast from '../../components/common/Toast';
var s = 0;
class ToastPage extends Component {
    static navigationOptions = {
        title: '提示',
    };
    constructor(props) {
        super(props);
    }
    open() {
        s++;
        Toast.add("测试,我是Toast 顺序："+s);
    }
    render() {
        return (
            <ScrollView style={styles.pageStyle}>
                <Text style={{ fontSize: 30 }}>Date</Text>
                <Button title="打开提示" onPress={this.open.bind(this)} />
            </ScrollView>
        );
    }
}
export default ToastPage;
const styles = StyleSheet.create({
    pageStyle: {
        backgroundColor: '#f5f5f5',
    },
});
