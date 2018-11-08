import * as React from "react";
import styles from "./styles";
import { Header, Button, Left, Right, Body, InputGroup, Input } from "native-base";
import { View, TextInput,Image } from "react-native";
import { Icon } from 'native-base';

class HeaderSearch extends React.Component<Props, State>  {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Header style={{ paddingLeft: 0, paddingRight: 0, backgroundColor: '#03A9F5' }}>
                <Left style={{ flex: 1 }}>
                    <Button transparent>
                        <Icon style={{ color: '#FFF' }} name="ios-menu" size={15} />
                    </Button>
                </Left>
                <Body style={{ flex: 4, backgroundColor: 'transparent' }}>


                    <View style={styles.SectionStyle}>

                       
                        <Image source={require('../../icon/search.png')} style={styles.iconStyle} />
                        <TextInput
                            style={{ flex: 1,backgroundColor: '#fff' }}
                            placeholder="Enter Your Email Here"
                            underlineColorAndroid="transparent"
                        />

                    </View>

                </Body>
                <Right style={{ flex: 1 }}>
                    <Button transparent>
                        <Icon style={{ color: '#FFF' }} name="cart" size={15} />
                    </Button>
                </Right>
            </Header>

        );
    }
}

export default HeaderSearch;