// import { createStore } from "redux";
// import reducers from "../reducers";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});

// const store = createStore(reducers);
// export default store;
