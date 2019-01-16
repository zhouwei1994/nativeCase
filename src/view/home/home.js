import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import List from './../../components/module/list';
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ScrollView style={styles.pageStyle}>
                <Text style={{ fontSize: 30 }}>第三方组件</Text>
                <List title="日期/时间选择器" path="datePicker"></List>
                <List title="上传图片/拍照/图片剪切" path="imagePicker"></List>
                {/* <List title="图片预览" path="picturePreview"></List> */}
                <List title="轮播图" path="swiper"></List>
                <Text style={{ fontSize: 30 }}>自定义组件/方法</Text>
                <List title="提示" path="toast"></List>
                <List title="弹窗" path="popup"></List>
                <List title="地址选择器" path="addressSelect"></List>
            </ScrollView>
        );
    }
}
export default Home;
const styles = StyleSheet.create({
    pageStyle: {
        backgroundColor: '#f5f5f5',
    },
});
