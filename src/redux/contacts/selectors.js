// import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.isError;



// export const selectStatusFilter = (state) => state.filter.name;
// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectStatusFilter],
//   (contacts, filter) => {
//     return contacts.filter((contact) => {
//       return (
//         contact.name.toLowerCase().includes(filter.toLowerCase()) ||
//         contact.number.toLowerCase().includes(filter.toLowerCase())
//       );
//     });
//   }
// );