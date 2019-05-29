import React from "react";
import {
  Button,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import PiPage from "./src/PiPage";
import strings from "./res/strings";

export default class App extends React.Component {
  state = {
    pi: strings.pi.slice(0, 1000),
    piObj: [],
    chunkSize: 4,
    offset: 0,
    count: 0
  };

  componentDidMount() {
    this.init();
  }

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
        <PiPage style={styles.container} piObj={this.state.piObj} />
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
