import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/productSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import basketSlice from "../features/basketSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, basketSlice.reducer);

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    basket: persistedReducer,
  },
  middleware: (getDefaultMidddleWare) =>
    getDefaultMidddleWare({ serializableCheck: false }),
});
export const persistor = persistStore(store);

export default store;
