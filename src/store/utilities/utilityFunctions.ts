import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const createAppSelector = createSelector.withTypes<RootState>();
export const selectState = (state: RootState) => state;
