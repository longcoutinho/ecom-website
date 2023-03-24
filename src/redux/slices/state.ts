import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WritableDraft } from "immer/dist/internal";

interface IState {
  state: boolean;
}

const initialState: IState = {
  state: false,
};

const slicer = createSlice({
  name: "state",
  initialState,
  reducers: {
    setState: (
      state: WritableDraft<IState>,
      action: PayloadAction<boolean>
    ) => {
      state.state = action.payload;
    },
  },
});

export const { setState } = slicer.actions;

export default slicer.reducer;
