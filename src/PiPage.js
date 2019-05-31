import React from "react";
import {
  Alert,
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  ScrollView
} from "react-native";
import Row from "./Row";

export default class PiPage extends React.Component {
  static navigationOptions = {
    title: "PiPage"
  };

  render() {
    return (
      <FlatList
        data={this.props.piObj}
        renderItem={({ item }) => <Row rowDigits={item.digits} />}
      />
      // <ScrollView style={styles.container}>
      //   <Row getChunk={this.props.getChunk} />
      //   <Row getChunk={this.props.getChunk} />
      // </ScrollView>
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
