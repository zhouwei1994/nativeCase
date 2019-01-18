import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, TouchableHighlight, Image, TouchableNativeFeedback,TouchableOpacity } from 'react-native';
class Home extends Component {
    static navigationOptions = {
        title: '按钮事件',
    };
    constructor(props) {
        super(props);
    }
    onPressLearnMore = () => {
        alert("你点击了我");
    }
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>Button按钮</Text>
                <Button
                    onPress={this.onPressLearnMore}
                    title="按钮"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Text>onPress：用户点击此按钮时所调用的处理函数</Text>
                <Text>title：按钮内显示的文本</Text>
                <Text>accessibilityLabel：用于给残障人士显示的文本（比如读屏应用可能会读取这一内容）</Text>
                <Text>color：文本的颜色(iOS)，或是按钮的背景色(Android)</Text>
                <Text>disabled：设置为 true 时此按钮将不可点击</Text>
                <Text style={{ fontSize: 30 }}>TouchableHighlight按钮事件</Text>
                <TouchableHighlight onPress={this.onPressLearnMore} style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image
                        style={{ width: 150, height: 100 }}
                        resizeMode="cover"
                        source={require('./../../../images/123.jpg')}
                    />
                </TouchableHighlight>
                <Text style={{ fontSize: 30 }}>波浪按钮事件</Text>
                <TouchableNativeFeedback
                    onPress={() => {
                        console.log(123);
                    }}
                    style={{ justifyContent: "center", alignItems: "center" }}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <View>
                        <Image
                            style={{ width: 150, height: 100 }}
                            resizeMode="cover"
                            source={require('./../../../images/123.jpg')}
                        />
                    </View>
                </TouchableNativeFeedback>
                <Text style={{ fontSize: 30 }}>透明变化按钮事件</Text>
                <TouchableOpacity
                    onPress={() => {
                        console.log(123);
                    }}
                    style={{ justifyContent: "center", alignItems: "center" }}>
                    <View>
                        <Image
                            style={{ width: 150, height: 100 }}
                            resizeMode="cover"
                            source={require('./../../../images/123.jpg')}
                        />
                    </View>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
export default Home;
const styles = StyleSheet.create({

});
