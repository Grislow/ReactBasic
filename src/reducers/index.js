import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'Gangsta\'s paradise' , duration: '4:17' },
        { title: 'Walk it Talk it' , duration: '4:38' },
        { title: 'T-shirt' , duration: '4:53' },
        { title: 'Motorsport' , duration: '5:18' }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if( action.type === 'SONG_SELECTED' ) {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});