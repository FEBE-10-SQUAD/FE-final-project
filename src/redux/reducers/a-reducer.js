import { APPLY_JOBS } from "../actions";

export function applyReducer(ApplyState = [], action) {
  if (action.type === APPLY_JOBS) {
    return [...ApplyState, action.payload];
  } else {
    return ApplyState;
  }
}
