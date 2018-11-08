import * as React from "react";
import { View, TextInput } from "react-native";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body } from "native-base";
import styles from "./styles";
class Summary extends React.Component {
    constructor(props) {
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
        return (React.createElement(Container, { style: styles.container },
            React.createElement(Header, null,
                React.createElement(Left, null,
                    React.createElement(Button, { transparent: true, onPress: () => this.props.navigation.goBack() },
                        React.createElement(Icon, { name: "ios-arrow-back" }))),
                React.createElement(Body, { style: { flex: 3 } },
                    React.createElement(Title, null, param ? param.name.item : "Count")),
                React.createElement(Right, null)),
            React.createElement(Content, { padder: true },
                React.createElement(View, { style: { flex: 1, flexDirection: "row" } },
                    React.createElement(Button, { success: true, onPress: this._add },
                        React.createElement(Text, null, "Add")),
                    React.createElement(TextInput, { style: { borderColor: 'black' } }, this.props.value),
                    React.createElement(Button, { success: true, onPress: this._sub },
                        React.createElement(Text, null, "Sub"))))));
    }
}
export default Summary;
//# sourceMappingURL=index.js.map