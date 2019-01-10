import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator, TabBarBottom } from "react-navigation";
//主导航页面
import Home from './../view/home/home';
import Project from './../view/project/project';
import Order from './../view/order/order';
import My from './../view/my/my';
//主导航设置
export default createBottomTabNavigator(
    {
        home: {
            screen: Home,
            navigationOptions: () => ({
                //底部导航的文本
                tabBarLabel: `首页`,
                //底部导航的图标
                tabBarIcon: ({ focused }) => {
                    var imageIcon = require('./../images/tabIcon/ic_home.png');
                    if (focused) {
                        imageIcon = require('./../images/tabIcon/ic_home_active.png');
                    }
                    return <Image style={styles.tabIcon} source={imageIcon} />
                },
            }),
        },
        project: {
            screen: Project,
            navigationOptions: () => ({
                tabBarLabel: `项目`,
                tabBarIcon: ({ focused }) => {
                    var imageIcon = require('./../images/tabIcon/ic_project.png');
                    if (focused) {
                        imageIcon = require('./../images/tabIcon/ic_project_active.png');
                    }
                    return <Image style={styles.tabIcon} source={imageIcon} />
                },
            }),
        },
        order: {
            screen: Order,
            navigationOptions: () => ({
                tabBarLabel: `订单`,
                tabBarIcon: ({ focused }) => {
                    var imageIcon = require('./../images/tabIcon/ic_order.png');
                    if (focused) {
                        imageIcon = require('./../images/tabIcon/ic_order_active.png');
                    }
                    return <Image style={styles.tabIcon} source={imageIcon} />
                },
            }),
        },
        my: {
            screen: My,
            navigationOptions: () => ({
                tabBarLabel: `我的`,
                tabBarIcon: ({ focused }) => {
                    var imageIcon = require('./../images/tabIcon/ic_my.png');
                    if (focused) {
                        imageIcon = require('./../images/tabIcon/ic_my_active.png');
                    }
                    return <Image style={styles.tabIcon} source={imageIcon} />
                },
            }),
        },
    },
    {
        //首次加载时显示的页面
        initialRouteName: "home",
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            //当前选中的tab的文本颜色和图标颜色
            activeTintColor: '#000',
            //当前选中tab的背景颜色
            activeBackgroundColor: "#f5f5f5",
            //当前未选中的tab bar的文本颜色和图标颜色
            inactiveTintColor: '#666',
            //当前未选中tab的背景颜色
            // inactiveBackgroundColor: "#fff",
            //是否显示tab的文字
            showLabel: true,
            // 是否显示tab的图标
            showIcon: true,
            //tab bar的样式
            style: {},
            //tab的样式对象。
            tabStyle: {
                // backgroundColor: '#000',
                // borderTopColor: '#ccc',
            }
        },
        //是否在切换tab页时使用动画
        animationEnabled: true,
        //是否允许滑动切换tab页
        swipeEnabled: true,
        //是否懒加载
        lazy: true,
    }
)
const styles = StyleSheet.create({
    tabIcon: {
        width: 23, height: 24
    }
});