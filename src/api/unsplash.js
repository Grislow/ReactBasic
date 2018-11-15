import axios from 'axios';

// create instance of axios HTTP client with defaulted properties
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 677b38a0fea8dba2f8d31f21fc6f4054ebd99af740dbc3830d828439152568a6'
    }
});