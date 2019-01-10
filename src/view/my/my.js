import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import common from './../../style/common';
class My extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <ScrollView style={common.pageColor}>
                <Text style={{fontSize:40}}>全局状态管理方法</Text>
                <Text>token:{this.props.userInfo.token}</Text>
                <Button title="修改token" onPress={this.props.setUserInfo}></Button>
                <Text>更多数据:{this.props.other}</Text>
                <Button title="修改更多" onPress={this.props.setOther}></Button>
            </ScrollView>
        );
    }
}
let USER_INFO_TODO = {
    type: "USER_INFO_TODO",
    data: {
        token: ""
    }
};
let OTHER_TODO = {
    type: "OTHER_TODO",
    data: ""
};
let mapStateToProps = function (state) {
    return {
        userInfo: state.userInfo,
        other: state.other,
    }
}
let mapDispatchToProps = function (dispatch) {
    return {
        setUserInfo: () => {
            USER_INFO_TODO.data.token = "123";
            return dispatch(USER_INFO_TODO)
        },
        setOther: () => {
            OTHER_TODO.data = "456";
            return dispatch(OTHER_TODO)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(My);
const styles = StyleSheet.create({
    myPage: {
        backgroundColor: '#f5f5f5',
    },
});
