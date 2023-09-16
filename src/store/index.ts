import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { reducer } from "./reducer";

const composeEnhancer = composeWithDevTools();

export const store =
  process.env.NODE_ENV === "production"
    ? createStore(reducer)
    : createStore(reducer, composeEnhancer);
export { reducer };
