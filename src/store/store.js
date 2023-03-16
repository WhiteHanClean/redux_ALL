import { createStore } from "redux"
import { goldenCardReducer } from "./reducer/goldenCardReducer"

export const store = createStore(goldenCardReducer)