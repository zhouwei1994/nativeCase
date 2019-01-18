import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Alert, Image, Animated, Easing, TouchableOpacity } from 'react-native';
export default class AnimatedPage extends React.Component {
    static navigationOptions = {
        title: '动画',
    };
    constructor(props) {
        super(props);
        this.state = {
            springValue: new Animated.Value(1),
        };
        this.springAnimated = Animated.spring(
            this.state.springValue,
            {
                toValue: 1,
                friction: 2,    //弹跳系数
                tension: 10,   // 控制速度
            }
        );
    }
    _startAnimated() {
        //动画值初始化为0
        this.state.springValue.setValue(0.1);
        //开始执行动画
        this.springAnimated.start();
    }
    render() {
        return (
            <ScrollView>
                <Animated.View
                    style={{
                        width: 360,
                        height: 300,
                        transform: [
                            { scale: this.state.springValue }
                        ]
                    }}
                >
                    <Image ref="image" style={{ width: 360, height: 300 }}
                        source={require("./../../../images/123.jpg")}>
                    </Image>
                </Animated.View>

                <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
                    <Text style={{ width: 200, height: 100, textAlign: 'center', lineHeight: 100 }}>点击开始动画</Text>
                </TouchableOpacity>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({

});
