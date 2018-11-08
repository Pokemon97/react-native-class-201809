import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import { Dimensions } from "react-native";

const deviceWidth = Dimensions.get("window").width;

import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import BlankPage from "./container/BlankPageContainer";
import Sidebar from "./container/SidebarContainer";
import Summary from "./container/SummaryContainer";
const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
	},
	{
		drawerWidth: deviceWidth - 50,
		drawerPosition: "left",
		contentComponent: (props: any) => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
		Login: { screen: Login },
		Home: { screen: Home },
		BlankPage: { screen: BlankPage },
		Drawer: { screen: Drawer },
		Summary: {screen:Summary}
	},
	{
		initialRouteName: "Summary",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);
