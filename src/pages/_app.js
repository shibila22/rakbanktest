import { Provider } from 'react-redux';
import { store } from '../store';
import '../themes/index.js';
import CssBaseline from '@mui/material/CssBaseline';
import MUIThemeProvider from '@/themes/MUIThemeProvider';
import '@/styles/globals.css';

// redux-persist
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MUIThemeProvider>
          <CssBaseline>
            <Component {...pageProps} />
          </CssBaseline>
        </MUIThemeProvider>
      </PersistGate>
    </Provider>
  );
}
