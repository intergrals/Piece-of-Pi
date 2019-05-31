import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import Row from "./Row";

export default class PiPage extends React.Component {
  static navigationOptions = {
    title: "PiPage"
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.navigation.state.params.piObj}
          renderItem={({ item }) => <Row rowDigits={item.digits} />}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text style={styles.buttonText}>BACK</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray"
  },
  buttonStyle: {
    backgroundColor: "black",
    alignItems: "center",
    padding: 10,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  }
});
