import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions, TouchableHighlight } from 'react-native';
import $http from './../../config/fetch';
const { width, height } = Dimensions.get('window');
var scrollViewRef;
class Address extends Component {
    static defaultProps = {
        value: [],//默认数据
        length: 3,//地址选择的长度，从省开始
        activeColor: "#F00" //选中的颜色
    };
    constructor(props) {
        super(props);
        this.state = {
            //选出的值
            addressVal: [],
            //当前选择
            addressIndex: 0,
            //列表的值
            addressList: []
        };
        this.SelectListAddress = this.SelectListAddress.bind(this);
        this.getRegion = this.getRegion.bind(this);
        this.selectType = this.selectType.bind(this);
    }
    //加载完成的生命钩子
    componentDidMount() {
        this.setState({
            addressVal: this.props.value
        });
        this.getRegion(0);
    }
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
    }
    //获取地址信息
    getRegion(uid) {
        const _this = this;
        $http.get('kemean/aid/region', { pid: uid })
            .then(function (response) {
                if (response.length > 0) {
                    _this.setState({
                        addressList: response
                    });
                    setTimeout(() => {
                        scrollViewRef.scrollTo({ x: 0, y: 0, animated: true });
                    }, 50);

                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    //选择地址列表
    SelectListAddress(item) {
        var addressVal = this.state.addressVal;
        var addressIndex = this.state.addressIndex;
        if (this.state.addressIndex === 0) {
            addressVal = [];
        } else {
            addressVal.splice(this.state.addressIndex, addressVal.length - 1);
        }
        addressVal.push(item);
        if (addressVal.length < this.props.length) {
            this.getRegion(item.objId);
            addressIndex++;
        }
        this.setState({
            addressVal: addressVal,
            addressIndex: addressIndex
        });
        this.props.change && this.props.change(addressVal);
    }
    //选择地址类型
    selectType(index) {
        var addressVal = this.state.addressVal;
        var len = addressVal.length;
        if (index == 0) {
            this.getRegion(0);
        } else {
            this.getRegion(addressVal[index - 1].objId);
        }
        this.setState({
            addressIndex: index
        });
    }
    render() {
        //选择的值
        var addressVal = this.state.addressVal.map((item, index) => (
            <TouchableHighlight key={index} underlayColor="#f1f1f1" onPress={() => {
                this.selectType(index);
            }}>
                <Text style={{
                    marginLeft: 0,
                    ...styles.AddressItem,
                    color: this.state.addressIndex === index ? this.props.activeColor : "#333"
                }}>{item.name}</Text>
            </TouchableHighlight>
        ));
        //请选择操作
        var pleaseChoose = () => {
            var len = this.state.addressVal.length;
            if (len < this.props.length) {
                return (<TouchableHighlight underlayColor="#f1f1f1" onPress={() => {
                    this.selectType(len);
                }}>
                    <Text style={{
                        marginLeft: 0,
                        ...styles.AddressItem,
                        color: this.state.addressIndex === len ? this.props.activeColor : "#333"
                    }}>请选择</Text>
                </TouchableHighlight>)
            } else {
                return undefined;
            }
        }
        return (
            <View style={styles.AddressPage}>
                <View style={{
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderColor: "#eee",
                    borderBottomWidth: 1,
                    flexDirection: "row",
                    height: 40
                }}>
                    {addressVal}
                    {pleaseChoose()}
                </View>
                <View style={{ height: 235 }}>
                    <ScrollView ref={scrollView => {
                        if (scrollView !== null) {
                            scrollViewRef = scrollView;
                        }
                    }}>
                        {
                            this.state.addressList.map((item, index) => {
                                return <TouchableHighlight key={index} underlayColor="#f1f1f1" onPress={() => {
                                    this.SelectListAddress(item);
                                }}>
                                    <Text style={{
                                        ...styles.SelectItem,
                                        color: this.state.addressVal.length > this.state.addressIndex && item.name === this.state.addressVal[this.state.addressIndex].name ? this.props.activeColor : "#333"
                                    }}>{item.name}</Text>
                                </TouchableHighlight>

                            })
                        }
                    </ScrollView>
                </View>
            </View>
        );
    }
}
export default Address;
const styles = StyleSheet.create({
    AddressPage: {
        width: width,
        height: 300,
    },
    AddressItem: {
        paddingLeft: 5,
        paddingRight: 5,
        height: 40,
        lineHeight: 40,
        fontSize: 16
    },
    SelectItem: {
        paddingLeft: 15,
        paddingRight: 15,
        height: 40,
        lineHeight: 40
    }
});
