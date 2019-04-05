import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

class SignInScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#68b8db",
      shadowColor: "transparent",
      borderBottomWidth: 0,
      elevation: 0,
      shadowRadius: 0
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Name:</Text>
          <TextInput style={styles.textBox} />

          <Text style={styles.label}>Account Number:</Text>
          <TextInput style={styles.textBox} keyboardType="numeric" />

          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Go</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.externalLink}>Forgot your account number?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#68b8db"
  },
  formContainer: {
    flex: 1,
    justifyContent: "center"
  },
  label: {
    fontSize: 20,
    marginTop: 36,
    marginBottom: 6,
    color: "#fff",
    fontWeight: "bold"
  },
  textBox: {
    height: 40,
    width: 300,
    color: "#4ba3c9",
    borderWidth: 2,
    borderColor: "#4d96b5",
    borderRadius: 6,
    backgroundColor: "#fff",
    paddingHorizontal: 5
  },
  actionButton: {
    marginTop: 36,
    alignSelf: "flex-end",
    backgroundColor: "#cb3b27"
  },
  actionButtonText: {
    color: "#fff",
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 10,
    marginHorizontal: 20
  },
  externalLink: {
    color: "#dfdfdf",
    fontSize: 12,
    textDecorationLine: "underline",
    alignSelf: "flex-start",
    marginLeft: 10,
    marginBottom: 10
  }
});

export default SignInScreen;