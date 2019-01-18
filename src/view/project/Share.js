import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Share } from 'react-native';

class SharePage extends Component {
    static navigationOptions = {
        title: '分享',
    };
    constructor(props) {
        super(props);
        this.state = {
            screenReaderEnabled: false
        };
    }
    async onShare() {
        Share.share({
            title: "分享的标题",
            message: '我的练习APP分享给你的',
            url: "https://www.baidu.com/"
        }, {
            dialogTitle:"分享的标题",
        }).then(res => {
            if (res.action === Share.sharedAction) {
                if (res.activityType) {
                    console.log(res);
                    // 与activity.activityType的活动类型共享
                } else {
                    // 共享
                    console.log(res);
                }
            } else if (res.action === Share.dismissedAction) {
                // 驳回
                console.log(res);
            }
        });
    }
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>Share</Text>
                <Button title="分享" onPress={this.onShare.bind(this)} />
            </ScrollView>
        );
    }
}
export default SharePage;
const styles = StyleSheet.create({

});
