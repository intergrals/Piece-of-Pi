import React from "react";
import {
  Button,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";
import PiPage from "./src/PiPage";
import strings from "./res/strings";

export default class App extends React.Component {
  state = {
    pi: strings.pi.slice(0, 1000),
    chunkSize: 4,
    offset: 0,
    count: 0
  };

  // reset count
  reset = () => {
    this.setState({
      count: 0
    });
  };

  // get the next chunk of pi
  getChunk = () => {
    // second digit is '1', not '.'
    piOffset = this.state.offset === 0 ? 0 : this.state.offset + 1;
    // get an additional character if offset is 0 and first time fetching
    getAdditional = this.state.offset === 0 && this.state.count === 0 ? 1 : 0;
    start = piOffset + this.state.chunkSize * this.state.count++;
    return this.state.pi.slice(
      start,
      start + this.state.chunkSize + getAdditional
    );
  };

  render() {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.androidStatusBar} />
        <PiPage getChunk={this.getChunk} style={styles.container} />
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
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
