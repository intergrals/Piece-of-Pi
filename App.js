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
import strings from "./res/strings";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Settings: Settings,
    PiPage: PiPage
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  state = {
    number: "pi",
    pi: strings.pi.slice(0, 1000),
    piObj: [],
    chunkSize: 4,
    offset: 0,
    startAtTenths: false,
    count: 0
  };

  componentDidMount() {
    this.init();
  }

  updateSettings = (offset, startAtTenths, number) => {
    this.setState({
      offset,
      startAtTenths,
      number
    });
  };

  init = () => {
    // startOffset = this.state.offset === 0 ? 0: this.state.offset + 1;
    // piCopy = this.state.pi.slice(startOffset);
    piObj = [];
    // turn pi into obj chunks
    while (1) {
      rowDigits = [];
      for (i = 0; i < 2; i++) {
        blockDigits = [];
        for (j = 0; j < 2; j++) {
          piChunk = this.getChunk();
          if (piChunk === "") break;
          blockDigits.push(piChunk);
        }
        if (piChunk === "") break;
        rowDigits.push(blockDigits);
      }
      if (piChunk === "") break;

      piObj.push({
        key: this.state.count.toString(),
        digits: rowDigits
      });
    }

    this.setState({
      piObj
    });
  };

  // reset count
  reset = () => {
    this.setState({
      count: 0
    });
  };

  // get the next chunk of pi
  getChunk = () => {
    // special case if getting 3.14... block (get additional digit to compensate for '.')
    if (this.state.count === 0 && this.state.offset === 0) {
      this.state.count++;
      return this.state.pi.slice(0, this.state.chunkSize + 1);
    }

    start = 1 + this.state.chunkSize * this.state.count++;
    return this.state.pi.slice(start, start + this.state.chunkSize);
  };

  render() {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.androidStatusBar} />
        <AppContainer />
        {/* <Settings
          updateSettings={this.updateSettings}
          number={this.state.number}
          offset={this.state.offset}
          startAtTenths={this.state.startAtTenths}
        /> */}
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
