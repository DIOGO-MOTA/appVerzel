import 'react-native-gesture-handler';

import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';

import {AppProvider, AppAdminProvider} from './hooks';

import Routes from './routes';
import theme from './styles/theme';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="default" translucent backgroundColor="transparent" />
    <AppAdminProvider>
      <AppProvider>
        <ThemeProvider theme={theme}>
          <View style={{flex: 1, backgroundColor: '#312e38'}}>
            <Routes />
          </View>
        </ThemeProvider>
      </AppProvider>
    </AppAdminProvider>
  </NavigationContainer>
);

export default App;
