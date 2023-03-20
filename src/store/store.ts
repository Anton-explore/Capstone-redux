import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { skillsReducer } from "../features/skills/skillsSlice";
import {educationReducer} from "../features/education/educationSlice";
import { useDispatch } from "react-redux";


const skillsPersistConfig = {
    key: 'skills',
    storage
};

const educationPersistConfig = {
  key: 'education',
  storage,
};

// const persistConfig = {
//     key: 'skills',
//     storage
// };

// const persistedReducer = persistReducer(persistConfig, skillsReducer);

export const store = configureStore({
  reducer: {
    // skills: persistedReducer
    skills: persistReducer(skillsPersistConfig, skillsReducer),
    education: persistReducer(educationPersistConfig, educationReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
  }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;


export const persistor = persistStore(store);

