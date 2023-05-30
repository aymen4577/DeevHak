import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import hackathoneReducer from './slices/hackathones';
const reducer = {
  auth: authReducer,
  message: messageReducer,
  hackathons: hackathoneReducer
}

export const store = configureStore({
  reducer: reducer,
  devTools: true,
});
