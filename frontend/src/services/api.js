import axios from 'axios';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjIzOTI3MTU2LCJleHAiOjE2MjQ1MzE5NTZ9.tqtLwdInDdxBfVgZXL2IW9nKmHdCQ0b1AIER9sVCFEk";

axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}

const api = axios.create({
    baseURL: "http://localhost:3333"
});

export default api;