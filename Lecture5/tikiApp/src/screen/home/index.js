import Header from '../../components/header'
import * as React from "react";
import styles from "./styles";
import { View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends React.Component<Props, State>  {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <View>
            <Header />
        </View>);
    }
}
export default Home;
