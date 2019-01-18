import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Alert,Image, Animated, Easing, TouchableOpacity } from 'react-native';

export default class AnimatedPage extends React.Component {
    static navigationOptions = {
        title: '动画',
    };
    constructor(props) {
        super(props);
        this.state = {
            animatedValue: new Animated.Value(0),
        }
        this.rotateAnimated = Animated.timing(
            this.state.animatedValue,
            {
                toValue: 1,
                duration: 3000,
                easing: Easing.in,
            }
        );
    }
    _startAnimated() {
        //动画值初始化为0
        this.state.animatedValue.setValue(0);
        //开始执行动画（执行完重复执行）
        this.rotateAnimated.start(() => this._startAnimated());
    }
    render() {
        const rotateZ = this.state.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        const opacity = this.state.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 1, 0]
        });

        const rotateX = this.state.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '180deg', '0deg']
        });

        const textSize = this.state.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [18, 32, 18]
        });

        const marginLeft = this.state.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 200, 0]
        });
        return (
            <ScrollView>
                <Animated.View
                    style={{
                        marginTop: 10,
                        width: 100,
                        height: 100,
                        transform: [
                            { rotateZ: rotateZ },
                        ]
                    }}
                >
                    <Image style={{ width: 100, height: 100 }}
                        source={require("./../../../images/123.jpg")}>
                    </Image>
                </Animated.View>

                <Animated.View
                    style={{
                        marginTop: 10,
                        width: 100,
                        height: 100,
                        opacity: opacity,
                        backgroundColor: 'red',
                    }}
                />

                <Animated.Text
                    style={{
                        marginTop: 10,
                        width: 100,
                        fontSize: 18,
                        color: 'white',
                        backgroundColor: 'red',
                        transform: [
                            { rotateX: rotateX },
                        ]
                    }}
                >
                    窗外风好大，我没有穿褂。
                </Animated.Text>

                <Animated.Text
                    style={{
                        marginTop: 10,
                        height: 100,
                        lineHeight: 100,
                        fontSize: textSize,
                        color: 'red'
                    }}
                >
                    IAMCJ嘿嘿嘿
                </Animated.Text>

                <Animated.View
                    style={{
                        marginTop: 10,
                        width: 100,
                        height: 100,
                        marginLeft: marginLeft,
                        backgroundColor: 'red',
                    }}
                />

                <TouchableOpacity style={styles.touchStyle} onPress={this._startAnimated.bind(this)}>
                    <Text style={{ width: 200, height: 100, textAlign: 'center', lineHeight: 100 }}>点击开始动画</Text>
                </TouchableOpacity>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({

});
