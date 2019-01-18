import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
class Home extends Component {
    static navigationOptions = {
        title: '全屏蒙层',
    };
    constructor(props) {
        super(props);
    }
    state = {
        modalVisible: false
    };
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>全屏蒙层</Text>
                <Modal
                    // slide 从底部滑入滑出。
                    // fade 淡入淡出。
                    // none 没有动画，直接蹦出来。
                    animationType="slide"
                    //true背景透明
                    transparent={false}
                    // true 显示 false 隐藏
                    visible={this.state.modalVisible}
                    //按返回键的时候
                    onRequestClose={() => {
                        this.setModalVisible(false);
                    }}
                >
                    <View>
                        <Text>Hello World!</Text>
                        <TouchableOpacity
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}
                        >
                            <Text style={{ height: 40, textAlign: "center", backgroundColor: "#f00", lineHeight: 40, color: "#FFF" }}>关闭模板</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
                <TouchableOpacity
                    onPress={() => {
                        this.setModalVisible(true);
                    }}
                >
                    <Text style={{ height: 40, textAlign: "center", backgroundColor: "#f00", lineHeight: 40, color: "#FFF" }}>打开模板</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
export default Home;
const styles = StyleSheet.create({

});
