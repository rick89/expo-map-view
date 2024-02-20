import { configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import jobSlice from './slices/job-slice';
import apiSlice from './slices/api-slice';

const persistConfig = {
	key: 'root',
	version: 1,
	storage: AsyncStorage,
};

// const rootReducer = {
// 	[apiSlice.reducerPath]: apiSlice.reducer,
// 	...jobSlice.reducer,
// };

// const persistedReducer = persistReducer(persistConfig, () => rootReducer);

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}).concat(apiSlice.middleware),
});

export let persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
