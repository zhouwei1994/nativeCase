import React, { Component } from 'react';
import { ScrollView, StyleSheet, BackHandler, Text, WebView,Image, TouchableOpacity } from 'react-native';
//是否可以返回
var canGoBack = false;
class WebViewPage extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            headerTitle: params && params.title ? params.title : "WebView",
            headerLeft: (
                <TouchableOpacity
                style={{
                    width:50,
                    height:50,
                    justifyContent: "center",
                    alignItems: "center",
                }}
                    onPress={() => {
                        if (canGoBack) {
                            webViewRef.goBack();
                        } else {
                            navigation.goBack()
                        }
                    }}
                >
                   <Image style={{width:22,height:20}} resizeMode="contain" source={require("./../../../images/nav_back.png")}/>
                </TouchableOpacity>
            )
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            canGoBack: false
        };
    }

    componentDidMount() {
        //监听安卓返回按钮
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }
    //判断是否网页后退还是路由后退
    onBackPress = () => {
        if (canGoBack) {
            webViewRef.goBack();
            return true;
        } else {
            return false;
        }
    }
    //页面变化监听
    _onNavigationStateChange(navState) {
        this.props.navigation.setParams({ title: navState.title });
        canGoBack = navState.canGoBack
    }
    render() {
        return (
            /* 访问一个网页 */
            <WebView source={{ uri: 'https://www.baidu.com' }}
                ref={(ref) => {
                    global.webViewRef = ref;
                }}
                style={{ marginTop: 20 }}
                startInLoadingState={true}
                // 当导航状态发生变化的时候调用。
                onNavigationStateChange={this._onNavigationStateChange.bind(this)}
            // 设置 js 字符串，在网页加载之前注入的一段 JS 代码。
            // injectedJavaScript="alert('1236')"
            />
        );
    }
}
export default WebViewPage;
const styles = StyleSheet.create({

});
