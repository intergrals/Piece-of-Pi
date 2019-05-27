import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home",
    headerRight: (
      <Button
        onPress={() => alert("Tis a Button!")}
        title="Info"
        color="blue"
      />
    )
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("otherParam", "A Nested Details Screen")
    };
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push("Details")}
        />
        <Button
          title="Go Home"
          onPress={() => this.props.navigation.popToTop()}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({ otherParam: "Updated!" })
          }
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Details",
    navigationOptions: {
      tabBarLabel: "Details!",
      tabBarIcon: ({ tintColor }) => {
        return (
          <Image
            style={{ height: 25 }}
            resizeMode="contain"
            source={require("./assets/p5i.png")}
          />
        );
      },
      tabBarColor: "red"
    }
  }
);

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home",
    headerMode: "float",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    },
    navigationOptions: {
      tabBarLabel: "Home!",
      tabBarIcon: ({ tintColor }) => {
        return (
          <Image
            style={{ width: 25, height: 25 }}
            source={require("./assets/p4i.png")}
          />
        );
      },
      tabBarColor: "yellow"
    }
  }
);

const Tabs = createMaterialBottomTabNavigator(
  { RootStack, AppNavigator },
  {
    initialRouteName: "RootStack",
    labeled: false,
    shifting: true,
    activeColor: "black",
    inactiveColor: "gray"
  }
);

const AppContainer = createAppContainer(Tabs);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
    // return (
    //   <View style={styles.container}>
    //     <Text>Open up App.js to start working on your app!</Text>
    //   </View>
    // );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
