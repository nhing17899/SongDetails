import { configureStore } from "@reduxjs/toolkit";

// create reducers

// - cannot modify list of songs
const songListReducer = () => {
    return [
        { title: 'A', duration: '4:05s'},
        { title: 'B', duration: '5:05s'},
        { title: 'C', duration: '6:05s'},
        { title: 'D', duration: '7:05s'},
    ]
}

// - first case we have no song to select -> no NULL
// - reducer goes with action
const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SELECT_SONG') {
        return action.payload;
    }
    return selectedSong;
}

// export list of Reducers
// -> then Provide will have a prop called store
// -> at that step: this list passed down to create store
export default configureStore({
    reducer: {
        songList: songListReducer,
        selectedSong: selectedSongReducer
    }
})