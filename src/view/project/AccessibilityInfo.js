import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, AccessibilityInfo } from 'react-native';

class AccessibilityInfoPage extends Component {
    static navigationOptions = {
        title: '读屏应用',
    };
    constructor(props) {
        super(props);
        this.state = {
            screenReaderEnabled: false
        };
    }
    componentDidMount() {
        AccessibilityInfo.addEventListener(
            "change",
            this._handleScreenReaderToggled
        );
        AccessibilityInfo.fetch().then(isEnabled => {
            this.setState({
                screenReaderEnabled: isEnabled
            });
        });
    }
    componentWillUnmount() {
        AccessibilityInfo.removeEventListener(
            "change",
            this._handleScreenReaderToggled
        );
    }
    _handleScreenReaderToggled = isEnabled => {
        this.setState({
            screenReaderEnabled: isEnabled
        });
    };
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>ActivityIndicator</Text>
                <Text>在animating为 false 的时候，是否要隐藏指示器（默认为 true）</Text>
                <Text>{this.state.screenReaderEnabled ? "enabled" : "disabled"}.</Text>
            </ScrollView>
        );
    }
}
export default AccessibilityInfoPage;
const styles = StyleSheet.create({

});
