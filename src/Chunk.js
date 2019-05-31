import React from "react";
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";

export default class Chunk extends React.Component {
  render() {
    return <Text style={styles.chunk}>{this.props.digits}</Text>;
  }
}

const styles = StyleSheet.create({
  chunk: {
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 24,
    fontWeight: "bold",
    color: "white"
  }
});
