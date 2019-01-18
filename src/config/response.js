export default class response {
    constructor(options) {
      //请求公共地址
      this.baseUrl = options.baseUrl;
      //最大请求时间 0 是不限制时间
      this.timeout = options.timeout || 0;
      //默认请求头
      this.headers = options.headers || {};
    }
    //post请求
    post(url = '', data = {}, options = {}) {
      let requestInfo = this.getDefault(url, options);
      let requestData = JSON.stringify(data);
      return new Promise((resolve, reject) => {
        this.request("POST", requestInfo, requestData, (state, response) => {
          //是否用外部的数据处理方法
          if (state && requestInfo.isFactory && this.dataFactory) {
            //数据处理
            var factoryInfo = this.dataFactory(requestInfo,response);
            factoryInfo.success ? resolve(factoryInfo.result) : reject(factoryInfo.result);
          } else {
            state ? resolve(response) : reject(response);
          }
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
        this.request("GET", requestInfo, '', (state, response) => {
          //是否用外部的数据处理方法
          if (state && requestInfo.isFactory && this.dataFactory) {
            //数据处理
            var factoryInfo = this.dataFactory(requestInfo,response);
            factoryInfo.success ? resolve(factoryInfo.result) : reject(factoryInfo.result);
          } else {
            state ? resolve(response) : reject(response);
          }
        });
      });
    }
  
    // 获取默认信息
    getDefault(url, options) {
      //判断url是不是链接
      var urlType = /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+).)+([A-Za-z0-9-~\/])+$/.test(url);
      return {
        //请求地址
        httpUrl: urlType ? url : this.baseUrl + url,
        //是否提示--默认提示
        isPrompt: options.prompt === false ? false : true,
        //是否显示请求动画
        load: options.load === false ? false : true,
        //请求头
        headers: Object.assign(this.headers, options.headers),
        //是否处理数据
        isFactory: options.isFactory === false ? false : true
      }
    }
    //请求方法
    request(ajaxType, options, data, callback) {
      let requestObj;
      if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest();
      } else {
        requestObj = new ActiveXObject;
      }
      //请求前回调
      this.responseStart && this.responseStart(options);
      //设置请求时间，最低5秒
      if (options.timeout > 2000) {
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
          //请求完成回调
          this.responseEnd && this.responseEnd(options, requestObj);
          if (requestObj.status === 200) {
            let result = requestObj.response;
            if (typeof result !== 'object') {
              result = JSON.parse(result);
            }
            callback(true, result);
          } else {
            console.error(requestObj.response);
            callback(false, requestObj.response);
          }
        }
      }
    }
  }