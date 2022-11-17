import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import TodoSlice from "./Reducer/Todo.Slice";

const persistConfigue = {
    key:"root",
    version:1,
    storage
}

const reducer = combineReducers ({
    todos:TodoSlice
})

const persistedReducer = persistReducer(persistConfigue,reducer)

export const store = configureStore({
    reducer:persistedReducer
})

// export const store = configureStore({
//     reducer: {
//         todos:TodoSlice
//     }
//   })
