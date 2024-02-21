import { configureStore } from '@reduxjs/toolkit';
import servicesReducer from './slices/servicesSlice';
import holidayReducer from './slices/holidaysSlice';
const store = configureStore({
  reducer: {
    services: servicesReducer,
    holidays:holidayReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export { store };