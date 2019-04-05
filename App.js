import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { createStore } from "redux";
import HomeScreen from "./components/HomeScreen";
import SignInScreen from "./components/SignInScreen";
import chatNowReducers from "./reducers";

let store = createStore(chatNowReducers);

export default class App extends Component {
  render() {
    console.log("redux/app state is: ", store.getState());
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
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
