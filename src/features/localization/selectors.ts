import {
  createAppSelector,
  selectState,
} from "@/store/utilities/utilityFunctions";

export const selectLocale = createAppSelector(
  [selectState],
  (state) => state.localization.selectedLanguage
);
