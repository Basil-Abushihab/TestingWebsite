import { CaseReducer, PayloadAction } from "@reduxjs/toolkit";
import { LocalizationIninitalState } from "./models/localizationState.model";

export type ChangeLocaleLanguageParams = CaseReducer<
  LocalizationIninitalState,
  PayloadAction<{ locale: string }>
>;
export const changeLocaleLanguageReducer:ChangeLocaleLanguageParams=(state,action)=>{
    const {locale}=action.payload;
    state.selectedLanguage=locale;
}
