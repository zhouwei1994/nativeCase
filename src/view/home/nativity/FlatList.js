import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, Button, RefreshControl } from 'react-native';
import LoadView from '../../../components/common/LoadView';
class Home extends Component {
    static navigationOptions = {
        title: '高性能列表组件',
    };
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            dataList: []
        };
        this.addData = this.addData.bind(this);
    }
    _onRefresh = () => {
        this.setState({ refreshing: true });
        setTimeout(() => {
            this.setState({ refreshing: false });
        }, 3000);
    }
    _onload = () => {
        setTimeout(() => {
            this.addData();
        }, 3000);
    }
    addData() {
        var data = this.state.dataList;
        var len = this.state.dataList.length;
        for (var i = len; i < len + 99; i++) {
            data.push({ key: i, title: i + '' });
        }
        this.setState({
            dataList: data
        });
    }
    componentDidMount() {
        this.addData();
    }
    render() {

        return (
            <FlatList
                // 尾部组件
                ListFooterComponent={this._footer}
                // 行与行之间的分隔线组件
                ItemSeparatorComponent={this._separator}
                //列表
                renderItem={this._renderItem}
                //下拉刷新事件
                onRefresh={this._onRefresh}
                //在等待加载新数据时将此属性设为 true，列表就会显示出一个正在加载的符号。
                refreshing={this.state.refreshing}
                // 决定当距离内容最底部还有多远时触发onEndReached回调
                onEndReachedThreshold={5}
                //当内容滚动到底部的时候执行这个方法
                onEndReached={this._onload}
                //多列布局只能在非水平模式下使用
                numColumns={3}
                // 如果设置了多列布局（即将numColumns值设为大于 1 的整数），则可以额外指定此样式作用在每行容器上
                columnWrapperStyle={{ borderWidth: 2, borderColor: '#0f0'}}
                // 设置为 true 则变为水平布局模式。
                horizontal={false}
                //数据
                data={this.state.dataList}
            />
        );
    }
    _renderItem = (item) => {
        var txt = '第' + item.index + '个' ;
        var bgColor = item.index % 2 == 0 ? 'red' : 'blue';
        return <Text style={[{ flex: 1, height: 100, backgroundColor: bgColor }, styles.txt]}>{txt}</Text>
    }
    _footer = () => {
        return <LoadView loadError=""></LoadView>;
    }
    //分割器
    _separator = () => {
        return <View style={{ height: 2, backgroundColor: 'yellow' }} />;
    }
}
export default Home;
const styles = StyleSheet.create({
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    }
});
