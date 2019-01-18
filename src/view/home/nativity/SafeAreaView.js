import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
class Home extends Component {
    static navigationOptions = {
        title: '刘海屏的安全渲染组件',
    };
    constructor(props) {
        super(props);
    }
    onPressLearnMore = () => {
        alert("你点击了我");
    }
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <ScrollView>
                    <Text style={{ fontSize: 30 }}>刘海屏的安全渲染组件</Text>
                    <Button
                        onPress={this.onPressLearnMore}
                        title="按钮"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
                    <Text>刘海屏的安全渲染组件</Text>
                    <Text>刘海屏的安全渲染组件</Text>
                    <Text>刘海屏的安全渲染组件</Text>
                    <Text>刘海屏的安全渲染组件</Text>
                    <Text>刘海屏的安全渲染组件</Text>
                    <Text>刘海屏的安全渲染组件</Text>
                    <Text>刘海屏的安全渲染组件</Text>
                    <Text>刘海屏的安全渲染组件</Text>
                    <Text>刘海屏的安全渲染组件</Text>
                    <Text>刘海屏的安全渲染组件</Text>
                    <Text>刘海屏的安全渲染组件</Text>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
export default Home;
const styles = StyleSheet.create({

});
