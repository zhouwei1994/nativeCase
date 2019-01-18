import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Button, UIManager, LayoutAnimation } from 'react-native';
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

class LayoutAnimationPage extends Component {
    static navigationOptions = {
        title: '布局动画',
    };
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            width: 0,
            height: 0,
            opacity: 0
        };
    }
    openAnimation() {
        LayoutAnimation.configureNext({
            duration: 600,   //持续时间
            create: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.scaleXY,
            },
            update: {
                type: 'linear',
            }
        });
        if (this.state.show) {
            this.setState({
                show: false,
                width: 100,
                height: 100,
                opacity: 0.3
            });
        } else {
            this.setState({
                show: true,
                width: 400,
                height: 400,
                opacity: 1
            });
        }
    }
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>LayoutAnimation</Text>
                <Button title="开始动画" onPress={this.openAnimation.bind(this)} />
                <Image resizeMode="cover" style={{ width: this.state.width, height: this.state.height, opacity: this.state.opacity }} source={require('./../../images/123.jpg')} />
            </ScrollView>
        );
    }
}
export default LayoutAnimationPage;
const styles = StyleSheet.create({

});
