import { createRoot } from 'react-dom/client';
import { AppProvider } from './components/app/app.provider';
import { App } from './components/app/app';

createRoot(document.getElementById('root')!).render(
  <AppProvider>
    <App />
  </AppProvider>,
);
