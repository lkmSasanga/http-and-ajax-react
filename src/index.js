import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from "axios";

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';


axios.interceptors.request.use(request => {
    console.log(request);
    // Edit request
    return request;
}, error => {
    console.log(error); // this error pop ups when internet connection error something like that
    return Promise.reject(error); // not the response errors
});

axios.interceptors.response.use(response => {
    console.log(response);
    // Edit request
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
