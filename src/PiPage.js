import React from "react";
import {
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  ScrollView
} from "react-native";
import Row from "./Row";

export default class PiPage extends React.Component {
  render() {
    return (
      <FlatList
        data={[{ key: "1" }, { key: "2" }]}
        renderItem={({ item }) => <Row getChunk={this.props.getChunk} />}
      />
      //   <ScrollView style={styles.container}>
      //     <Row getChunk={this.props.getChunk} />
      //     <Row getChunk={this.props.getChunk} />
      //   </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    flexDirection: "column"
    // alignItems: "center",
    // justifyContent: "flex-start"
  }
});
