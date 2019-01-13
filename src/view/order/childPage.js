import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
class buttonPage extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('otherParam', '默认标题'),
            //右边的按钮
            headerRight: (
                <TouchableHighlight
                    onPress={() => alert('This is a button!')}
                    style={{ marginRight: 10 }}
                >
                    <Text>按钮</Text>
                </TouchableHighlight>
            ),
        };
    };
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>子页面</Text>
                <Button
                    title="更新标题"
                    onPress={() => this.props.navigation.setParams({ otherParam: '更新标题!' })}
                />
                <View style={{ marginBottom: 10 }}></View>
                <Button
                    title="返回上一页"
                    onPress={() => this.props.navigation.goBack()}
                />
                <View style={{ marginBottom: 10 }}></View>
                <Button
                    title="跳转到主菜单"
                    onPress={() => this.props.navigation.navigate('my')}
                />
            </ScrollView>
        );
    }
}
export default buttonPage;