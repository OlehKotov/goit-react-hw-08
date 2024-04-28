import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContact, deleteContact, getContacts } from "../contacts/operations";

const initialState = {
  items: [],
  isLoading: false,
  isError: null,
};


const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
    .addCase(getContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items.push(action.payload);
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload.id
      );
    })
    
    .addMatcher(isAnyOf((getContacts.pending, addContact.pending, deleteContact.pending), (state) => {
      state.isLoading = true;
      state.isError = false;
    }))
    .addMatcher(isAnyOf((getContacts.rejected, addContact.rejected, deleteContact.rejected), (state) => {
      state.isLoading = false;
      state.isError = true;
    }))
  },
});


export const contactsReducer = contactsSlice.reducer;
