import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Alert, Image, Animated, Easing, TouchableOpacity } from 'react-native';
export default class AnimatedPage extends React.Component {
    static navigationOptions = {
        title: '动画',
    };
    constructor(props) {
        super(props);
        this.state = {
            decayValue: new Animated.ValueXY({ x: 0, y: 0 }),
        };

        this.decayAnimated = Animated.decay(
            this.state.decayValue,
            {
                velocity: 3,       // 起始速度，必填
                deceleration: 0.1,  // 速度衰减比例，默认为0.997
            }
        );
    }
    _startAnimated() {
        this.decayAnimated.start();
    }
    render() {
        return (
            <ScrollView>
                <Animated.View
                    style={{
                        width: 100,
                        height: 150,
                        transform: [
                            { translateX: this.state.decayValue.x }, // x轴移动
                            { translateY: this.state.decayValue.y }, // y轴移动
                        ]
                    }}
                >
                    <Image ref="image" style={{ width: 100, height: 150 }}
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
