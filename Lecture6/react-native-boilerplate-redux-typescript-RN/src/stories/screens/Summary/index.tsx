import * as React from "react";
import { View, TextInput }   from "react-native";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";

import styles from "./styles";
export interface Props {
    navigation: any;
    actions: any;
    value: any;
}

export interface State { }
class Summary extends React.Component<Props, State> {
    constructor(props){
        super(props);
        this._add = this._add.bind(this);
        this._sub = this._sub.bind(this);
    }
    _add() {
        this.props.actions.add();
    }
    _sub() {
        this.props.actions.sub();
    }
    render() {
        console.log(this.props);
        const param = this.props.navigation.state.params;
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="ios-arrow-back" />
                        </Button>
                    </Left>

                    <Body style={{ flex: 3 }}>
                        <Title>{param ? param.name.item : "Count"}</Title>
                    </Body>

                    <Right />
                </Header>

                <Content padder>
                    <View style={{ flex: 1,flexDirection:"row" }}>
                        <Button success onPress={this._add}><Text>Add</Text></Button>

                        <TextInput style={{borderColor:'black'}}>{this.props.value}</TextInput>

                        <Button success onPress={this._sub}><Text>Sub</Text></Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default Summary;
