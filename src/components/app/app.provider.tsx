import { FC, PropsWithChildren } from 'react';
import { App } from '../../app/common/client/app';
import { AppContextProvider } from './app.context';

export const app = new App();

declare global {
  interface Window {
    App: App;
  }
}
window.App = app;

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return <AppContextProvider value={app}>{children}</AppContextProvider>;
};
