import { createSlice } from "@reduxjs/toolkit";
import i18n from "../i18n";

const initialLanguageState = {
  selectedLanguage: sessionStorage.getItem("language") !== null ? sessionStorage.getItem("language") : "sp",
};

const languageSlice = createSlice({
  name: "language",
  initialState: initialLanguageState,
  reducers: {
    update(state, action) {
      state.selectedLanguage = action.payload.currentLanguage;
      sessionStorage.setItem("language", action.payload.currentLanguage);
      i18n.changeLanguage(action.payload.currentLanguage);
    },
  },
});

export const languageActions = languageSlice.actions;

export default languageSlice.reducer;
