import React, { createContext, useState } from 'react';

const CreateAuthStateContext = createContext(undefined);
const CreateAuthDispatchContext = createContext(undefined);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthChange = isAuthenticated => {
    setIsAuthenticated(isAuthenticated);
  };

  return (
    <CreateAuthStateContext.Provider value={isAuthenticated}>
      <CreateAuthDispatchContext.Provider value={{ handleAuthChange }}>
        {children}
      </CreateAuthDispatchContext.Provider>
    </CreateAuthStateContext.Provider>
  );
};

const useCreateAuthStateContext = () => {
  const context = React.useContext(CreateAuthStateContext);

  if (context === undefined) {
    throw Error('useCreateAuthStateContext');
  }

  return context;
};

const useCreateAuthDispathContext = () => {
  const context = React.useContext(CreateAuthDispatchContext);

  if (context === undefined) {
    throw Error('useCreateAuthDispathContext');
  }

  return context;
};
const useAuthContext = () => {
  return [useCreateAuthDispathContext(), useCreateAuthDispathContext()];
};
export {
  AuthProvider,
  useCreateAuthStateContext,
  useCreateAuthDispathContext,
  useAuthContext,
};
