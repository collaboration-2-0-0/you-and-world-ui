import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from '@components/error/error.boundary';
import { Theme } from '@styles/theme';
import { NavigateProvider } from '@contexts/navigate/navigate';
import { Layout } from '@components/layout/layout';
import { ModalSet } from '@components/modal/modal.set';
import { Loading } from '@components/loading/loading';
import { ErrorCatch } from '@components/error/error.catch';
import { Content } from '@components/content/content';
import { Router } from '@router/router';
import { Redirect } from '@router/redirect';
import { useAppReady } from '@hooks/useAppReady';

export const App: FC = () => {
  const isReady = useAppReady();
  return (
    <ErrorBoundary level="app">
      <Theme>
        <ErrorBoundary level="router">
          <BrowserRouter
            future={{
              v7_startTransition: false,
              v7_relativeSplatPath: false,
              // v7_normalizeFormMethod: false,
              // v7_partialHydration: false,
              // v7_skipActionErrorRevalidation: false,
            }}
          >
            <NavigateProvider>
              <Layout>
                <ModalSet />
                <Loading />
                <ErrorCatch />
                <Content>{isReady && <Router />}</Content>
              </Layout>
              <Redirect />
            </NavigateProvider>
          </BrowserRouter>
        </ErrorBoundary>
      </Theme>
    </ErrorBoundary>
  );
};
