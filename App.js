import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import HomeScreen from "./components/HomeScreen";
import SignInScreen from "./components/SignInScreen";

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    SignIn: SignInScreen
  },
  {
    initialRouteName: "Home",
    headerLayoutPreset: "center"
  }
);

const AppContainer = createAppContainer(AppNavigator);
