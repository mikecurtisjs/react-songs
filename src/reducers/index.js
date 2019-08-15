import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Winning Side", duration: "4:05" },
    { title: "Amazing Grace", duration: "5:05" },
    { title: "Blessed Be the Name", duration: "3:05" },
    { title: "Victory In Jesus", duration: "3:45" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
