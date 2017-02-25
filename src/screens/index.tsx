import { Navigation } from 'react-native-navigation';

import FirstScreen from './firstScreen';
import SecondScreen from './secondScreen';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.FirstTabScreen', () => FirstScreen);
  Navigation.registerComponent('example.SecondTabScreen', () => SecondScreen);
}