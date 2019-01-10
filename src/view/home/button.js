import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
class Button extends Component {
    static navigationOptions = {
        title: "子页面",
        //右边的按钮
        headerRight: (
            <Button
                onPress={() => alert('This is a button!')}
                title="按钮"
                color="#0f0"
                style={{ marginRight: 10 }}
            />
        ),
    };
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <Text style={{fontSize:30}}>子页面</Text>
            </ScrollView>
        );
    }
}
export default Button;