import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import legoApi from "../api/legoApi";
import chosenFigure from "../store/slices/appSlice";

const reducer = {
    [legoApi.reducerPath]: legoApi.reducer,
    chosenFigure
};

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(legoApi.middleware)
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
