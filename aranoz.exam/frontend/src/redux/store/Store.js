import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/productSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import wishlistSlice from "../features/wishlistSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, wishlistSlice.reducer);

const Store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    wishlist: persistedReducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({ serializableCheck: false }),
});
export const persistor = persistStore(Store);
export default Store;
