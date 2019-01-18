import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, BackHandler } from 'react-native';

class AccessibilityInfoPage extends Component {
    static navigationOptions = {
        title: '监听安卓返回键',
    };
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }
    handleBackPress = () => {
        alert("你点击了安卓返回键");
        return true;
    }
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>BackHandler</Text>
                <Text>返回值为true 是正常  为false 是关闭APP</Text>
            </ScrollView>
        );
    }
}
export default AccessibilityInfoPage;
const styles = StyleSheet.create({

});
