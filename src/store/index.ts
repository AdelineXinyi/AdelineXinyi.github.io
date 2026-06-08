
import { configureStore, createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    activeSection: 'about' as string,
  },
  reducers: {
    setActiveSection(state, action) {
      state.activeSection = action.payload
    },
  },
})

export const { setActiveSection } = uiSlice.actions

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
