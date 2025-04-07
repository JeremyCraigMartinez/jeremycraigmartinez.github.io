import { configureStore, combineReducers } from "@reduxjs/toolkit";
import home from "./home";

const rootReducer = combineReducers({
  home,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
