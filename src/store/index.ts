import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { REHYDRATE, PERSIST } from 'redux-persist/es/constants';

import signInSlice from 'pages/SignIn/reducer';
import shopSlice from 'pages/Goods/reducer';
import productDetailsSlice from 'pages/ProductDetails/reducer';

import { persistConfig, signInPersistConfig } from 'store/persistConfig';

const rootReducer = combineReducers({
    signIn: persistReducer(signInPersistConfig, signInSlice),
    shop: shopSlice,
    productDetails: productDetailsSlice,
});

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
