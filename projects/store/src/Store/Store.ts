import { Action, combineReducers, configureStore, getDefaultMiddleware, ThunkAction } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// slices
import { authSlice } from './Reducers/AuthReducer';
import { cartSlice } from './Reducers/CartReducer';
import { checkoutSlice } from './Reducers/CheckoutReducer';
import { orderSlice } from './Reducers/OrderReducer';
import { pluginsSlice } from './Reducers/PluginsReducer';
import { utilsSlice } from './Reducers/UtilsReducer';

const reducers = combineReducers({
	cart: cartSlice.reducer,
	auth: authSlice.reducer,
	order: orderSlice.reducer,
	checkout: checkoutSlice.reducer,
	plugins: pluginsSlice.reducer,
	utils: utilsSlice.reducer,
});

const persistConfig = {
	key: 'lab77-store',
	version: 1,
	storage,
	whitelist: ['cart'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
		},
	}),
});
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
