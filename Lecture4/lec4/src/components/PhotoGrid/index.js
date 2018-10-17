import React, { Component } from "react";
import {
    Dimensions,
    View,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
    Text
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
            dataImg: [],
            count : 0,
        }
    }
    componentDidMount() {
        this.loadData();
    }
    loadData() {
        for (let i = 0; i < 14; i++) {
            let link = 'https://facebook.github.io/react-native/docs/assets/favicon.png';
            let objImg = { id: i, src: link, choose: false };
            this.data.push(objImg);
        }
         this.setState({ dataImg: this.data });

    }
    click = index  => {
        let sum = this.state.count;
        this.data[index].choose = !this.data[index].choose;
        if(this.data[index].choose )
            sum ++;
        else
              sum --;
        this.setState({ dataImg: this.data,count: sum });
    }
    renderIcon(index) {
        if (index != undefined) {
            icon = require('../../image/selected-on.png');
            return (
                   <View style={styles.fullScreenSelectionIcon}>
                       <Image
                    source={icon}
                        />
                    </View>
            );
        }
        else {
            return null;
        }
    }
    renderItem(item) {
      //  console.log('abc',item.item.choose);
        let btn = item.item.choose ? this.renderIcon(item.item.id) : null;
        if(item.item.choose){
            console.log(123);
        }
        return (
            <TouchableOpacity onPress={()=>{this.click(item.item.id)}}>
                <Image
                    style={{ width: this.photoWidth, height: this.photoWidth }}
                    source={{ uri: item.item.src }}
                /> 
                {btn}
            </TouchableOpacity>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                <Text>
                    {this.state.count} photos selected 
                </Text>
            </View>
            <View style={styles.container}>
                <FlatList
                extraData={this.state.count}
                    data={this.data}
                    renderItem={(item) => this.renderItem(item)}
                    numColumns={3}
                    keyExtractor={item => item.id}
                />
            </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header : {
        backgroundColor:'yellow',
        height:40,
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