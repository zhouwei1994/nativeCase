import React, { Component } from 'react';
import { Easing, Animated,Image } from 'react-native';
import {
    createStackNavigator,
    createAppContainer
} from "react-navigation";
//底部导航配置
import Navigator from './navigator';
//页面
//home文件下的
// 原生组件
import ActivityIndicator from '../view/home/nativity/ActivityIndicator';
import Button from '../view/home/nativity/Button';
import FlatList from '../view/home/nativity/FlatList';
import Form from '../view/home/nativity/Form';
import ImagePage from '../view/home/nativity/Image';
import Modal from '../view/home/nativity/Modal';
import Picker from '../view/home/nativity/Picker';
import RefreshControl from '../view/home/nativity/RefreshControl';
import SafeAreaView from '../view/home/nativity/SafeAreaView';
import Shadow from '../view/home/nativity/Shadow';
import TextInput from '../view/home/nativity/TextInput';
import WebView from '../view/home/nativity/WebView';
//第三方组件
import DatePicker from '../view/home/DatePicker';
import ImagePicker from '../view/home/ImagePicker';
import Swiper from '../view/home/Swiper';
//自定义组件
import AddressSelect from '../view/home/AddressSelect';
import Popup from '../view/home/Popup';
import Toast from '../view/home/Toast';
// API
import AccessibilityInfo from '../view/project/AccessibilityInfo';
import Alert from '../view/project/Alert';
import AnimatedIndex from '../view/project/Animated/index';
import Animated1 from '../view/project/Animated/Animated1';
import Animated2 from '../view/project/Animated/Animated2';
import Animated3 from '../view/project/Animated/Animated3';
import Animated4 from '../view/project/Animated/Animated4';
import Animated5 from '../view/project/Animated/Animated5';
import Animated6 from '../view/project/Animated/Animated6';
import AppState from '../view/project/AppState';
import AsyncStorage from '../view/project/AsyncStorage';
import BackHandler from '../view/project/BackHandler';
import CameraRoll from '../view/project/CameraRoll';
import Clipboard from '../view/project/Clipboard';
import CropImage from '../view/project/CropImage';
import Keyboard from '../view/project/Keyboard';
import LayoutAnimation from '../view/project/LayoutAnimation';
import Linking from '../view/project/Linking';
import NetInfo from '../view/project/NetInfo';
import PanResponder from '../view/project/PanResponder';
import PermissionsAndroid from '../view/project/PermissionsAndroid';
import PixelRatio from '../view/project/PixelRatio';
import Share from '../view/project/Share';
import Vibration from '../view/project/Vibration';
//order文件下的
import childPage from '../view/order/childPage';
//页面路由
const routerStack = createStackNavigator({
    navigator: {
        screen: Navigator,
        //不显示头部
        navigationOptions: {
            title: ' ', // 这里不给值
            header: null, // 不显示导航栏
            gesturesEnabled: false
        }
    },
    activityIndicator: {
        screen: ActivityIndicator,
    },
    button: {
        screen: Button,
    },
    flatList: {
        screen: FlatList,
    },
    form: {
        screen: Form,
    },
    imagePage: {
        screen: ImagePage,
    },
    modal: {
        screen: Modal,
    },
    picker: {
        screen: Picker,
    },
    refreshControl: {
        screen: RefreshControl,
    },
    safeAreaView: {
        screen: SafeAreaView,
    },
    shadow: {
        screen: Shadow,
    },
    textInput: {
        screen: TextInput,
    },
    webView: {
        screen: WebView,
    },
    //第三方组件
    datePicker: {
        screen: DatePicker,
    },
    imagePicker: {
        screen: ImagePicker,
    },
    swiper: {
        screen: Swiper,
    },
    //自定义组件
    addressSelect: {
        screen: AddressSelect,
    },
    popup: {
        screen: Popup,
    },
    toast: {
        screen: Toast,
    },
    // API
    accessibilityInfo: {
        screen: AccessibilityInfo,
    },
    alert: {
        screen: Alert,
    },
    animatedIndex: {
        screen: AnimatedIndex,
    },
    animated1: {
        screen: Animated1,
    },
    animated2: {
        screen: Animated2,
    },
    animated3: {
        screen: Animated3,
    },
    animated4: {
        screen: Animated4,
    },
    animated5: {
        screen: Animated5,
    },
    animated6: {
        screen: Animated6,
    },
    appState: {
        screen: AppState,
    },
    asyncStorage: {
        screen: AsyncStorage,
    },
    backHandler: {
        screen: BackHandler,
    },
    cameraRoll: {
        screen: CameraRoll,
    },
    clipboard: {
        screen: Clipboard,
    },
    cropImage: {
        screen: CropImage,
    },
    keyboard: {
        screen: Keyboard,
    },
    layoutAnimation: {
        screen: LayoutAnimation,
    },
    linking: {
        screen: Linking,
    },
    netInfo: {
        screen: NetInfo,
    },
    panResponder: {
        screen: PanResponder,
    },
    permissionsAndroid: {
        screen: PermissionsAndroid,
    },
    pixelRatio: {
        screen: PixelRatio,
    },
    share: {
        screen: Share,
    },
    vibration: {
        screen: Vibration,
    },
    //order文件下的
    childPage: {
        screen: childPage,
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
                headerBackImage: <Image style={{width:22,height:20}} resizeMode="contain" source={require("./../images/nav_back.png")}/>
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