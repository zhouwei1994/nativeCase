import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ScrollView>
                <Text style={{fontSize:30}}>react-native页面</Text>
            </ScrollView>
        );
    }
}
export default Home;
const styles = StyleSheet.create({

});
