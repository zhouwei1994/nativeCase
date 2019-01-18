import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, PixelRatio } from 'react-native';

class PixelRatioPage extends Component {
    static navigationOptions = {
        title: '获取屏幕像素密度/单位换算',
    };
    constructor(props) {
        super(props);
        this.state = {
            width: PixelRatio.getPixelSizeForLayoutSize(100),
            height: PixelRatio.getPixelSizeForLayoutSize(100)
        };
    }
    componentDidMount() {
        console.log("当前密度",PixelRatio.get());
        console.log("当前字体缩放比例",PixelRatio.getFontScale());
        console.log("将一个布局尺寸(10dp)转换为像素尺寸(px)",PixelRatio.getPixelSizeForLayoutSize(10));
    }
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>PixelRatio</Text>
                <Image source={require("./../../images/123.jpg")} style={{ width: this.state.width, height: this.state.height }} />
            </ScrollView>
        );
    }
}
export default PixelRatioPage;
const styles = StyleSheet.create({

});
