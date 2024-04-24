import { createSlice } from "@reduxjs/toolkit";
// import { addContact, deleteContact, fetchContacts } from "../contacts/operations";

const initialState = {
    user: {
        name: null,
        email: null,
      },
      token: null,
      isLoggedIn: false,
      isRefreshing: false,
};

// const handlePending = (state) => {
//   state.loading = true;
//   state.error = false;
// };
// const handleRejected = (state, action) => {
//   state.loading = false;
//   state.error = action.payload;
// };

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
    //   .addCase(fetchContacts.pending, handlePending)
    //   .addCase(fetchContacts.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = null;
    //     state.items = action.payload;
    //   })
    //   .addCase(fetchContacts.rejected, handleRejected)
    //   .addCase(addContact.pending, handlePending)
    //   .addCase(addContact.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = null;
    //     state.items.push(action.payload);
    //   })
    //   .addCase(addContact.rejected, handleRejected)
    //   .addCase(deleteContact.pending, handlePending)
    //   .addCase(deleteContact.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = null;
    //     state.items = state.items.filter(
    //       (contact) => contact.id !== action.payload.id
    //     );
    //   })
    //   .addCase(deleteContact.rejected, handleRejected);
  },
});


export const authReducer = authSlice.reducer;
