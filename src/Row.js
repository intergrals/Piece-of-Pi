import React from "react";
import { StyleSheet, View } from "react-native";
import Block from "./Block";

export default class Row extends React.Component {
  render() {
    return (
      <View style={styles.row}>
        <Block blockDigits={this.props.rowDigits[0]} />
        <Block blockDigits={this.props.rowDigits[1]} />
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
