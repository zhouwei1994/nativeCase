import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, PermissionsAndroid } from 'react-native';

class PermissionsAndroidPage extends Component {
    static navigationOptions = {
        title: 'Android访问获取操作权限',
    };
    constructor(props) {
        super(props);
        this.state = {
            screenReaderEnabled: false
        };
    }
    async getRecordAudio() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: '申请录制音频权限',
                    message:
                        '想要装B就要开启录制音频权限，' +
                        '期待你装的一手好逼。',
                    buttonNeutral: '等会再问我',
                    buttonNegative: '不行',
                    buttonPositive: '好吧',
                },
            );
            console.log(granted);
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('现在你获得录制音频权限了');
                alert("现在你获得录制音频权限了");
            } else {
                console.log('用户并不屌你');
            }
        } catch (err) {
            console.warn(err);
        }
    }
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>PermissionsAndroid</Text>
                <Button title="获取录制音频权限" onPress={this.getRecordAudio.bind(this)}></Button>
                <Text>每次都是用户已经拒绝过了 never_ask_again，好像有bug</Text>
                
            </ScrollView>
        );
    }
}
export default PermissionsAndroidPage;
const styles = StyleSheet.create({

});
