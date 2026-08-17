import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './Slices/ProductsSlice'

export default configureStore({
  reducer: {
    products: ProductSlice
  }
})