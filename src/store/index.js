import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";


// configureStore  combines multiple state slices or reducers in one big reducer
const store = configureStore({
  //   reducer: { counter: counterSlice.reducer }, //when we have multiple reducers
  reducer: { counter: counterReducer, auth: authReducer },
});




export default store;
