import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import reducers from './Store/reducers';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

let store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk)),
);
let persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ShoppingCart />
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
);
