import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./auth/authSlice"

export const store = configureStore({
  reducer: {
    // reducers will go here
    auth:authReducer
  },
})

// Type helpers (important for TypeScript)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch