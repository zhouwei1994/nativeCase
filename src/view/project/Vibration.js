import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View,Button, Vibration } from 'react-native';

class VibrationPage extends Component {
    static navigationOptions = {
        title: '设备震动',
    };
    constructor(props) {
        super(props);
    }
    openVibration() {
        Vibration.vibrate([1000, 2000, 3000]);
    }
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>Vibration</Text>
                <Button title="让设备震动" onPress={this.openVibration.bind(this)} />
                <Text>要在Android上获取设备震动权限，还需要在AndroidManifest.xml中添加如下权限请求：</Text>
                <Text>android.permission.VIBRATE</Text>
            </ScrollView>
        );
    }
}
export default VibrationPage;
const styles = StyleSheet.create({

});
