import { modifyJson } from "./../config/utils";
import { AsyncStorage } from 'react-native';
//缓存浏览器的数据名称
export const cacheNameList = ["USER_INFO_TODO", "OTHER_TODO"];
function storeStorage(key,text) {
    AsyncStorage.setItem(key, text);
}
//用户数据
function userInfo(
    state = {
        token: "fsfsfsdfsd"
    }, action) {
    switch (action.type) {
        case 'USER_INFO_TODO':
            if (action.data) {
                var userText = modifyJson(action.data,state)
                storeStorage('USER_INFO_TODO', JSON.stringify(userText));
                return userText;
            } else {
                return state;
            }
        default:
            return state
    }
};

function other(state = "123456789", action) {
    switch (action.type) {
        case "OTHER_TODO":
            if (action.data) {
                // storage.setItem('OTHER_TODO', JSON.stringify(action.data));
                return action.data;
            } else {
                return state;
            }
        default:
            return state
    }
}
export const stores = {
    userInfo,
    other,
};
