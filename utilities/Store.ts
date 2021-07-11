import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UserInfo} from "../types";

const userInfoSlice = createSlice({
  name: 'user',
  initialState: {
    id: "",
    name: "",
    auth: false,
  } as UserInfo,
  reducers: {
    setUser: (state, action: PayloadAction<UserInfo>) => {
      state.id = action.payload.id
      state.name = action.payload.name;
      state.auth = action.payload.auth;
    }
  }
});

export const {setUser} = userInfoSlice.actions

export const store = configureStore({
  reducer: {
    user: userInfoSlice.reducer
  }
});
