import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, PanResponder } from 'react-native';


class PanResponderPage extends Component {
    static navigationOptions = {
        title: '多点触摸操作事件',
    };
    constructor(props) {
        super(props);
    }
    _panResponder = {
        panHandlers: {

        }
    }
    componentDidMount() {
        this._panResponder = PanResponder.create({
            // 要求成为响应者：
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderGrant: (evt, gestureState) => {
                // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
                console.log(evt, gestureState);
                // gestureState.{x,y} 现在会被设置为0
            },
            onPanResponderMove: (evt, gestureState) => {
                // 最近一次的移动距离为gestureState.move{X,Y}
                console.log(evt, gestureState);
                // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
                console.log(evt, gestureState);
                // 一般来说这意味着一个手势操作已经成功完成。
            },
            onPanResponderTerminate: (evt, gestureState) => {
                // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
                console.log(evt, gestureState);
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
                console.log(evt, gestureState);
                // 默认返回true。目前暂时只支持android。
                return true;
            },
        });
    }
    changePanResponder = (event, gestureState) => {
        console.log(event, gestureState);
    }
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>PanResponder</Text>
                <View style={{ width: 360, height: 400 }} onPanResponderGrant={this.changePanResponder} onPanResponderMove={this.changePanResponder}>

                </View>
            </ScrollView>
        );
    }
}
export default PanResponderPage;
const styles = StyleSheet.create({

});
