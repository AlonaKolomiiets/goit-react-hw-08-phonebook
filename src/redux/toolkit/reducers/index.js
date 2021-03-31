import { combineReducers } from "redux";
import contactsReducers from "./contactsReducer";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter"],
// };

// const persistedReducer = persistReducer(persistConfig, contactsReducer);

const rootReducer = combineReducers({
  contacts: contactsReducers,
});

export default rootReducer;
