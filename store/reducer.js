import { combineReducers } from "redux";

export default combineReducers({
  test: (state = {}) => ({ ...state, hei: 1 })
});
