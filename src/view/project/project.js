import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import List from './../../components/module/list';
export default class Project extends Component {
    render() {
        return (
            <ScrollView style={styles.projectPage}>
                <Text style={{ fontSize: 40 }}>react-native API</Text>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    projectPage: {
        backgroundColor: '#f5f5f5',
    },
});
