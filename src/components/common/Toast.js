import React, {
    Component,
} from 'react';

import {
    StyleSheet,
    View,
    Easing,
    Dimensions,
    Text,
    Animated
} from 'react-native';
const { width, height } = Dimensions.get('window')
class AddToast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0)
        }
    }
    componentDidMount() {
        Animated.sequence([
            // 使用宽松函数让数值随时间动起来。
            Animated.timing(                  // 随时间变化而执行动画
                this.state.fadeAnim,            // 动画中的变量值
                {
                    toValue: 1,                   // 透明度最终变为1，即完全不透明
                    duration: 500,              // 让动画持续一段时间
                }
            ),
            Animated.delay(4000),
            Animated.timing(
                this.state.fadeAnim,
                {
                    toValue: 0,
                    duration: 500,
                }
            )
        ]).start((res) => {
            this.props.delete && this.props.delete(res);
        });
    }
    render() {
        let { fadeAnim } = this.state;
        const opacity = fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });
        const translateY = fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 0]
        });
        return (
            <Animated.Text                 // 使用专门的可动画化的View组件
                style={{
                    opacity: opacity,         // 将透明度指定为动画变量值
                    backgroundColor: "rgba(0,0,0,0.7)",
                    borderRadius: 10,
                    color: "#FFF",
                    marginTop: 5,
                    paddingBottom: 5,
                    paddingLeft: 15,
                    paddingTop: 5,
                    paddingRight: 15,
                    transform: [
                        { translateY: translateY },
                    ]
                }}
            >
                {this.props.children}
            </Animated.Text>
        )
    }
}
let _this;
let key = 0;
class ToastView extends Component {
    constructor(props) {
        super(props);
        _this = this;
        this.state = {
            toastList: []
        }
        this.deleteToast = this.deleteToast.bind(this);
    }
    static add = (value) => {
        var toastList = _this.state.toastList;
        var toastAddState = true;
        toastList.forEach((item, index) => {
            if (item.text === value) {
                toastAddState = false;
            }
        });
        if (toastAddState) {
            toastList.push({
                text: value,
                value: <AddToast key={key} delete={_this.deleteToast}>{value}</AddToast>
            });
            key++;
            _this.setState({ toastList: toastList })
        }
    };
    deleteToast() {
        var toastList = this.state.toastList;
        toastList.splice(0, 1);
        this.setState({ toastList: toastList })
    }
    render() {
        return (
            <View style={{
                position: "absolute",
                left: 0,
                bottom: 50,
                width: width,
                justifyContent: "center",
                alignItems: "center",
            }}>
                {this.state.toastList.map((item, index) => {
                    return item.value;
                })}
            </View>
        )
    }
}
export default ToastView;