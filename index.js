/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';
import App from './App';
//import WelcomePage from "./js/page/WelcomePage";
import AppNavigator from './js/navigator/AppNavigator'
import HomePage from "./js/page/HomePage";
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
