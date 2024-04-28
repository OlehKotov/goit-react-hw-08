
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../auth/operations";


export const getContacts = createAsyncThunk(
  "contacts/getAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/contacts");
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const addContact = createAsyncThunk(
  "contacts/addContact",
  async ({ name, number }, thunkAPI) => {
    try {
      const { data } = await instance.post("/contacts", { name, number });
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);


export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/contacts/${contactId}`);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
