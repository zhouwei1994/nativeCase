import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';

import List from './../../components/module/list';
export default class Project extends Component {
    render() {
        return (
            <ScrollView style={styles.projectPage}>
                <Text style={{ fontSize: 40 }}>react-native API</Text>
                <List title="读屏应用(不知道干啥用的)" path="accessibilityInfo"></List>
                <List title="alert弹窗" path="alert"></List>
                <List title="动画" path="animatedIndex"></List>
                <List title="获取APP状态（前台、后台）" path="appState"></List>
                <List title="数据储存" path="asyncStorage"></List>
                <List title="监听安卓返回键" path="backHandler"></List>
                <List title="访问手机相册" path="cameraRoll"></List>
                <List title="剪切板" path="clipboard"></List>
                <List title="图片剪切" path="cropImage"></List>
                <List title="键盘事件" path="keyboard"></List>
                <List title="布局动画" path="layoutAnimation"></List>
                <List title="唤起其他APP/其他APP唤起我的链接" path="linking"></List>
                <List title="获取设备的联网状态" path="netInfo"></List>
                <List title="多点触摸操作事件" path="panResponder"></List>
                <List title="Android访问获取操作权限" path="permissionsAndroid"></List>
                <List title="获取屏幕像素密度/单位换算" path="pixelRatio"></List>
                <List title="分享" path="share"></List>
                <List title="设备震动" path="vibration"></List>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    projectPage: {
        backgroundColor: '#f5f5f5',
    },
});
