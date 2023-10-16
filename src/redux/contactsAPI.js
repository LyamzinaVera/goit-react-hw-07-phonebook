

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
    'https://652cea03d0d1df5273efdb6c.mockapi.io/';


export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, { rejectWithValue }) => {
        try {
            const response = await axios.post('/contacts', contact);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'tasks/deleteContact',
    async (taskId, { rejectWithValue }) => {
        try {
            const response = await axios.delete(`/contacts/${taskId}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);