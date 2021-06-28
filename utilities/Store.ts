import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../types";
// to be used
const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: "",
    name: ""
  } as User,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id
      state.name = action.payload.name;
    }
  }
})

export const {setUser} = userSlice.actions

export const store = configureStore({
  reducer: {
    user: userSlice as any
  }
});
