import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ChatScreen from "./components/ChatScreen";
import HomeScreen from "./components/HomeScreen";
import SignInContainer from "./containers/SignInContainer";
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
    SignIn: SignInContainer,
    Chat: ChatScreen
  },
  {
    initialRouteName: "Chat",
    headerLayoutPreset: "center",
    defaultNavigationOptions: {
      title: "Sign In"
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);
