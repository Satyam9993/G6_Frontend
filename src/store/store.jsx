// import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "./userSlice";


// const store = configureStore({ reducer : {
//     user: userSlice
// }});

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Configuration for persisting the Redux state
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, userSlice);

const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const persistor = persistStore(store);
export default store;
