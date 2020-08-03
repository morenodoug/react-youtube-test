import { createSlice } from "@reduxjs/toolkit";



const initialState ={
    mobileOpen : false
}

export const  uiSlice = createSlice({
    name: 'ui',
    initialState: initialState,

    reducers: {
        setMobileOpen: (currState, action) =>{
            currState.mobileOpen = !currState.mobileOpen
        }
    }
})

export const  {setMobileOpen} = uiSlice.actions
export default uiSlice.reducer

export const isMobileOpen = (status) => status.ui.mobileOpen