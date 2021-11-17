import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

interface UserAdmin {
  id: string;
  name: string;
  email: string;
}

interface AuthAdminState {
  tokenAdmin: string;
  userAdmin: UserAdmin;
}

interface signInAdminCredentials {
  email: string;
  password: string;
}

interface AuthAdminContextData {
  userAdmin: UserAdmin;
  loadingAdmin: boolean;
  signInAdmin(credentials: signInAdminCredentials): Promise<void>;
  signOutAdmin(): void;
}

const AuthAdminContext = createContext<AuthAdminContextData>(
  {} as AuthAdminContextData,
);

const AuthAdminProvider: React.FC = ({children}) => {
  const [dataAdmin, setDataAdmin] = useState<AuthAdminState>(
    {} as AuthAdminState,
  );
  const [loadingAdmin, setLoadingAdmin] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [tokenAdmin, userAdmin] = await AsyncStorage.multiGet([
        '@appVerzel:tokenAdmin',
        '@appVerzel:userAdmin',
      ]);

      if (tokenAdmin[1] && userAdmin[1]) {
        api.defaults.headers.authorization = `Bearer ${tokenAdmin[1]}`;
        setDataAdmin({
          tokenAdmin: tokenAdmin[1],
          userAdmin: JSON.parse(userAdmin[1]),
        });
      }

      setLoadingAdmin(false);
    }
    loadStorageData();
  }, []);

  const signInAdmin = useCallback(async ({email, password}) => {
    const response = await api.post('sessionsAdmin', {
      email,
      password,
    });

    const {tokenAdmin, userAdmin} = response.data;

    await AsyncStorage.multiSet([
      ['@appVerzel:tokenAdmin', tokenAdmin],
      ['@appVerzel:userAdmin', JSON.stringify(userAdmin)],
    ]);

    api.defaults.headers.authorization = `Bearer ${tokenAdmin}`;

    setDataAdmin({tokenAdmin, userAdmin});
  }, []);

  const signOutAdmin = useCallback(async () => {
    await AsyncStorage.multiRemove([
      '@appVerzel:tokenAdmin',
      '@appVerzel:userAdmin',
    ]);

    setDataAdmin({} as AuthAdminState);
  }, []);

  return (
    <AuthAdminContext.Provider
      value={{
        userAdmin: dataAdmin.userAdmin,
        loadingAdmin,
        signInAdmin,
        signOutAdmin,
      }}>
      {children}
    </AuthAdminContext.Provider>
  );
};

function useAdminAuth(): AuthAdminContextData {
  const context = useContext(AuthAdminContext);

  if (!context) {
    throw new Error('useAush must be used within an AuthProvider');
  }

  return context;
}

export {AuthAdminProvider, useAdminAuth};
