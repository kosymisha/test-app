import axios from 'axios';
const API_URI_LOCAL = 'http://localhost:8080';
const API_URI = 'https://ars-back.herokuapp.com/';

const fetchTableData = type => {
    return axios.get(API_URI + '/items?type=' + type);
};

const fetchHints = keyword => {
    return  axios.get(API_URI + '/types?keyword=' + keyword);
};

export { fetchTableData, fetchHints };
