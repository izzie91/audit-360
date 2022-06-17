import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
//import languageReducer from "./language";

const store = configureStore({
  reducer: {
    auth: authReducer,
    //language: languageReducer,
  },
});

export default store;
