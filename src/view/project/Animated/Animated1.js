import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Alert, Button, Animated,Easing } from 'react-native';

class FadeInView extends Component {

    constructor(props) {
        super(props);
    }
    state = {
        fadeAnim: new Animated.Value(0),  // 透明度初始值设为0
    }
    componentDidMount() {
        // 使用宽松函数让数值随时间动起来。
        Animated.timing(                  // 随时间变化而执行动画
            this.state.fadeAnim,            // 动画中的变量值
            {
                toValue: 1,                   // 透明度最终变为1，即完全不透明
                duration: 10000,              // 让动画持续一段时间
            }
        ).start();                        // 开始执行动画
    }
    render() {
        let { fadeAnim } = this.state;
        return (
            <Animated.View                 // 使用专门的可动画化的View组件
                style={{
                    ...this.props.style,
                    opacity: fadeAnim,         // 将透明度指定为动画变量值
                }}
            >
                {this.props.children}
            </Animated.View>

        );
    }
}
// 然后你就可以在组件中像使用`View`那样去使用`FadeInView`了
export default class AnimatedPage extends React.Component {
    static navigationOptions = {
        title: '动画',
    };
    state = {
        position: new Animated.ValueXY(0),  // 透明度初始值设为0
        twirl: new Animated.Value(0),  // 透明度初始值设为0
    }
    componentDidMount() {
                       // 开始执行动画
    }
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>alert弹窗</Text>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <FadeInView style={{ width: 250, height: 50, backgroundColor: 'powderblue' }}>
                        <Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>Fading in</Text>
                    </FadeInView>
                </View>

            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({

});
