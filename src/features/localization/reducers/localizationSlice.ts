import { createSlice } from "@reduxjs/toolkit";
import { LocalizationIninitalState } from "../models/localizationState.model";
import {  changeLocaleLanguageReducer } from "../actions";

const initialState: LocalizationIninitalState = { selectedLanguage: "en" };
const localizationSlice = createSlice({
  initialState,
  name: "localization",
  reducers: { changeLocaleLanguage: changeLocaleLanguageReducer },
});

export const {changeLocaleLanguage}=localizationSlice.actions;
export default localizationSlice.reducer;