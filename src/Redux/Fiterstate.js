import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "FilterState",
  initialState: {
    selectedbgFilter: [],
    selectedbdFilter: [],
    selectedeyeFilter: [],
    selectedmouFilter: [],
    selectedacceFilter: [],
    selectedoutFilter: [],
    SaleInnerstatus: false,
    Filtercount: 0,
    FilterName: [],
    some: [],
    val: 0,
  },

  reducers: {
    addbgFilter: (state, action) => {
      state.selectedbgFilter = [...state.selectedbgFilter, action.payload];
      state.Filtercount += 1;
    },
    removebgFilter: (state, action) => {
      state.selectedbgFilter = state.selectedbgFilter.filter(
        (p) => p != action.payload
      );
      state.FilterName = state.FilterName.filter((p) => p !== action.payload);
      state.Filtercount -= 1;
    },
    addbdFilter: (state, action) => {
      state.selectedbdFilter = [...state.selectedbdFilter, action.payload];
      state.Filtercount += 1;
    },
    removebdFilter: (state, action) => {
      state.selectedbdFilter = state.selectedbdFilter.filter(
        (p) => p != action.payload
      );
      state.FilterName = state.FilterName.filter((p) => p !== action.payload);
      state.Filtercount -= 1;
    },
    addyeFilter: (state, action) => {
      state.selectedeyeFilter = [...state.selectedeyeFilter, action.payload];
      state.Filtercount += 1;
    },
    removeyeFilter: (state, action) => {
      state.selectedeyeFilter = state.selectedeyeFilter.filter(
        (p) => p != action.payload
      );
      state.FilterName = state.FilterName.filter((p) => p !== action.payload);
      state.Filtercount -= 1;
    },

    addmouFilter: (state, action) => {
      state.selectedmouFilter = [...state.selectedmouFilter, action.payload];
      state.Filtercount += 1;
    },
    removemouFilter: (state, action) => {
      state.selectedmouFilter = state.selectedmouFilter.filter(
        (p) => p != action.payload
      );
      state.FilterName = state.FilterName.filter((p) => p !== action.payload);
      state.Filtercount -= 1;
    },
    addaceFilter: (state, action) => {
      state.selectedacceFilter = [...state.selectedacceFilter, action.payload];
      state.Filtercount += 1;
    },
    removeaceFilter: (state, action) => {
      state.selectedacceFilter = state.selectedacceFilter.filter(
        (p) => p != action.payload
      );
      state.FilterName = state.FilterName.filter((p) => p !== action.payload);
      state.Filtercount -= 1;
    },
    addoutFilter: (state, action) => {
      state.selectedoutFilter = [...state.selectedoutFilter, action.payload];
      state.Filtercount += 1;
    },
    removeoutFilter: (state, action) => {
      state.selectedoutFilter = state.selectedoutFilter.filter(
        (p) => p != action.payload
      );
      state.FilterName = state.FilterName.filter((p) => p !== action.payload);
      state.Filtercount -= 1;
    },
    setSaleInner: (state, action) => {
      state.SaleInnerstatus = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addbgFilter,
  setSaleInner,
  removebgFilter,
  addFilterName,
  addbdFilter,
  removebdFilter,
  addyeFilter,
  removeyeFilter,
  removemouFilter,
  addmouFilter,
  addaceFilter,
  removeaceFilter,
  addoutFilter,
  removeoutFilter,
} = counterSlice.actions;

export default counterSlice.reducer;
