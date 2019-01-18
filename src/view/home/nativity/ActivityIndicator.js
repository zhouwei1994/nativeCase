import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
class Home extends Component {
    static navigationOptions = {
        title: '加载动画',
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ScrollView>
                <Text style={{fontSize:30}}>ActivityIndicator</Text>
                <ActivityIndicator size="large" color="#0000ff" />
                <ActivityIndicator size="small" color="#00ff00" />
                <ActivityIndicator size="large" color="#0000ff" animating={false} />
                <ActivityIndicator size="small" color="#00ff00" />
                <Text>在animating为 false 的时候，是否要隐藏指示器（默认为 true）</Text>
            </ScrollView>
        );
    }
}
export default Home;
const styles = StyleSheet.create({

});
