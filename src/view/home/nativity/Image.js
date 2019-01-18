import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Dimensions, ImageBackground } from 'react-native';
const { width, height } = Dimensions.get('window')
class ImagePage extends Component {
    static navigationOptions = {
        title: '图片显示',
    };
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>背景图片</Text>
                <ImageBackground style={{ width: width, height: 400, alignSelf: "center", justifyContent: "center" }} source={require('./../../../images/123.jpg')} >
                    <Text style={{ backgroundColor: "#fff", fontSize: 30, textAlign: "center" }}>背景图片</Text>
                </ImageBackground>
                <Text style={{ fontSize: 30 }}>本地图片</Text>
                <Text>resizeMode="cover" //自适应-容器完全填满,可能会剪切部分，不会留白</Text>
                <Image resizeMode="cover" style={{ width: width, height: 400 }} source={require('./../../../images/123.jpg')} />
                <Text style={{ fontSize: 30 }}>网络图片</Text>
                <Text>注意：网络图片必须设置高宽</Text>
                <Text>resizeMode="contain" //自适应到图片完全显示,可能会留白,不会切掉部分</Text>
                <Image style={{ width: width, height: 300, backgroundColor: "#ccc" }} resizeMode="contain" source={{ uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545301819020&di=9c0393effb134d44448a9d210db71cf2&imgtype=0&src=http%3A%2F%2Fa3.topitme.com%2Ff%2F11%2F86%2F11285035871508611fo.jpg" }} />
                <Text style={{ fontSize: 30 }}>base64 数据的图片</Text>
                <Text>注意：base64 数据的图片必须设置高宽</Text>
                <Text>resizeMode="stretch" //拉伸图片且不维持宽高比，直到宽高都刚好填满容器</Text>
                <Image style={{ width: width, height: 100 }} resizeMode="stretch" source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==" }} />
                <Text style={{ fontSize: 30 }}> App原生图片库的图片</Text>
                <Text>注意：App原生图片库的图片必须设置高宽</Text>
                <Text>resizeMode="center" //居中不拉伸</Text>
                <Image style={{ width: width, height: 100 }} resizeMode="center" source={{ uri: 'asset:/app_icon.png' }} />
            </ScrollView>
        );
    }
}
export default ImagePage;
const styles = StyleSheet.create({

});
