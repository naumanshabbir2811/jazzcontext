import React from 'react';

const CreateAuthStateContext = React.createContext(undefined);

const CreateAuthDispatchContext = React.createContext(undefined);

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const handleAuthChange = setIsAuthenticated => {
    setIsAuthenticated(isAuthenticated);
  };
  return (
    <CreateAuthStateContext.Provider value={isAuthenticated}>
      <CreateAuthDispatchContext.Provider
        value={{ handleAuthChange }}
      ></CreateAuthDispatchContext.Provider>
    </CreateAuthStateContext.Provider>
  );
};

const useCreateUserStateContext = () => {
  const context = React.useContext(CreateAuthStateContext);

  if (context === undefined) {
    throw Error('CreateAuthStateDispatch noot working');
  }
  return context;
};
const useCreateUserDispatchContext = () => {
  const context = React.useContext(CreateAuthDispatchContext);
  if (context === undefined) {
    throw Error('CreateUserDispatchContext not working');
  }
  return context;
};
export {
  AuthProvider,
  useCreateUserDispatchContext,
  useCreateUserStateContext,
};
