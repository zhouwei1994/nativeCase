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
                <Text style={{ fontSize: 30 }}>原生组件</Text>
                <List title="加载动画" path="activityIndicator"></List>
                <List title="按钮事件" path="button"></List>
                <List title="阴影样式属性（IOS）" path="shadow"></List>
                <List title="高性能列表组件" path="flatList"></List>
                <List title="图片/背景图片显示" path="imagePage"></List>
                <List title="输入框" path="textInput"></List>
                <List title="全屏蒙层" path="modal"></List>
                <List title="picker弹窗" path="picker"></List>
                <List title="下拉刷新（官方版）" path="refreshControl"></List>
                <List title="表单" path="form"></List>
                <List title="web View" path="webView"></List>
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
