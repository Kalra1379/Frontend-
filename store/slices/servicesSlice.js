import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from './../../services/axios'

export const fetchServices = createAsyncThunk('services/fetchServices', async (params = {}, { rejectWithValue }) => {
    try {
        const response = await axios.get('/admin/service')
    
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message || 'No services');
    }
});


const serviceSlice = createSlice({
    name: 'services',
    initialState: {
        services: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchServices.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchServices.fulfilled, (state, action) => {
            state.loading = false;
            state.services = action.payload.data;
        });
        builder.addCase(fetchServices.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
})

export default serviceSlice.reducer;