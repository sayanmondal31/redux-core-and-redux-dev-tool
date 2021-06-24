import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false,
    email: "",
    password: "",
  };
  
 export const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
      login(state) {
      //   state.email = action.payload.email;
      //   state.password = action.payload.password;
        state.isAuthenticated = true;
      },
      logout(state) {
        state.isAuthenticated = false;
      },
    },
  });
  
  export const authActions = authSlice.actions;
  export default authSlice.reducer