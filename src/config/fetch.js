import {
  Alert
} from 'react-native';
import {
  NavigationActions
} from 'react-navigation';
import Loading from "./../components/common/Loading";
import Toast from "./../components/common/Toast";


class $ajax {
  constructor(options) {
    //请求公共地址
    this.baseUrl = options.baseUrl;
    //最大请求时间 0 是不限制时间
    this.timeout = options.timeout || 0;
    //默认请求头
    this.headers = options.headers || {
      'Content-Type': 'application/json'
    };
    //当前请求数
    this.ajaxNum = 0;
  }
  //post请求
  post(url = '', data = {}, options = {}) {
    let requestInfo = this.getDefault(url, options);
    let requestData = JSON.stringify(data);
    return new Promise((resolve, reject) => {
      this.request("POST", requestInfo, requestData, (response) => {
        //数据处理
        var result = this.dataDeal(response, requestInfo.isPrompt);
        result.isSuccess ? resolve(result.result) : reject();
      });
    });
  }
  //get请求
  get(url = '', data = {}, options = {}) {
    let requestInfo = this.getDefault(url, options);
    let dataStr = '';
    Object.keys(data).forEach(key => {
      dataStr += key + '=' + data[key] + '&';
    });
    //匹配最后一个&并去除
    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
    }
    requestInfo.httpUrl = requestInfo.httpUrl + '?' + dataStr;
    return new Promise((resolve, reject) => {
      this.request("GET", requestInfo, '', (response) => {
        //数据处理
        var result = this.dataDeal(response, requestInfo.isPrompt);
        result.isSuccess ? resolve(result.result) : reject();
      });
    });
  }
  // 获取默认信息
  getDefault(url, options) {
    return {
      //请求地址
      httpUrl: options.ownUrl ? url : this.baseUrl + url,
      //是否提示--默认提示
      isPrompt: options.prompt === false ? false : true,
      //是否显示请求动画
      load: options.load === false ? false : true,
      //请求头
      headers: Object.assign(this.headers, options.headers)
    }
  }
  //数据处理
  dataDeal(res, isPrompt) {
    var callback = {};
    if (res.status === 200) {
      callback.isSuccess = true;
      let result = res.response;
      if (typeof result !== 'object') {
        result = JSON.parse(result);
      }
      console.log(res.responseURL, '\n', result);
      //判断数据是否请求成功
      if (result.success) {
        callback.result = result.data;
      } else if (parseInt(result.code) == 1000) {
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
      } else {
        if (isPrompt) {
          Toast.add(result.info);
        }
        callback.result = callback;
      }
    } else {
      callback.isSuccess = false;
      console.error(result.response);
      Toast.add("网络错误");
    }
    return callback;
  }
  //请求方法
  request(ajaxType, options, data, callback) {
    let requestObj;
    if (window.XMLHttpRequest) {
      requestObj = new XMLHttpRequest();
    } else {
      requestObj = new ActiveXObject;
    }
    if (options.load) {
      //请求数量加1
      this.ajaxNum++;
      //打开加载动画
      Loading.show();
    }
    //设置请求时间，最低5秒
    if (options.timeout > 5000) {
      //设置xhr请求的超时时间
      requestObj.timeout = options.timeout;
    }
    requestObj.open(ajaxType, options.httpUrl, true);
    //加入请求头
    Object.keys(options.headers).forEach(key => {
      if (options.headers[key]) {
        requestObj.setRequestHeader(key, options.headers[key]);
      }
    });
    requestObj.send(data);
    requestObj.onreadystatechange = () => {
      if (requestObj.readyState == 4) {
        //请求完成
        if (options.load) {
          //请求数量减1
          this.ajaxNum = this.ajaxNum - 1;
          //关闭请求动画
          if (this.ajaxNum <= 0) {
            Loading.hide();
          }
        }
        callback(requestObj);
      }
    }
  }
}

var http = new $ajax({
  baseUrl: 'https://www.zhenwang.so/needle/api/',
});

export default http;