import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Clipboard } from 'react-native';

class ClipboardPage extends Component {
    static navigationOptions = {
        title: '剪切板',
    };
    constructor(props) {
        super(props);
        this.state = {
            screenReaderEnabled: false
        };
    }
    async getCutContent() {
        var content = await Clipboard.getString();
        alert(content);
    }
    async setCutContent (){
        await Clipboard.setString('hello world');
        alert("设置成功！");
    }
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>Clipboard</Text>
                <Button title="获取剪切板的内容" onPress={this.getCutContent.bind(this)} />
                <Button title="设置剪切板的内容" onPress={this.setCutContent.bind(this)} />
            </ScrollView>
        );
    }
}
export default ClipboardPage;
const styles = StyleSheet.create({

});
