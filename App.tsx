import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "screens/Home";
import GetPermissions from "screens/GetPermissions";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    }
  },
  {
    headerMode: "none"
  }
);

const RootNavigator = createSwitchNavigator({
  GetPermissions: {
    screen: GetPermissions
  },
  App: AppNavigator
});

export default createAppContainer(RootNavigator);
