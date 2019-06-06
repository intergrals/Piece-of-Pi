import React from "react";
import {
  Button,
  ListView,
  Picker,
  Platform,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View
} from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.name !== r2.name
    });
    this.state = {
      number: this.props.navigation.state.params.number,
      offset: (this.props.navigation.state.params.offset + 1).toString(),
      startAtTenths: this.props.navigation.state.params.startAtTenths,
      dataSource: ds.cloneWithRows(require("../res/options.json"))
    };
  }

  componentWillUnmount() {
    this.props.navigation.state.params.updateSettings(
      parseInt(this.state.offset) - 1 || 0,
      this.state.startAtTenths,
      this.state.number
    );
  }

  static navigationOptions = {
    title: "Settings"
  };

  numberPicker() {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.subtitle}>Number: </Text>
        <Picker
          selectedValue={(this.state && this.state.number) || "e"}
          style={{ height: 25, width: 100 }}
          itemStyle={{ textAlign: "center" }}
          onValueChange={newValue =>
            this.setState({
              number: newValue
            })
          }
        >
          <Picker.Item key="pi" label="pi" value="pi" />
          <Picker.Item key="tau" label="tau" value="tau" />
          <Picker.Item key="e" label="e" value="e" />
        </Picker>
      </View>
    );
  }

  startSelector() {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.subtitle}>Start at: </Text>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          value={this.state.offset}
          maxLength={3}
          onChangeText={text => {
            numText = text.replace(/[^0-9]/g, "");
            while (numText != "" && numText[0] === "0") {
              numText = numText.slice(1);
            }
            this.setState({
              offset: numText
            });
          }}
        />
      </View>
    );
  }

  startAtToggle() {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.subtitle}>First digit: </Text>
        <View style={{ flexDirection: "row" }}>
          <Text>
            {this.state.number === "pi"
              ? 3
              : this.state.number === "tau"
              ? 6
              : 2}
          </Text>
          <Switch
            value={this.state.startAtTenths}
            onValueChange={startAtTenths => this.setState({ startAtTenths })}
          />
          <Text>
            {this.state.number === "pi"
              ? 1
              : this.state.number === "tau"
              ? 2
              : 7}
          </Text>
        </View>
      </View>
    );
  }

  printExample() {
    return console.log("a");
  }

  render() {
    return (
      <View style={styles.settingsContainer}>
        <Text style={styles.title}>Settings</Text>
        <Button
          title={"Back"}
          color="black"
          onPress={() => this.props.navigation.goBack()}
        />
        <View style={{ height: 20 }} />
        {this.numberPicker()}
        <View style={styles.hRule} />
        {this.startAtToggle()}
        {this.startSelector()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  settingsContainer: {
    flex: 1,
    backgroundColor: "darkgray",
    flexDirection: "column",
    paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
  },
  title: {
    fontSize: 30,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center"
  },
  subtitle: {
    fontSize: 18,
    paddingRight: 10
  },
  rowContainer: {
    marginLeft: "5%",
    marginRight: "25%",
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  hRule: {
    marginTop: 10,
    marginLeft: "15%",
    marginRight: "15%",
    marginBottom: 10,
    height: 1,
    backgroundColor: "black"
  },
  textInput: {
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "white",
    textAlign: "center",
    width: 50
  }
});
