import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home';
import CarDetails from '../pages/CarDetails';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <App.Screen name="Home" component={Home} />
    <App.Screen name="CarDetails" component={CarDetails} />
  </App.Navigator>
);

export default AppRoutes;
