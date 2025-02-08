

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

export const getAllProducts = createAsyncThunk(
  'products/getAllProducts',
  async () => {
    const response = await axios.get(API_URL+'/products');
    return response.data;
  }
);
export const getAllCategories = createAsyncThunk(
  'products/getAllCategories',
  async () => {
    const response = await axios.get(API_URL+'/products/categories');
    return response.data;
  }
);
export const getProductbyId = createAsyncThunk(
  'products/getProductbyId',
  async (id) => {
    const response = await axios.get(API_URL+`/products/${id}`);
    return response.data;
  }
);

const initialState = {
  products: [],
  categories: [],
  productDetail: {},
  filteredProducts: [],
  status: 'idle',
  error: null,

};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    sortProducts(state, action) {
      const { shortValue, order } = action.payload;
     
      const newProductData = state.filteredProducts.slice().sort((a, b) => {
        if (shortValue === 'price') {
          if (order === 'ascending') {
            return (a.price - b.price);
          } else {
            return (b.price - a.price);
          }
        } else if (shortValue === 'rating') {
          if (order === 'ascending') {
            return (a.rating.rate - b.rating.rate);
          } else {
            return (b.rating.rate - a.rating.rate);
          }
        }    });
      state.filteredProducts = newProductData;
    },
 
    filterWithCategory(state,action){
      const category = action.payload;
      if(category==('all' || category=='' )){
         state.filteredProducts = state.products;

      }else{
       const categoryFilterdData = state.products.filter((p)=>p.category==category);
        state.filteredProducts = categoryFilterdData;

      }


    },

    getProductbySearch(state,action){
      const searchValue = action.payload.trim();
      // when we add debouncing then we face a problem that when we pass nothing then is not show any product.(ex:- searchValue =" ")
      if(searchValue === ""){
        state.filteredProducts = [...state.products]; 
      }else{
      var searchFilterdData = state.products.filter((p)=>p.title.toLowerCase().includes(searchValue.toLowerCase()));
      state.filteredProducts = searchFilterdData;
      }

    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
        state.filteredProducts = action.payload; 
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getAllCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getProductbyId.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProductbyId.fulfilled, (state, action) => {
          state.status = 'succeeded'
        state.productDetail = action.payload;
      })
      .addCase(getProductbyId.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
export const { sortProducts, filterWithCategory,getProductbySearch } = productSlice.actions;
