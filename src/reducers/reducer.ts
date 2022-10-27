import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { IInitialState, TPageTemplates } from 'types/main';

const initialState: IInitialState = {
  pages: [],
  templates: [],
  select: null,
};

const URL_DEFAULT = 'http://cyberleaf.com.ua:24516/api';

const requestOptions = {
  method: 'GET',
  headers: {
    accept: 'application/vnd.github+json',
  },
  redirect: 'follow',
};

export const createPage = createAsyncThunk('createPage', () => {
  return axios<TPageTemplates>(`${URL_DEFAULT}/v1/notes`, {
    ...requestOptions,
    method: 'POST',
    data: {
      header: 'Untitled page',
      body:
        '{"blocks":[{"key":"306gj","text":"Please enter text","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    },
  });
});
export const fetchPages = createAsyncThunk('fetchPages', () => {
  return axios(`${URL_DEFAULT}/v1/notes`, requestOptions);
});
export const updatePage = createAsyncThunk(
  'updatePages',
  ({ id, header, body }: { id: string; header: string; body: string }) => {
    return axios(`${URL_DEFAULT}/v1/notes/${id}`, {
      ...requestOptions,
      method: 'PUT',
      data: { header, body },
    });
  }
);
export const deletePage = createAsyncThunk(
  'deletePage',
  ({ id }: { id: string }) => {
    return axios(`${URL_DEFAULT}/v1/notes/${id}`, {
      ...requestOptions,
      method: 'DELETE',
    });
  }
);

export const createTemplate = createAsyncThunk('createTemplate', () => {
  return axios<TPageTemplates>(`${URL_DEFAULT}/v1/templates`, {
    ...requestOptions,
    method: 'POST',
    data: {
      header: 'Untitled template',
      body:
        '{"blocks":[{"key":"306gj","text":"Please enter text","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
    },
  });
});
export const fetchTemplate = createAsyncThunk('fetchTemplate', () => {
  return axios(`${URL_DEFAULT}/v1/templates`, requestOptions);
});
export const updateTemplate = createAsyncThunk(
  'updateTemplate',
  ({ id, header, body }: { id: string; header: string; body: string }) => {
    return axios(`${URL_DEFAULT}/v1/templates/${id}`, {
      ...requestOptions,
      method: 'PUT',
      data: { header, body },
    });
  }
);
export const deleteTemplate = createAsyncThunk(
  'deleteTemplate',
  ({ id }: { id: string }) => {
    return axios(`${URL_DEFAULT}/v1/templates/${id}`, {
      ...requestOptions,
      method: 'DELETE',
    });
  }
);

const mainReducer = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    selectPage: (state, action) => {
      console.log('selectPage', action);
      state.select =
        state.pages.find((item) => item.id === action.payload) || null;
    },
    selectTemplate: (state, action) => {
      console.log('selectTemplate', action);
      state.select =
        state.templates.find((item) => item.id === action.payload) || null;
    },
    clearSelect: (state) => {
      state.select = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createPage.fulfilled, (state, action) => {
      const { payload } = action;
      const newSelect: any = payload.data;
      state.pages = [...state.pages, newSelect];
      state.select = newSelect;
    });
    builder.addCase(fetchPages.fulfilled, (state, action) => {
      const { payload }: any = action;
      const newArray: TPageTemplates[] = payload.data.rows;
      state.pages = newArray;
    });
    builder.addCase(updatePage.fulfilled, (state, action) => {
      const { payload }: any = action;
      const newSelect: any = payload.data;
      state.pages = state.pages.map((item) =>
        item.id === newSelect.id ? newSelect : item
      );
      state.select = newSelect;
    });
    builder.addCase(deletePage.fulfilled, (state, action) => {
      state.pages = state.pages.filter(
        (item) => Number(item.id) !== Number(action.meta.arg.id)
      );
    });

    builder.addCase(createTemplate.fulfilled, (state, action) => {
      const { payload } = action;
      const newSelect: any = payload.data;
      state.templates = [...state.pages, newSelect];
      state.select = newSelect;
    });
    builder.addCase(fetchTemplate.fulfilled, (state, action) => {
      const { payload }: any = action;
      const newArray: TPageTemplates[] = payload.data.rows;
      state.templates = newArray;
    });
    builder.addCase(updateTemplate.fulfilled, (state, action) => {
      const { payload }: any = action;
      const newSelect: any = payload.data;
      state.templates = state.pages.map((item) =>
        item.id === newSelect.id ? newSelect : item
      );
      state.select = newSelect;
    });
    builder.addCase(deleteTemplate.fulfilled, (state, action) => {
      state.templates = state.templates.filter(
        (item) => Number(item.id) !== Number(action.meta.arg.id)
      );
    });
  },
});

const { actions, reducer } = mainReducer;

export default reducer;

export const { selectPage, selectTemplate, clearSelect } = actions;
