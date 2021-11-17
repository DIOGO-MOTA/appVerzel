import React from 'react';

import {AuthProvider} from './auth';

import {AuthAdminProvider} from './authAdmin';

export const AppProvider: React.FC = ({children}) => (
  <AuthProvider>{children}</AuthProvider>
);

export const AppAdminProvider: React.FC = ({children}) => (
  <AuthAdminProvider>{children}</AuthAdminProvider>
);
