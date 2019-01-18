import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Linking } from 'react-native';

class LinkingPage extends Component {
    static navigationOptions = {
        title: '唤起其他APP/其他APP唤起我的链接',
    };
    constructor(props) {
        super(props);
        this.state = {
            screenReaderEnabled: false
        };
    }
    componentDidMount() {
        Linking.getInitialURL().then((url) => {
            console.log('Initial url is: ' + url);
        }).catch(err => {
            console.error('An error occurred', err)
        });
    }
    openApp() {
        var url = "tmall://page.tm/shop";
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                console.log('Can\'t handle url: ' + url);
            } else {
                return Linking.openURL(url);
            }
        }).catch(err => console.error('An error occurred', err));
    }
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>Linking</Text>
                <Button title="唤起天猫APP" onPress={this.openApp.bind(this)} />
            </ScrollView>
        );
    }
}
export default LinkingPage;
const styles = StyleSheet.create({

});
