import { createSlice } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUser'

export interface userState {
  isAuth : boolean,
  isLoading : boolean,
  user : IUser[],
  error : string,
}

const initialState: userState = {
  isAuth : false,
  isLoading : false,
  user : [],
  error : "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuth : (state) =>{
        state.isAuth = true
    }
  },
})

export const { setAuth } = userSlice.actions

export default userSlice.reducer