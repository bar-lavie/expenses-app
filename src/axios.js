import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://expenses-app-cdf15.firebaseio.com/'
});

export default instance;