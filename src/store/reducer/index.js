import{createStore,applyMiddleware, combineReducers}from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import login from './login'

const persistConfig = {
    key: 'root',
    storage,
  }
  const logPersist = {
    key: 'login',
    storage,
    blacklist: ['loading','error'],
  };
  const rootReducer = combineReducers({
    login:persistReducer(logPersist,login)
})
  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);