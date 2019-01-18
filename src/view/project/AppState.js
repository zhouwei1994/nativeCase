import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, AppState } from 'react-native';

class AppStatePage extends Component {
    static navigationOptions = {
        title: '获取APP状态（前台、后台）',
    };
    constructor(props) {
        super(props);
    }
    state = {
        appState: AppState.currentState
    }
    componentDidMount() {
        AppState.addEventListener('change', this._handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this._handleAppStateChange);
    }

    _handleAppStateChange = (nextAppState) => {
        console.log(this.state.appState,nextAppState);
        if (nextAppState === 'active') {
            console.log('应用已经走到了前台！')
        } else {
            console.log('应用已经走到了后台！')
        }
        this.setState({ appState: nextAppState });
    }
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>AppState</Text>
                <Text>目前的状态是: {this.state.appState}</Text>
            </ScrollView>
        );
    }
}
export default AppStatePage;
const styles = StyleSheet.create({

});
