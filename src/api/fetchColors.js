import axios from 'axios';

export const fetchColors = () => {
    return axios.get('http://localhost:5000/api/colors')
    .then(response => {
        return response;
    })
    .catch(error => {
        return error;
    })
}