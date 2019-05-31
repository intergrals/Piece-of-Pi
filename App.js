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
        <View style={styles.androidStatusBar} />
        <AppContainer />
        {/* <PiPage style={styles.container} piObj={this.state.piObj} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  androidStatusBar: {
    backgroundColor: "black",
    height: StatusBar.currentHeight
  },
  rootContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    backgroundColor: "#ff0000",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
