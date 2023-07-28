import { configureStore,combineReducers } from '@reduxjs/toolkit';
import basketSlice from './features/basketSlice';
import cartReducer from './features/cartSlice'
import modalSlice from './modal/modalSlice';
import amountBasketSlice from './features/amountBasketSlice';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { persistReducer,persistStore } from 'redux-persist';



const rootReducer = combineReducers({
  cartReducer,
  modalSlice,
  amountBasketSlice,
  basketSlice
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig , rootReducer)

const middlewares = [thunk, logger];

const totalStore = () =>{
  let store = configureStore({
    middleware: middlewares,
    reducer:persistedReducer
  })
  let persistor = persistStore(store)
  return {persistor,store}
}

export default totalStore;

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     modal:modalSlice,
//     basket: basketSlice,
//     amountBasket: amountBasketSlice
//   },
// });


