import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://note-saver-backend.onrender.com/api/auth';

const getAuthConfig = () => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// Create file
export const createFile = createAsyncThunk(
  'files/create',
  async (fileData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}`, fileData, getAuthConfig());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Get all files
export const getFiles = createAsyncThunk(
  'files/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}`, getAuthConfig());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Get single file
export const getFile = createAsyncThunk(
  'files/getOne',
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`, getAuthConfig());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Update file
export const updateFile = createAsyncThunk(
  'files/update',
  async ({ id, fileData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, fileData, getAuthConfig());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

// Delete file
export const deleteFile = createAsyncThunk(
  'files/delete',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/${id}`, getAuthConfig());
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  files: [],
  currentFile: null,
  isLoading: false,
  error: null,
};

const fileSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    clearCurrentFile: (state) => {
      state.currentFile = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Create file
      .addCase(createFile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createFile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.files.unshift(action.payload);
      })
      .addCase(createFile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Get all files
      .addCase(getFiles.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFiles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.files = action.payload;
      })
      .addCase(getFiles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Get single file
      .addCase(getFile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentFile = action.payload;
      })
      .addCase(getFile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Update file
      .addCase(updateFile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateFile.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.files.findIndex(file => file._id === action.payload._id);
        if (index !== -1) {
          state.files[index] = action.payload;
        }
        state.currentFile = action.payload;
      })
      .addCase(updateFile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Delete file
      .addCase(deleteFile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteFile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.files = state.files.filter(file => file._id !== action.payload);
      })
      .addCase(deleteFile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reset, clearCurrentFile } = fileSlice.actions;
export default fileSlice.reducer;