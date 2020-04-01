import { takeLatest, all } from "redux-saga/effects";
import socketIOClient from "socket.io-client";
import { config } from "../Constants";

function* triggerTweets(action) {
  const io = socketIOClient;
  yield io.socket.get(
    `${config.API_URL}/tweets/?q=${action.payload.searchItem}`,
    null,
    response => {
      console.log(response);
      return response;
    }
  );
}
function* actionWatcher() {
  yield takeLatest("TRIGGER_TWEETS", triggerTweets);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
