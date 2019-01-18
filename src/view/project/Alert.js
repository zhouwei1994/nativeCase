import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Alert, Button } from 'react-native';

class AccessibilityInfoPage extends Component {
    static navigationOptions = {
        title: 'alert弹窗',
    };
    constructor(props) {
        super(props);
        this.state = {
            screenReaderEnabled: false
        };
    }
    //提示弹窗
    onAlert1 = () => {
        Alert.alert(
            '提示',
            '提示内容！',
            [
                { text: '确定', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    }
    //确认弹窗
    onAlert2 = () => {
        Alert.alert(
            '提示',
            '提示内容！',
            [
                { text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: '确定', style: "cancel", onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    }
    // 三种选择弹窗
    onAlert3 = () => {
        Alert.alert(
            '提示',
            '提示内容！',
            [
                { text: '过会儿问我', onPress: () => console.log('Ask me later pressed') },
                { text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: '确定', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    }
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>alert弹窗</Text>
                <Button title="提示弹窗" onPress={this.onAlert1} />
                <View style={{ marginBottom: 10 }}></View>
                <Button title="确认弹窗" onPress={this.onAlert2} />
                <View style={{ marginBottom: 10 }}></View>
                <Button title="三种选择弹窗" onPress={this.onAlert3} />
            </ScrollView>
        );
    }
}
export default AccessibilityInfoPage;
const styles = StyleSheet.create({

});
