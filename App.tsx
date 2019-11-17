import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Provider } from "react-redux";

import { configureStore } from "store/index";

import AuthLoading from "screens/AuthLoading";
import FrontDoor from "screens/FrontDoor";
import Registration from "screens/Registration";
import Login from "screens/Login";

import Home from "screens/Home";

const AuthNavigator = createSwitchNavigator({
  AuthLoading: {
    screen: AuthLoading
  },
  FrontDoor: {
    screen: FrontDoor
  },
  Registration: {
    screen: Registration
  },
  Login: {
    screen: Login
  }
});

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home
    }
  },
  {
    headerMode: "none"
  }
);

const RootNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  App: AppNavigator
});

const Navigation = createAppContainer(RootNavigator);

const store = configureStore();

export default () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);
