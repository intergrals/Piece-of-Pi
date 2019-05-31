import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <View>
        <Button
          title="Go to Options"
          onPress={() => this.props.navigation.navigate("Settings")}
        />
      </View>
    );
  }
}
