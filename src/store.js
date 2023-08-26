import { createStore } from "redux";
import { RootReducer } from "./rootreducer/rootreducer";

export const store =createStore(RootReducer,window.__redux_devtools_extension__ && window.__redux_devtools_extension__())
