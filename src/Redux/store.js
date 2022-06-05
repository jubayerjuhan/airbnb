import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./Reducers/categoryReducer";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";
import logger from "redux-logger";


const reducers = combineReducers({
  category: categoryReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  preloadedState: {},
  middleware: [thunk, logger],
});

export const persistor = persistStore(store)

