import React from "react";
import {
  Alert,
  Button,
  Image,
  ListView,
  Picker,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";

export default class Settings extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.name !== r2.name
    });
    this.state = {
      number: "pi",
      dataSource: ds.cloneWithRows(require("../res/options.json"))
    };
  }

  renderMyRow(rowData) {
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.subtitle}>{rowData.name}: </Text>
        <Picker
          selectedValue={(this.state && this.state.number) || "e"}
          style={{ height: 50, width: 100 }}
          onValueChange={newValue =>
            this.setState({
              number: newValue
            })
          }
        >
          {rowData.choices.map(item => (
            <Picker.Item key={item} label={item} value={item} />
          ))}
        </Picker>
      </View>
    );
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Settings</Text>
        <ListView
          style={styles.numberPicker}
          dataSource={this.state.dataSource}
          renderRow={this.renderMyRow.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    paddingTop: 10,
    paddingBottom: 30,
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center"
  },
  numberPicker: {
    marginLeft: "5%"
  },
  subtitle: {
    fontSize: 18,
    paddingRight: 10
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});
