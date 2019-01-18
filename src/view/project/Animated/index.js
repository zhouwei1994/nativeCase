import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';

import List from './../../../components/module/list';
export default class Animated extends Component {
    static navigationOptions = {
        title: 'react-native 动画',
    };
    render() {
        return (
            <ScrollView style={styles.AnimatedPage}>
                <Text style={{ fontSize: 40 }}>react-native 动画</Text>
                <List title="动画1" path="animated1"></List>
                <List title="动画2" path="animated2"></List>
                <List title="动画3" path="animated3"></List>
                <List title="动画4" path="animated4"></List>
                <List title="动画5" path="animated5"></List>
                <List title="动画6" path="animated6"></List>
            </ScrollView>
        );
    };
}
const styles = StyleSheet.create({
    AnimatedPage: {
        backgroundColor: '#f5f5f5',
    },
});
