import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import SignUpContainer from 'pages/SignUp/containers/SignUpContainer';

import { store } from 'store';
import 'index.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <SignUpContainer />
        </Provider>
    </React.StrictMode>
);
