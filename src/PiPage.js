import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Block from "./Block";
import Chunk from "./Chunk";

export default class PiPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Block getChunk={this.props.getChunk} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
