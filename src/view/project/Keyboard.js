import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Button, Keyboard, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')

class cropImagePage extends Component {
    static navigationOptions = {
        title: '键盘事件',
    };
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    _keyboardDidShow() {
        alert('键盘打开');
    }

    _keyboardDidHide() {
        alert('键盘关闭');
    }
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>Keyboard</Text>
                <TextInput style={{ borderColor: "#ccc", borderWidth: 1 }}
                    placeholder="请输入"
                    onSubmitEditing={Keyboard.dismiss}
                />
            </ScrollView>
        );
    }
}
export default cropImagePage;
const styles = StyleSheet.create({

});
