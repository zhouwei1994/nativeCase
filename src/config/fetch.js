import { Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
//数据加载动画
import Loading from "./../components/common/Loading";
//弹窗提示
import Toast from "./../components/common/Toast";
//引入请求方法
import response from "./response";
//创建response对象
var http = new response({
  //定义请求地址公共部分(必填)
  baseUrl: 'https://www.zhenwang.so/needle/api/',
  //设置请求超时时间，单位：毫秒，低于2000毫秒是默认系统超时时间（默认为0 ）
  // timeout: 0,
  //设置请求头（默认为{}）
  headers: {
    'Content-Type': 'application/json'
  }
});
let ajaxNum = 0;
//请求开始回调
http.responseStart = function (options) {
  console.log("请求开始");
  //判断当前接口是否需要加载动画
  if (options.load) {
    //请求数量加1
    ajaxNum++;
    //打开加载动画
    Loading.show();
  }
}
//请求结束
http.responseEnd = function (options, resolve) {
  let result = resolve.response;
  if (typeof result !== 'object') {
    result = JSON.parse(result);
  }
  console.log(resolve.responseURL, '\n', result);
  console.log("请求结束");
  //判断当前接口是否需要加载动画
  if (options.load) {
    //请求数量减1
    ajaxNum = ajaxNum - 1;
    //请求数量小于1关闭请求动画
    if (ajaxNum <= 0) {
      Loading.hide();
    }
  }
}
//所有接口数据处理（这里是我们公司的java后台的数据结构，使用的小伙伴各自按照实际情况处理）
http.dataFactory = function (options, resolve) {
  console.log("所有接口数据处理");
  //设置回调默认值
  var callback = {
    success: false,
    result:"未定义返回值"
  };
  //判断数据是否请求成功
  if (resolve.success) {
    callback.success = true;
    callback.result = resolve.data;
  } else if (parseInt(resolve.code) == 1000) { //code == 1000 是用户未登录
    //这个是React Native的原生方法
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
  } else { //其他错误提示
    if (options.isPrompt) {
      Toast.add(resolve.info);
    }
    callback.result = resolve.info;
  }
  //本回调函数必须有return，返回数据结构为：
  // {
  //    success: （true 返回到正确的位置 | false 返回到错误的位置）
  //    result:（返回数据）
  // }
  return callback;
}
//返回请求对象
export default http;