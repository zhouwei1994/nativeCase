import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Animated, TouchableOpacity, BackHandler } from 'react-native';
import { Number } from 'core-js';
const { width, height } = Dimensions.get('window');
var _this = null;
class Popup extends Component {
    constructor(props) {
        super(props);
        _this = this;
        this.state = {
            //显示、隐藏 
            show: false,
            //弹窗高度
            popupHeight: 250,
            //动画值
            animatedValue: new Animated.Value(0),
            //取消文字
            cancelText: "取消",
            //确定文字
            confirmText: "确定",
            //标题
            title: "请选择",
            //是否显示头部栏
            isHeader: true
        };
        this.showAnimated = Animated.timing(
            this.state.animatedValue,
            {
                toValue: 1,
                duration: 300,
            }
        );
        this.hideAnimated = Animated.timing(
            this.state.animatedValue,
            {
                toValue: 0,
                duration: 300,
            }
        );
    }
    componentDidMount() {
        _this = this;
    }
    static show = (options, callback) => {
        var cancelText = options.cancelText || "取消";
        var confirmText = options.confirmText || "确定";
        var title = options.title || "请选择";
        var isHeader = options.isHeader === false ? false : true;
        var popupHeight = options.popupHeight || 250;
        var content = options.content || (<Text>无内容</Text>);
        _this.setState({
            show: true,
            cancelText,
            confirmText,
            title,
            isHeader,
            popupHeight,
            content,
            callback
        })
        //动画值初始化为0
        _this.state.animatedValue.setValue(0);
        //开始执行动画
        _this.showAnimated.start();
    };
    static hide = () => {
        _this.popupHide();
    };
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
    }
    //安卓返回键关闭APP
    onBackPress = () => {
        if (this.state.show) {
            this.popupHide();
            return true;
        } else {
            return false;
        }
    };
    popupHide = () => {
        //动画值初始化为0
        this.state.animatedValue.setValue(1);
        //开始执行动画
        this.hideAnimated.start(() => {
            this.setState({ show: false })
        });
    }
    onConfirm() {
        this.state.callback && this.state.callback({ confirm: true });
    }
    render() {
        if (this.state.show) {
            const translateY = this.state.animatedValue.interpolate({
                inputRange: [0, 1],
                outputRange: [this.state.isHeader ? this.state.popupHeight + 50 : this.state.popupHeight , 0]
            });
            return (
                <View style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: width,
                    height: height,
                }}>
                    <TouchableOpacity style={styles.PopupPage} activeOpacity={1} onPress={this.popupHide}>
                        <View></View>
                    </TouchableOpacity>
                    <Animated.View
                        style={{
                            position: "absolute",
                            left: 0,
                            bottom: 0,
                            backgroundColor: "#FFF",
                            width: width,
                            height: this.state.popupHeight + 50,
                            transform: [
                                { translateY: translateY },
                            ]
                        }}
                    >
                        {this.header()}
                        {this.state.content}
                    </Animated.View>
                </View>
            );
        } else {
            return <View />
        }
    }
    header = () => {
        if (this.state.isHeader) {
            return <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                borderColor: "#eee",
                borderBottomWidth: 1,
                height: 50
            }}>
                <TouchableOpacity onPress={this.popupHide}>
                    <Text style={{
                        color: "#999",
                        paddingLeft: 15,
                        paddingRight: 15,
                        height: 50,
                        lineHeight: 50
                    }}>{this.state.cancelText}</Text>
                </TouchableOpacity>
                <Text style={{
                    color: "#333",
                    fontSize: 16
                }}>{this.state.title}</Text>
                <TouchableOpacity onPress={this.onConfirm.bind(this)}>
                    <Text style={{
                        color: "#333",
                        paddingLeft: 15,
                        paddingRight: 15,
                        height: 50,
                        lineHeight: 50
                    }}>{this.state.confirmText}</Text>
                </TouchableOpacity>
            </View>
        }
    }
}
export default Popup;
const styles = StyleSheet.create({
    PopupPage: {
        position: "absolute",
        left: 0,
        top: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        width: width,
        height: height,
        justifyContent: "center",
        alignItems: "center",
    },
});
