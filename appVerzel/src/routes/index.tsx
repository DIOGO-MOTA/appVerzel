import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import AppAdminRoutes from './appAdmin.routes';

import {useAuth} from '../hooks/auth';
import {useAdminAuth} from '../hooks/authAdmin';

const Routes: React.FC = () => {
  const {user, loading} = useAuth();
  const {userAdmin, loadingAdmin} = useAdminAuth();

  if (loading || loadingAdmin) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  if (userAdmin) {
    return userAdmin ? <AppAdminRoutes /> : <AuthRoutes />;
  }

  return user ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
