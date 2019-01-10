import React, { Component } from 'react';
import { ToastAndroid, BackHandler, StatusBar } from 'react-native';
import { NavigationActions } from "react-navigation";
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { store, AppWithNavigationState } from './store/index';
import "./components/common/RootView";
//最后一次按返回的时间
let lastBackPressed = 0;
export default class Root extends React.Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    // 在入口文件处隐藏掉启动页
    SplashScreen.hide(); // 关闭启动屏幕
  }
  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }
  //安卓返回键关闭APP
  onBackPress = () => {
    if (store.getState().nav.index === 0) {
      let now = new Date().getTime();
      if (now - lastBackPressed < 2500) {
        return false;
      }
      lastBackPressed = now;
      ToastAndroid.show('再点击一次退出应用', ToastAndroid.SHORT);
      return true;
    }
    store.dispatch(NavigationActions.back());
    return true;
  };
  render() {
    return (
      <Provider store={store}>
        {/* barStyle 设置状态栏文本的颜色 dark-content = 黑色  dark-content = 白色*/}
        {/* translucent 指定状态栏是否透明 true = 背景透明 Android */}
        <StatusBar
          animated={true}
          barStyle="dark-content"
          backgroundColor="#fff"
          translucent={false}
          showHideTransition={'fade'}
          networkActivityIndicatorVisible={true}
        />
        <AppWithNavigationState />
      </Provider>
    );
  }
}
