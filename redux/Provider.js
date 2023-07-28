"use client";

import totalStore from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const {store , persistor} = totalStore()
export function Providers({ children }) {
  return (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>
  );
}