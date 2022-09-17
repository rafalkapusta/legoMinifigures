import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    chosenFigure: null | string;
}

const initialState: InitialState = {
    chosenFigure: null
};

const chosenFigureDate = createSlice({
    name: "applicationData",
    initialState,
    reducers: {
        setChosenFigure(state, { payload }: PayloadAction<string>) {
            state.chosenFigure = payload;
        }
    }
});

export const { setChosenFigure } = chosenFigureDate.actions;

export default chosenFigureDate.reducer;
