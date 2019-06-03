import React from "react";
import {
  Button,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "./src/HomeScreen";
import PiPage from "./src/PiPage";
import Settings from "./src/Settings.js";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Settings: Settings,
    PiPage: PiPage
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.rootContainer}>
        <AppContainer />
        {/* <PiPage style={styles.container} piObj={this.state.piObj} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#ff0000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
