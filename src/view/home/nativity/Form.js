import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Slider, Switch } from 'react-native';
class Home extends Component {
    static navigationOptions = {
        title: 'slider滑杆',
    };
    constructor(props) {
        super(props);
        this.state = {
            value: 20,
            switch: false
        }
    }
    _onChange = (value) => {
        this.setState({
            value: value
        })
    };
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>slider滑杆</Text>
                <View>
                    <Slider style={{ width: 300, marginTop: 20 }}
                        //最小值
                        minimumValue={0}
                        // 最大值
                        maximumValue={100}
                        //当前值
                        value={this.state.value}
                        //值改变
                        onValueChange={this._onChange}
                        //
                        minimumTrackTintColor={'#1ff000'}
                        maximumTrackTintColor={'#f010ff'}
                    />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <Text>1111</Text>
                    <Switch
                        // 如果为true则禁用此组件的交互。
                        disabled={false}
                        // 开启状态时的背景颜色。
                        trackColor={{ true: "#f00", false: "#999" }}
                        // 开关上圆形按钮的背景颜色。在iOS上设置此颜色会丢失按钮的投影。
                        thumbColor="#f5f5f5"
                        ios_backgroundColor="#0f0"
                        // 当值改变的时候调用此回调函数，参数为新的值。
                        onValueChange={(data) => {
                            console.log(data);
                            this.setState({
                                switch: data
                            });
                        }}
                        // 表示此开关是否打开。默认为false（关闭状态）
                        value={this.state.switch}
                    />
                </View>
            </ScrollView>
        );
    }
}
export default Home;
const styles = StyleSheet.create({

});
