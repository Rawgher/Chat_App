import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

class HomeScreen extends Component {
  static navigationOptions = {
    title: "Welcome"
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>RawgherCo Support</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("SignIn")}
          >
            <Text style={styles.buttonText}>Get Help</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#36c4c0"
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center"
  },
  title: {
    fontSize: 30,
    fontWeight: "bold"
  },
  buttonContainer: {
    flex: 2,
    justifyContent: "center"
  },
  button: {
    width: 300,
    height: 300,
    justifyContent: "center",
    borderRadius: 150,
    borderWidth: 10,
    borderColor: "#8e3429",
    backgroundColor: "#cb3b27",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 0
  },
  buttonText: {
    color: "#fff",
    fontSize: 60,
    fontWeight: "200",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0)"
  }
});

export default HomeScreen;
