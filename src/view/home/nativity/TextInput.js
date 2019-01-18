import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput } from 'react-native';
class Home extends Component {
    static navigationOptions = {
        title: 'TextInput输入框',
    };
    constructor(props) {
        super(props);
        this.state = { text: '默认值' };
    }

    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>普通输入框</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <Text style={{ fontSize: 30 }}>多行输入框</Text>
                <Text>文本默认会垂直居中，可设置textAlignVertical: 'top'样式来使其居顶显示。</Text>
                <TextInput
                    style={{ height: 100, borderColor: 'gray', borderWidth: 1, textAlignVertical: 'top' }}
                    multiline={true}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <Text style={{ fontSize: 30 }}>数字键盘</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    keyboardType="numeric"
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <Text style={{ fontSize: 30 }}>限制文本框长度</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    maxLength={5}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}
                />
                <Text style={{ fontSize: 30 }}>placeholder占位提示文本</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="请输入手机号"
                    placeholderTextColor="#f00"
                />
                <Text style={{ fontSize: 30 }}>设置光标颜色</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    selectionColor="#0f0"
                />
                <Text style={{ fontSize: 30 }}>密码框</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    secureTextEntry={true}
                />
                <Text style={{ fontSize: 30 }}>设置回车按钮的内容</Text>
                <Text>done 默认回车图标</Text>
                <Text>go 前往</Text>
                <Text>next 下一项</Text>
                <Text>search 搜索</Text>
                <Text>send 回车图标</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    returnKeyType="search"
                    onSubmitEditing={(val) => {
                        console.log(val);
                    }}
                />
            </ScrollView>
        );
    }
}
export default Home;
const styles = StyleSheet.create({

});
