import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
class LoadView extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.loadError) {
            return (
                <View style={styles.LoadView}>
                    <Text>{this.props.loadError}</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.LoadView}>
                    <ActivityIndicator size="small" color="#000" />
                    <Text style={{ marginLeft: 10 }}>正在加载...</Text>
                </View>
            );
        }
        
    }
}
export default LoadView;
const styles = StyleSheet.create({
    LoadView: {
        flex: 1,
        flexDirection: "row",
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
});
