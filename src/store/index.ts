import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { REHYDRATE, PERSIST } from 'redux-persist/es/constants';
import storage from 'redux-persist/lib/storage';

import signInSlice from 'pages/SignIn/reducer';
import shopSlice from 'pages/Goods/reducer';

const rootReducer = combineReducers({
    signIn: signInSlice,
    shop: shopSlice,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [REHYDRATE, PERSIST],
            },
        }),
});

const persistor = persistStore(store);

export { store, persistor };
