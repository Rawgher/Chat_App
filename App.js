import React, { Component } from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import HomeScreen from "./components/HomeScreen";
import ChatContainer from "./containers/ChatContainer";
import SignInContainer from "./containers/SignInContainer";
import chatNowReducers from "./reducers";

let store = createStore(chatNowReducers, applyMiddleware(thunk));

export default class App extends Component {
  render() {
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
    Chat: ChatContainer
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
