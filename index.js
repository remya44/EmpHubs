/**
 * @format
 */
 import 'react-native-gesture-handler';
 import React  from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import Employee from './pages/Employee';
import AppNavigator from './navigator/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

import {name as appName} from './app.json';


AppRegistry.registerComponent(appName, () => AppNavigator);
