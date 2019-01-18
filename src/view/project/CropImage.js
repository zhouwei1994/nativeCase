import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Button, ImageEditor, Dimensions } from 'react-native';
var resolveAssetSource = require('resolveAssetSource');
const { width, height } = Dimensions.get('window')

class cropImagePage extends Component {
    static navigationOptions = {
        title: '图片剪切',
    };
    constructor(props) {
        super(props);
        this.state = {
            url: require('./../../images/123.jpg')
        };
    }
    async getCropImage() {
        const source = await resolveAssetSource(require('./../../images/123.jpg'));
        ImageEditor.cropImage(source.uri,
            {
                offset: { x: 150, y: 350 },
                size: { width: 300, height: 300 },
                displaySize: { width: 400, height: 400 },
                resizeMode: 'contain'
            }, (successURI) => {
                console.log(successURI); 
                // console.log(require(successURI));
                this.setState({
                    url: {uri:successURI}
                });
            },
            (error) => {
                console.log('cropImage,', error)
            }
        )
    }
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>cropImage</Text>
                <Button title="图片剪切" onPress={this.getCropImage.bind(this)} />
                <Image style={{ width: width,height:width }} resizeMode="cover" source={this.state.url}></Image>
            </ScrollView>
        );
    }
}
export default cropImagePage;
const styles = StyleSheet.create({

});
