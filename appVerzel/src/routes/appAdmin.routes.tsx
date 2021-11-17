import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import HomeAdmin from '../pages/Admin/HomeAdmin';
import CreateCar from '../pages/Admin/CreateCar';
import CreateImageCar from '../pages/Admin/CreateImageCar';

const AppAdmin = createStackNavigator();

const AppAdminRoutes: React.FC = () => (
  <AppAdmin.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <AppAdmin.Screen name="HomeAdmin" component={HomeAdmin} />
    <AppAdmin.Screen name="CreateCar" component={CreateCar} />
    <AppAdmin.Screen name="CreateImageCar" component={CreateImageCar} />
  </AppAdmin.Navigator>
);

export default AppAdminRoutes;
