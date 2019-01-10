/**
 * json数据去重合并
 */
export const modifyJson = (json, oldJson) => {
    if (!json && !oldJson) return;
    if (typeof json !== "object") {
        json = JSON.parse(json);
    }
    if (typeof oldJson !== "object") {
        oldJson = JSON.parse(oldJson);
    }

    var jsonData = {};
    for (var i in oldJson) {
        jsonData[i] = oldJson[i];
    }
    for (var j in json) {
        jsonData[j] = json[j];
    }

    return jsonData;
}
/**
 * 时间戳转换为想要的时间格式
 */
//时间戳转换为时间 format('yyyy-MM-dd hh:mm:ss')
export const formatTime = function (value, format) {
    var timeObj;
    if (value) {
        timeObj = new Date(parseInt(value));
    } else if (value === '') {
        timeObj = new Date();
    } else {
        return;
    }
    var date = {
        "M+": timeObj.getMonth() + 1,
        "d+": timeObj.getDate(),
        "h+": timeObj.getHours(),
        "m+": timeObj.getMinutes(),
        "s+": timeObj.getSeconds(),
        "q+": Math.floor((timeObj.getMonth() + 3) / 3),
        "S+": timeObj.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (timeObj.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in date) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length === 1 ?
                date[k] : ("00" + date[k]).substr(("" + date[k]).length));
        }
    }
    return format;
}