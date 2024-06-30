import { createSlice } from "@reduxjs/toolkit";

export const saveNumberFactSlice = createSlice({
    name: 'numberFactSave',
    initialState: {
        numberFactSaves: [],
    },
    reducers: {
        saveNumberFact: (state, action) => {
            state.numberFactSaves = state.numberFactSaves.concat(action.payload);
        },
    },
});

export const { saveNumberFact } = saveNumberFactSlice.actions;

export default saveNumberFactSlice.reducer;