import { configureStore } from "@reduxjs/toolkit";
import data from "./dateSlice";

const store = configureStore({
  reducer: { data },
});

export default store;
