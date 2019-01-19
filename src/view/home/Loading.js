import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import Loading from '../../components/common/Loading';
class LoadingPage extends Component {
    static navigationOptions = {
        title: '请求加载',
    };
    constructor(props) {
        super(props);
    }
    open() {
        //显示加载
        Loading.show();
        this.clear = setTimeout(() => {
            //关闭Loading
            Loading.hide();
        },2000)

    }
    componentWillUnmount() {
        this.clear && clearTimeout(this.clear);
    }
    render() {
        return (
            <ScrollView style={styles.pageStyle}>
                <Text style={{ fontSize: 30 }}>Loading</Text>
                <Button title="显示加载" onPress={this.open.bind(this)} />
            </ScrollView>
        );
    }
}
export default LoadingPage;
const styles = StyleSheet.create({
    pageStyle: {
        backgroundColor: '#f5f5f5',
    },
});
