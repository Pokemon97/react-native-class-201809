import React, { Component } from "react";
import {
    Dimensions,
    ListView,
    TouchableHighlight,
    View,
    StyleSheet,
    ViewPropTypes,
    FlatList,
    Image,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';
export default class PhotGrid extends React.Component {
    constructor(props) {
        super(props);
        this.data = [];
        this.ITEM_MARGIN = 2;
        this.itemPerRow = 3;
        this.screenWidth = Dimensions.get('window').width - 0; //offset
        this.photoWidth = (this.screenWidth / this.itemPerRow) - (this.ITEM_MARGIN * 2);
        this.state = {
            dataImg: []
        }
    }
    componentDidMount() {
        this.loadData();
    }
    loadData() {
        for (let i = 0; i < 14; i++) {
            let link = 'https://facebook.github.io/react-native/docs/assets/favicon.png';
            let objImg = { id: i, src: link, choose: false };
            //  console.log(objImg);
            this.data.push(objImg);
        }
        // this.setState({ dataImg: this.data });

    }
    _toggleSelection(index) {
        console.log('_toggleSelection', index);
        this.data[index].choose = !this.data[index].choose;
        this.setState({ dataImg: this.data });
    }
    _renderSelectionButton(index) {

        if (index != undefined) {
            // console.log('index', index);
            let icon = require('../../image/selected-off.png');
            if (this.data[index].choose) {
                icon = require('../../image/selected-on.png');
            }

            buttonImage = (

                <Image
                    style={styles.fullScreenSelectionIcon}
                    source={icon}
                />

            );
            return (
                <TouchableWithoutFeedback  onPress={this._toggleSelection(index)} activeOpacity={1}>
                   
                        {buttonImage}
                   
                </TouchableWithoutFeedback>
            );
        }
        else {
            return null;
        }
    }
    renderItem(item) {
        // console.log('render', item.item);
        let img = require('../../image/test_img.jpg');
        let btn = this._renderSelectionButton(item.item.id);
       // console.log(btn);
        return (
            <View style={styles.item}>
                 <Image
                    style={{ width: this.photoWidth, height: this.photoWidth }}
                    source={{ uri: item.item.src }}
                /> 
                {btn}
            </View>
        );
    }
    render() {
        let imgs = this.state.dataImg;
        return (
            <View style={styles.container}>
                {/* <ListView
            contentContainerStyle={styles.list}
            // dataSource={dataSource}
            initialListSize={21}
            pageSize={3}
            scrollRenderAheadDistance={500}
            renderRow={this._renderRow}
            removeClippedSubviews={false}
        /> */}
                <FlatList
                    data={this.data}
                    renderItem={(item) => this.renderItem(item)}
                    numColumns={3}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    image: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    thumbnailSelectionIcon: {
        position: 'absolute',
        top: 8,
        right: 8,
    },
    fullScreenSelectionIcon: {
        position: 'absolute',
        top: 20,
        right: 16,
    },
});