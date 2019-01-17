import  AuthScreen  from '../screens/Auth';
import  HomeScreen  from '../screens/Home';
import { createStackNavigator, createAppContainer } from "react-navigation";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Auth: AuthScreen
  },
  {
    initialRouteName: "Auth"
  }
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;