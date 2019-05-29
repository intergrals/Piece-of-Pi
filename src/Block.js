import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Chunk from "./Chunk";

export default class Block extends React.Component {
  render() {
    return (
      <View style={styles.block}>
        <Chunk digits={this.props.blockDigits[0]} />
        <Chunk digits={this.props.blockDigits[1]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10
  }
});
