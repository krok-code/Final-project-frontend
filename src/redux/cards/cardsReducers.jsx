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
export const getAllDashboards = createAsyncThunk(
  'dashboards/fetchAllDashboards',
  async (_, thunkAPI) => {
    try {
      const { data } = await authInstance.get('/dashboard');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getDashboardById = createAsyncThunk(
  'dashboards/getById',
  async (dashboardId, thunkAPI) => {
    try {
      const { data } = await authInstance.get(`/dashboard/${dashboardId}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editDashbord = createAsyncThunk(
  'dashboards/editDashbord',
  async ({ dashboardId, updatedData }, thunkAPI) => {
    try {
      const { data } = await authInstance.put(
        `/dashboard/${dashboardId}`,
        updatedData
      );

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteDashboard = createAsyncThunk(
  'dashboards/deleteDashboard',
  async (dashboardId, thunkAPI) => {
    try {
      const { data } = await authInstance.delete(`/dashboard/${dashboardId}`);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addBoard = createAsyncThunk(
  'addBoard',
  async ({ name, icon, backgroundURL }, thunkAPI) => {
    try {
      const { data } = await authInstance.post('/boards', {
        name,
        icon,
        backgroundURL,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const editBoard = createAsyncThunk(
  'editBoard',
  async ({ boardId, updatedData }, thunkAPI) => {
    try {
      const { data } = await authInstance.put(`board/${boardId}`, updatedData);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
