import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MiniFigure } from "../../types";

interface InitialState {
    chosenFigure: string;
    minifigures: MiniFigure[];
}

const initialState: InitialState = {
    chosenFigure: "",
    minifigures: []
};

const figuresData = createSlice({
    name: "figuresData",
    initialState,
    reducers: {
        setChosenFigure(state, { payload }: PayloadAction<string>) {
            state.chosenFigure = payload;
        },
        addMinifigure(state, { payload }: PayloadAction<MiniFigure>) {
            state.minifigures.push(payload);
        }
    }
});

export const { setChosenFigure, addMinifigure } = figuresData.actions;

export default figuresData.reducer;
