import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import localization from "@/features/localization/reducers/localizationSlice";
import logger from "redux-logger";


export const store = configureStore({
  reducer: combineReducers({ localization }),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
