import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
class Home extends Component {
    static navigationOptions = {
        title: '阴影样式属性',
    };
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>Shadow</Text>
                <Image style={{
                    width: 300,
                    height: 400,
                    shadowColor: "#f00",
                    shadowOffset: { width: 10, height: 10 },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                }} source={require("./../../../images/123.jpg")} />
                <Text>在animating为 false 的时候，是否要隐藏指示器（默认为 true）</Text>
            </ScrollView>
        );
    }
}
export default Home;
const styles = StyleSheet.create({

});
