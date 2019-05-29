import React from "react";
import { StyleSheet, View } from "react-native";
import Block from "./Block";

export default class Row extends React.Component {
  render() {
    return (
      <View style={styles.row}>
        <Block getChunk={this.props.getChunk} />
        <Block getChunk={this.props.getChunk} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
