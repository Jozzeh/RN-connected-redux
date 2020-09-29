// Redux store

// EXAMPLE FOR REACT (async storage required for react native)
// Imports: Dependencies
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

// Imports: Redux
import RootReducer from '../reducers/RootReducer';

// Middleware: Redux Thunk (Async/Await)
const middleware = [thunk];

// Middleware: Redux Logger (For Development)
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'root',
  timeout: 30000,
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, RootReducer);

// Redux: Store
const store = createStore(persistedReducer, applyMiddleware(...middleware));

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {store, persistor};
