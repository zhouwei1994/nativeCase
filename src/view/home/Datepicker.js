import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import DatePicker from 'react-native-datepicker';
class DatePickerPage extends Component {
    static navigationOptions = {
        title: '日期/时间选择器',
    };
    constructor(props) {
        super(props);
        this.state = {
            date: "2016-05-15"
        }
    }
    render() {
        return (
            <ScrollView style={styles.pageStyle}>
                <Text style={{ fontSize: 30 }}>DatePicker</Text>
                <DatePicker
                    style={{ width: 200 }}
                    date={this.state.date}
                    mode="date"
                    androidMode="spinner"
                    placeholder="选择日期"
                    format="YYYY-MM-DD"
                    confirmBtnText="确定"
                    cancelBtnText="取消"
                    showIcon={false}
                    minDate="2018-05-01"
                    maxDate="2019-06-01"
                    customStyles={{
                        dateIcon: {
                        },
                        dateInput: {
                            
                        }
                    }}
                    onDateChange={(date) => { this.setState({ date: date }) }}
                />
                <DatePicker
                    style={{ width: 200 }}
                    date={this.state.date}
                    mode="datetime"
                    placeholder="选择日期/时间"
                    androidMode="spinner"
                    format="YYYY-MM-DD HH:mm"
                    confirmBtnText="确定"
                    cancelBtnText="取消"
                    minDate="2018-05-01"
                    maxDate="2019-06-01"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                    }}
                    minuteInterval={10}
                    onDateChange={(date) => { this.setState({ date: date }) }}
                />
            </ScrollView>
        );
    }
}
export default DatePickerPage;
const styles = StyleSheet.create({
    pageStyle: {
        backgroundColor: '#f5f5f5',
    },
});