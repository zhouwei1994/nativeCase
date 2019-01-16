import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, ActivityIndicator ,Button} from 'react-native';
import Popup from '../../components/common/Popup';
import Toast from '../../components/common/Toast';
import Address from '../../components/common/Address';
class AddressSelect extends Component {
    static navigationOptions = {
        title: '地址选择器',
    };
    constructor(props) {
        super(props);
    }
    open() {
        var address = [];
        Popup.show({
            title: "请选择地址",
            popupHeight:300,
            content: (
                <Address length={3} activeColor="#FF8000" change={(res) => {
                    address = res;
                }}></Address>
            )
        }, (res) => {
                console.log(address);
                if (address.length < 3 ) {
                    Toast.add("请选择地址");
                } else {
                    Popup.hide();
                }
        });
    }
    render() {
        return (
            <ScrollView style={styles.pageStyle}>
                <Text style={{ fontSize: 30 }}>addressSelect</Text>
                <Button title="打开弹窗" onPress={this.open.bind(this)} />
            </ScrollView>
        );
    }
}
export default AddressSelect;
const styles = StyleSheet.create({
    pageStyle: {
        backgroundColor: '#f5f5f5',
    },
});
