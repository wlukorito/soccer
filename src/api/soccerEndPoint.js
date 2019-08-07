import axios from 'axios';

export default axios.create({
    baseURL: 'http://172.17.186.161:8000/api/league'
});
