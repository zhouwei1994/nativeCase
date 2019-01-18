import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Picker } from 'react-native';
class Home extends Component {
    static navigationOptions = {
        title: 'Picker弹窗',
    };
    constructor(props) {
        super(props);
        this.state = {
            language:false
        };
    }

    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>Picker弹窗</Text>
                <Picker
                    selectedValue={this.state.language}
                    style={{ height: 50, width: 100 }}
                    prompt="性别"
                    onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                    <Picker.Item label="男" value="1" />
                    <Picker.Item label="女" value="2" />
                </Picker>
            </ScrollView>
        );
    }
}
export default Home;
const styles = StyleSheet.create({

});
