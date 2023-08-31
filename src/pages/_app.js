import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';
import { store } from '../store';
// redux-persist
import { PersistGate } from 'redux-persist/integration/react';

import { persistStore } from 'redux-persist';
let persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider defaultTheme="system" attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
