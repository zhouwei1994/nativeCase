import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableNativeFeedback, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
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
                    <Image style={{width:20,height:20}} source={require("../../images/list_ic_more.png")}/>
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
