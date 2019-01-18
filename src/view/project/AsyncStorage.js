import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, AsyncStorage, TextInput } from 'react-native';

class AsyncStoragePage extends Component {
    static navigationOptions = {
        title: '数据储存',
    };
    constructor(props) {
        super(props);
    }
    state = {
        value: "",
        storageValue: ""
    }
    _storeData = async () => {
        try {
            if (this.state.value) {
                await AsyncStorage.setItem('value', this.state.value);
                alert("储存成功");
            } else {
                alert("请输入");
            }
        } catch (error) {
            console.log("储存出错");
        }
    }
    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('value');
            if (value !== null) {
                this.setState({ storageValue: value });
                console.log(value);
                alert("读取成功");
            }
        } catch (error) {
            console.log("读取出错");
        }
    }
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>AsyncStorage</Text>
                <TextInput
                    style={{ borderColor: "#ccc", borderWidth: 1 }}
                    placeholder="请输入"
                    onChangeText={(text) => {
                        this.setState({ value: text });
                    }} />
                <Text>储存值：{this.state.value}</Text>
                <Button title="储存数据" onPress={this._storeData} />
                <Text>读取值：{this.state.storageValue}</Text>
                <Button title="读取数据" onPress={this._retrieveData} />
            </ScrollView>
        );
    }
}
export default AsyncStoragePage;
const styles = StyleSheet.create({

});
