import { takeLeading, delay, call, put } from "redux-saga/effects";
import {
  createWebResponseAction,
  webResponseSuccess,
  webResponseFailure,
  webResponseInitial,
  webResponseRequest
} from "../web-response";

const REQUEST_ABOUT_CONTENT = "REQUEST_ABOUT_CONTENT";
const SUCCESS_ABOUT_CONTENT = "SUCCESS_ABOUT_CONTENT";
const FAILURE_ABOUT_CONTENT = "FAILURE_ABOUT_CONTENT";

export const Actions = {
  request: () =>
    createWebResponseAction(REQUEST_ABOUT_CONTENT, webResponseRequest()),
  success: data =>
    createWebResponseAction(SUCCESS_ABOUT_CONTENT, webResponseSuccess(data)),
  failure: error =>
    createWebResponseAction(FAILURE_ABOUT_CONTENT, webResponseFailure(error))
};

const initialState = webResponseInitial();

export const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ABOUT_CONTENT:
    case FAILURE_ABOUT_CONTENT:
    case SUCCESS_ABOUT_CONTENT:
      return action.payload;
    default:
      return state;
  }
};

function* fetchAbout() {
  try {
    const apiCall = () =>
      new Promise(resolve => {
        setTimeout(() => resolve({ body: "kul text" }), 2000);
      });
    const response = yield call(apiCall);
    yield put(Actions.success(response));
  } catch (e) {
    yield put(Actions.failure(":("));
  }
}

export function* aboutSaga() {
  yield takeLeading(REQUEST_ABOUT_CONTENT, fetchAbout);
}
