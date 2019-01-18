import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, RefreshControl } from 'react-native';
class Home extends Component {
    static navigationOptions = {
        title: 'ScrollView下拉刷新',
    };
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }
    _onRefresh = () => {
        this.setState({ refreshing: true });
        setTimeout(() => {
            this.setState({ refreshing: false });
        }, 3000);
    }
    render() {
        return (
            <ScrollView
               
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                        title="下拉刷新"
                    />
                }
            >
                <Text style={{ fontSize: 30 }}>ScrollView下拉刷新</Text>
                <Text>onRefresh 视图开始刷新的时候调用</Text>
                <Text>colors 指定至少一种颜色用来绘制刷新指示器。</Text>
                <Text>enabled 指定是否要启用刷新指示器。</Text>
                <Text>progressBackgroundColor 指定刷新指示器的背景色。</Text>
                <Text>progressViewOffset 指定刷新指示器的垂直起始位置(top offset)。</Text>
                <Text>size 指定刷新指示器的大小，具体数值可参阅RefreshControl.SIZE.</Text>
                <Text>tintColor 指定刷新指示器的颜色。</Text>
                <Text>title 指定刷新指示器下显示的文字。</Text>
                <Text>titleColor 指定刷新指示器下显示的文字的颜色。</Text>
            </ScrollView >
        );
    }
}
export default Home;
const styles = StyleSheet.create({

});
