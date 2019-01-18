import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Button, CameraRoll } from 'react-native';
// import ImagePicker from 'react-native-image-picker';

class CameraRollPage extends Component {
    static navigationOptions = {
        title: '访问手机相册',
    };
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            avatarSource: []
        }
    }
    _handleButtonPress = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
        })
            .then(r => {
                this.setState({ photos: r.edges });
            })
            .catch((err) => {
                //Error Loading Images
            });
    };
    enumAlbum = () => {
        CameraRoll.saveToCameraRoll("../../images/123.jpg").then(function (result) {
            alert('保存成功！地址如下：\n' + result);
        }).catch(function (error) {
            console.log(error);
            alert('保存失败！\n' + error);
        });
    }
    // openAlbum = () => {
    //     ImagePicker.showImagePicker({
    //         title: '请选择',
    //         quality: 0.8,
    //         cancelButtonTitle: '取消',
    //         takePhotoButtonTitle: '拍照',
    //         chooseFromLibraryButtonTitle: '选择相册',
    //         allowsEditing: true,
    //         noData: false,
    //         storageOptions: {
    //             skipBackup: true,
    //             path: 'images',
    //         },
    //     }, (response) => {
    //         console.log('Response = ', response);
    //         if (response.didCancel) {
    //             console.log('用户取消了图像选择器');
    //         } else if (response.error) {
    //             console.log('ImagePicker错误: ', response.error);
    //         } else {
    //             var avatarSource = this.state.avatarSource;
    //             avatarSource.push(response.uri);
    //             this.setState({
    //                 avatarSource: avatarSource,
    //             });
    //         }
    //     });
    // }
    render() {
        return (
            <ScrollView>
                <Text style={{ fontSize: 30 }}>CameraRoll</Text>
                <Button title="保存图片到相册" onPress={this.enumAlbum} />
                {/* <Button title="上传图片" onPress={this.openAlbum} /> */}
                {this.state.avatarSource.map((p, i) => {
                    return (
                        <Image
                            key={i}
                            style={{
                                width: 300,
                                height: 300,
                            }}
                            source={{ uri: p }}
                        />
                    );
                })}
                <Button title="获取相册图片" onPress={this._handleButtonPress} />
                {this.state.photos.map((p, i) => {
                    return (
                        <Image
                            key={i}
                            style={{
                                width: 200,
                                height: 200,
                            }}
                            source={{ uri: p.node.image.uri }}
                        />
                    );
                })}
            </ScrollView>
        );
    }
}
export default CameraRollPage;
const styles = StyleSheet.create({

});
