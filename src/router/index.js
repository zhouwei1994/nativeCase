import React, { Component } from 'react';
import { Easing, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {
    createStackNavigator,
    createAppContainer
} from "react-navigation";
//底部导航配置
import Navigator from './../components/navigator/index';
//页面
import Ble from './../view/ble';
import ActivityIndicator from '../view/home/ActivityIndicator';
import Button from '../view/home/Button';
import DatePickerIOS from '../view/home/DatePickerIOS';
import FlatList from '../view/home/FlatList';
import ImageComponents from '../view/home/Image';
import TextInput from '../view/home/TextInput';
import Modal from '../view/home/Modal';
import Picker from '../view/home/Picker';
import RefreshControl from '../view/home/RefreshControl';
import SafeAreaView from '../view/home/SafeAreaView';
import ScrollView from '../view/home/ScrollView';
import Form from '../view/home/Form';
import WebView from '../view/home/WebView';
import Shadow from '../view/home/Shadow';
//第三方组件
import Datepicker from '../view/home/Datepicker';
import CropPicker from '../view/home/CropPicker';
import Swiper from '../view/home/Swiper';
import AddressSelect from '../view/home/AddressSelect';
import Toast from '../view/home/Toast';
import Popup from '../view/home/Popup';
import picturePreview from '../view/home/picturePreview';
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
//页面路由
const routerStack = createStackNavigator({
    navigator: {
        screen: Navigator,
        //不显示头部
        navigationOptions: {
            header: null,
        }
    },
    Ble: {
        screen: Ble,
    },
    activityIndicator: {
        screen: ActivityIndicator,
    },
    button: {
        screen: Button,
    },
    datePickerIOS: {
        screen: DatePickerIOS,
    },
    flatList: {
        screen: FlatList,
    },
    image: {
        screen: ImageComponents,
    },
    textInput: {
        screen: TextInput,
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
    scrollView: {
        screen: ScrollView,
    },
    form: {
        screen: Form,
    },
    webView: {
        screen: WebView,
    },
    shadow: {
        screen: Shadow,
    },
    // 第三方组件
    datepicker: {
        screen: Datepicker,
    },
    cropPicker: {
        screen: CropPicker,
    },
    swiper: {
        screen: Swiper,
    },
    picturePreview: {
        screen: picturePreview,
    },
    // 自定义组件
    addressSelect: {
        screen: AddressSelect,
    },
    toast: {
        screen: Toast,
    },
    popup: {
        screen: Popup,
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
                headerBackImage: <Icon style={{fontSize:22}} name="chevron-thin-left"></Icon>
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