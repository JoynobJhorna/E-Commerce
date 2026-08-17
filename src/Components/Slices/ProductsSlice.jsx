import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'products',
  initialState: {
    value: []
  },
  reducers: {
    ProductReducers: (state, action) => {
      state.value = action.payload
    }
  }
})
     
export const { ProductReducers  } = ProductSlice.actions

export default ProductSlice.reducer