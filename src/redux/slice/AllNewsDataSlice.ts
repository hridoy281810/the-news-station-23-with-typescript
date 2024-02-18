import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export interface NewsItem {
id?:number; 
title:string;
category?:string;
author:string;
author_url:string;
date:string;
description?:string;
content:string;
image_url:string;
rating:number;
total_views:number;
  }
 interface newsData{
    isLoading: boolean;
    newsData: NewsItem[];
    error: string | undefined;
}
const initialState: newsData = {
    isLoading:false,
    newsData: [],
    error: undefined
}
export const fetchAllNewsData = createAsyncThunk(
    "newsData/fetchAllNewsData",
    async () => {
      const res = await axios.get("newsData.ts");
      console.log(res.data);
      return res.data;
    }
  );
  
  const allNewsDataSlice = createSlice({
    name: "newsData",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchAllNewsData.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(fetchAllNewsData.fulfilled, (state, action) => {
          state.isLoading = false;
          state.newsData = action.payload;
          state.error = undefined;
        })
        .addCase(fetchAllNewsData.rejected, (state, action) => {
          state.isLoading = false;
          state.newsData = [];
          state.error = action.error.message;
        });
    },
  });
  
  export default allNewsDataSlice.reducer;