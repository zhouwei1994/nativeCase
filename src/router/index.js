import React, { Component } from 'react';
import { Easing, Animated,Image } from 'react-native';
import {
    createStackNavigator,
    createAppContainer
} from "react-navigation";
//底部导航配置
import Navigator from './../components/navigator/index';
//页面
import Button from '../view/home/Button';
//页面路由
const routerStack = createStackNavigator({
    navigator: {
        screen: Navigator,
        //不显示头部
        navigationOptions: {
            header: null,
        }
    },
    button: {
        screen: Button,
    },
}, {
        //默认第一次显示首页
        initialRouteName: 'navigator',
        // 定义渲染和过渡的样式
        mode: 'modal',
        // 指定标头的呈现方式
        headerMode: "screen",
        //显示返回图标后的文字
        headerBackTitleVisible: false,
        cardOverlayEnabled: true,
        //标题居中
        headerLayoutPreset: "center",
        //设置默认数据
        defaultNavigationOptions: ({ navigation }) => {
            return {
                // 设置头部返回图片
                headerBackImage: <Image style={{width:22,height:20}} screen={require("../images/nav_back.png")}/>
            }
        },
        //页面跳转动画
        transitionConfig: () => ({
            transitionSpec: {
                duration: 300,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
            },
            screenInterpolator: sceneProps => {
                const {layout, position, scene} = sceneProps;
                const {index} = scene;
                const Width = layout.initWidth;
                //沿X轴平移
                const translateX = position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [Width, 0, -(Width - 10)],
                });
                //透明度
                const opacity = position.interpolate({
                    inputRange: [index - 1, index],
                    outputRange: [0,  1],
                });
                return {opacity, transform: [{translateX}]};
            }
        }),
        //页面跳转之前
        onTransitionStart: () => {
            // console.log("页面跳转之前");
        },
        //页面跳转之后
        onTransitionEnd: () => {
            // console.log("页面跳转之后");
        },
    });

export default routerStack;