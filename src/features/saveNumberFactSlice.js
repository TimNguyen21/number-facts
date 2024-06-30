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
        removeSavedNumberFact: (state, action) => {
            state.numberFactSaves = state.numberFactSaves.filter(numberFactSave => numberFactSave.id !== action.payload);
        },
    },
});

export const { saveNumberFact, removeSavedNumberFact } = saveNumberFactSlice.actions;

export default saveNumberFactSlice.reducer;