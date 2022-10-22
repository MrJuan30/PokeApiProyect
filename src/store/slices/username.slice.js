import { createSlice } from "@reduxjs/toolkit";

const userName = createSlice({
    name: 'UserName',
    initialState: '',
    reducers: {
        setUserNameGlobal: (state, action) => action.payload
    }
    
})

export const {setUserNameGlobal}= userName.actions
export default userName.reducer

