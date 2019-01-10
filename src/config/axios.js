import axios from "axios";
import {
    Alert
} from 'react-native';
import {
    NavigationActions
} from 'react-navigation';
import Loading from "./../components/common/Loading";
import Toast from "./../components/common/Toast";
let $http = axios.create({
    baseURL: 'https://www.zhenwang.so/needle/api/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
});
export default $http;
//当前请求数
let requestNum = 0;
// 添加一个请求拦截器
$http.interceptors.request.use(function (config) {
    // 在请求发送之前做某事
    requestNum++;
    Loading.show();
    return config;
}, function (error) {
    // 用请求错误做某事
    Toast.add("请求错误");
    requestOut();
    return Promise.reject(error);
});
// 添加一个响应拦截器
$http.interceptors.response.use(function (response) {
    // 用响应数据做某事
    requestOut();
    if (response.data.success) {
        return response.data.data;
    } else if (parseInt(response.data.code) === 1000 || parseInt(response.data.code) === 1001) {
        Alert.alert(
            '提示',
            "您还未登录，请先登录",
            [{
                    text: '等一会',
                    onPress: () => {

                    },
                    style: 'cancel'
                },
                {
                    text: '去登录',
                    onPress: () => {
                        NavigationActions.navigate({
                            routeName: 'Home',
                        });
                    }
                }
            ], {
                cancelable: false
            })
        return undefined;
    } else if (prompt) {
        Toast.add(response.data.info);
        return undefined;
    }
}, function (error) {
    // 用响应错误做某事
    requestOut();
    Toast.add("网络错误");
    return Promise.reject(error);
});

function requestOut() {
    requestNum--;
    if (requestNum === 0) {
        Loading.hide();
    }
}