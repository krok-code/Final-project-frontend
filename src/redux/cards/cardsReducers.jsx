import { createAsyncThunk } from '@reduxjs/toolkit';
import { authInstance } from '../authorization/authReducer';

export const addColumn = createAsyncThunk(
  'addColumn',
  async ({ bordsId, text, owner }, thunkAPI) => {
    try {
      const { data } = await authInstance.post(`api/column/${bordsId}`, {
        text,
        owner,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteColumn = createAsyncThunk(
  'deleteColumn',
  async (columnId, thunkAPI) => {
    try {
      const { data } = await authInstance.delete(`api/column/${columnId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editColumn = createAsyncThunk(
  'editColumn',
  async ({ columnId, text }, thunkAPI) => {
    try {
      const { data } = await authInstance.put(`api/column/${columnId}`, {
        text,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);