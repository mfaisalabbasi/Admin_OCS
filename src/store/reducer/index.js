import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import login from "./login";
import customer from "./customer";
import category from "./category";
import partner from "./partner";
import orders from "./orders";

const persistConfig = {
  key: "root",
  storage,
};
const logPersist = {
  key: "login",
  storage,
  blacklist: ["loading", "error"],
};
const orderPersist = {
  key: "orders",
  storage,
  blacklist: ["loading", "error", "orders"],
};
const rootReducer = combineReducers({
  login: persistReducer(logPersist, login),
  customer,
  category,
  partner,
  orders: persistReducer(orderPersist, orders),
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
