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
import PiPage from "./src/PiPage";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.androidStatusBar} />
        {/* <View style={styles.container}>
          <Text>Hello World</Text>
        </View> */}
        <PiPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  androidStatusBar: {
    backgroundColor: "black",
    height: StatusBar.currentHeight
  },
  rootContainer: {
    flex: 1
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
