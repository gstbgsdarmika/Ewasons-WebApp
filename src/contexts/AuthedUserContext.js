import React from 'react';

const AuthedUserContext = React.createContext();

export const AuthedUserProvider = AuthedUserContext.Provider;
export const AuthedUserConsumer = AuthedUserContext.Consumer;

export default AuthedUserContext;
