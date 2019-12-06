export const playTrack = () => {
  return { type: "PLAY_TRACKS" };
};
export const pauseTrack = () => {
  return { type: "PAUSE_TRACKS" };
};
export const stopTrack = () => {
  return { type: "STOP_TRACKS" };
};

export const addTrack = (fileUrl, duration) => {
  return { type: "ADD_TRACK", payload: { fileUrl, duration } };
};
export const removeTrack = (filename, duration) => {
  return { type: "REMOVE_TRACK", payload: { filename, duration } };
};
export const fetchTracks = (filename, duration) => {
  return { type: "FETCH_TRACKS" };
};
