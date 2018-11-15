import axios from 'axios';

const KEY = 'AIzaSyAgRGqtWJoCx7SxN7zXFffLB0DeUeBBMwg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});