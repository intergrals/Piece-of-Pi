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
import strings from "../res/strings";
import { Trim, Partition, NextBlock, Reset } from "./helpers";

export default class PiPage extends React.Component {
  componentDidMount() {
    Reset();
    Trim();
    //Partition(4);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            paddingLeft: 5,
            paddingRight: 5,
            fontSize: 24,
            fontWeight: "bold"
          }}
        >
          {NextBlock()}
        </Text>
        <Text
          style={{
            paddingLeft: 5,
            paddingRight: 5,
            fontSize: 24,
            fontWeight: "bold"
          }}
        >
          {NextBlock()}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
