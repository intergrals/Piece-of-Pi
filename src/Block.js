import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Chunk from "./Chunk";

export default class Block extends React.Component {
  render() {
    return (
      <View style={styles.block}>
        <Chunk getChunk={this.props.getChunk} />
        <Chunk getChunk={this.props.getChunk} />
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
