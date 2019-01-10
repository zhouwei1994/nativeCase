
import AppNavigator from './../router/index';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { AsyncStorage } from 'react-native';
import { reduxifyNavigator, createReactNavigationReduxMiddleware, createNavigationReducer } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import { stores,cacheNameList } from './stores';
//创建导航状态数据商店redux
const navReducer = createNavigationReducer(AppNavigator);
//结合redux
const appReducer = combineReducers({
    ...stores,
    nav: navReducer
});
// 创建React Navigation Redux中间件
const middleware = createReactNavigationReduxMiddleware(
    "Root",
    state => state.nav,
);
// 生成reduxify导航组件
const App = reduxifyNavigator(AppNavigator, "Root");
const mapStateToProps = (state) => ({
    state: state.nav,
});
//创建数据商店
export const store = createStore(
    appReducer,
    applyMiddleware(middleware),
);
export const AppWithNavigationState = connect(mapStateToProps)(App);
async function setCacheData() {
    for (var item of cacheNameList) {
        let getData = await AsyncStorage.getItem(item);
        if (getData) {
            store.dispatch({
                type: item,
                data: JSON.parse(getData)
            });
        }
    }
};
setCacheData();