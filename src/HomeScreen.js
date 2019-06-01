import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import strings from "../res/strings";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

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
    this.setState(
      {
        offset,
        startAtTenths,
        number,
        pi: strings[number].slice(0, 1000)
      },
      () => {
        this.reset();
        this.init();
      }
    );
  };

  init = () => {
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
    // Start this far in pi
    offset = this.state.offset === 0 ? 0 : this.state.offset;
    if (this.state.startAtTenths) offset += 2;

    // special case if getting 3.14... block (get additional digit to compensate for '.')
    if (this.state.count === 0 && this.state.offset === 0) {
      this.state.count++;
      startAtTenths = this.state.startAtTenths ? 0 : 1;
      return this.state.pi.slice(
        offset,
        this.state.chunkSize + offset + startAtTenths
      );
    }

    startAtTenths = this.state.startAtTenths ? 0 : 1;

    start = this.state.chunkSize * this.state.count++ + offset + startAtTenths;
    return this.state.pi.slice(start, start + this.state.chunkSize);
  };

  render() {
    return (
      <View style={{ backgroundColor: "gray", flex: 1 }}>
        {/* Start Button */}
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            this.props.navigation.navigate("PiPage", {
              piObj: this.state.piObj
            })
          }
        >
          <Text style={styles.buttonText}>START</Text>
        </TouchableOpacity>
        {/* Settings Button */}
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            this.props.navigation.navigate("Settings", {
              updateSettings: this.updateSettings,
              number: this.state.number,
              offset: this.state.offset,
              startAtTenths: this.state.startAtTenths
            })
          }
        >
          <Text style={styles.buttonText}>SETTINGS</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  buttonStyle: {
    // width: 100,
    // height: 50,
    backgroundColor: "aqua",
    alignItems: "center",
    padding: 10,
    marginTop: "10%",
    marginLeft: "30%",
    marginRight: "30%",
    borderRadius: 5
  },
  buttonText: {
    color: "black",
    fontWeight: "bold"
  }
});
