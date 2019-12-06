import { combineReducers } from "redux";
import _ from "lodash";

export const trackListReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TRACK":
      return { ...state, [action.payload.fileUrl]: action.payload };
    case "REMOVE_TRACK":
      return _.omit(state, action.payload);

    case "FETCH_TRACKS":
      return { ...state, ..._.mapKeys(action.payload, "filename") };
    default:
      return state;
  }
};

export const playTrackReducer = (state = { play: "stop" }, action) => {
  switch (action.type) {
    case "PLAY_TRACKS":
      return { ...state, play: "play" };
    case "PAUSE_TRACKS":
      return { ...state, play: "pause" };
    case "STOP_TRACKS":
      return { ...state, play: "stop" };
    default:
      return state;
  }
};
export default combineReducers({
  tracks: trackListReducer,
  play: playTrackReducer,
});
