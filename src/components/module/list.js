import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableNativeFeedback, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo';
class List extends Component {
    constructor(props) {
        super(props);
    }
    pageJump = () => {
        this.props.navigation.navigate(this.props.path || "home")
    }
    render() {
        return (
            <TouchableNativeFeedback style={{ flex: 1 }} onPress={this.pageJump}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={styles.list}>
                    <Text style={{ fontSize: 18 }}>{this.props.title}</Text>
                    <Icon style={{fontSize:20}} name="chevron-thin-right"></Icon>
                </View>
            </TouchableNativeFeedback>
        );
    }
}
export default withNavigation(List);
const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: "space-between",
        padding: 15,
        flexDirection: "row",
        backgroundColor: "#FFF",
        marginBottom: 1
    },
});
