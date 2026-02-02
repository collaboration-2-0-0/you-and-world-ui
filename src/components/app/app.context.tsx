import { createContext, useContext } from 'react';
import { App } from '../../app/common/client/app';

const appContext = createContext({});
export const AppContextProvider = appContext.Provider;

export const useAppContext = <T extends App = App>() => {
  return useContext(appContext) as T;
};
