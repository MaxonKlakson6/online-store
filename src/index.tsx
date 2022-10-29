import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'store';
import Router from 'router/Router';

import 'index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <HashRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router />
            </PersistGate>
        </Provider>
    </HashRouter>
);
